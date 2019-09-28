import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col, Visible} from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Cookies from 'universal-cookie';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import axios from 'axios';

let counter = 0;
let counterLoc = 0;
let allLocs = [];

const axiosConfig = {
  withCredentials: true
};

const params = {v: '3.exp', key: 'AIzaSyBT8geVW0_7SWA40w-ngiVhb_ODVaqlJiU'};

const cookies = new Cookies();
    

export class Walkin extends Component {

  constructor() {
    super();
    this.state = {
      deviceFullDescription: cookies.get('device-brand') + ' ' + cookies.get('device-model'),
      issues: '',
      payLabel: '',
      deliveryTime: '',
      deliveryDate: '',
      name: '',
      deliveryCentre: '',
      coords: {
        lat: 12.926717,
        lng: 77.633545
      },
      timeSlots: [],
      locations: [],
      storeName: '',
      dateSlots: []

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleMapCreated = this.handleMapCreated.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);


    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleAddJob = this.handleAddJob.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {

   $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  
    if (cookies.get('userId') === undefined || cookies.get('userId') === null || cookies.get('userId') === '') {
      window.location = '/repair';
      return;
    }
      cookies.set('date', "false", {path: '/'});
      cookies.set('time', "false", {path: '/'});
      cookies.set('nameflag', "false", {path: '/'});
      cookies.set('locationflag', "false", {path: '/'});






      axios.get(apilink+'/website/walkin_date/', JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        const allTimes = response.data.map(val => {
          return (
            <MenuItem key={counter++} className="menu-item-repair" value={val} primaryText={val}/>
          );
        });
        this.setState({
          dateSlots: allTimes
        });
      })
      .catch(error => {
        console.log(error);
      });


    axios.get(apilink+'/website/walkin_location/', JSON.stringify(axiosConfig))
      .then(response => {
        console.log("hi"+response.data);
        const allLocations = response.data.map(loc => {
          return (
            <MenuItem key={counterLoc++} className="menu-item-repair" value={loc.code} primaryText={loc.name}/>
          );
        });

        this.setState({
          locations: allLocations
        });
        allLocs = response.data;
        try {
          var date = cookies.get('date');
          var time = cookies.get('time');
          var nameflag = cookies.get('nameflag');


          if( date =="true" && time=="true" && nameflag=="true"){
          document.getElementById('floating-btn-bot-dis').classList.add('hide');
          document.getElementById('floating-btn-bot').classList.remove('hide');
        }
        } catch (err) {
          console.log(err.message);
        }
        this.forceUpdate();

        try {
             var date = cookies.get('date');
            var time = cookies.get('time');
          var nameflag = cookies.get('nameflag');

          if( date =="true" && time=="true" && nameflag=="true"){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
        }
        } catch (err) {
          console.log(err.message);
        }
        this.forceUpdate();

        try {
          document.getElementById('repair-msg-row-1').classList.add('hide');
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleAddJob(e) {

    $('#desk-btn-mobile-disbale').hide();

    var fullname = this.state.name;
    var splitname = fullname.split(" ");
    if(splitname[1] === undefined){
      splitname[1]  = " "
    }
    cookies.set('first_name', splitname[0], {path: '/'});
    cookies.set('last_name', splitname[1], {path: '/'});

    var utm_source =     localStorage.getItem('utm_source');
    var utm_medium = localStorage.getItem('utm_medium');
    var utm_campaign = localStorage.getItem('utm_campaign');
    var gclid = localStorage.getItem('gclid');




    $(".paybutton").css("display",'none');
    $(".estimateContainer").css("opacity",0.5);
    $("#loading-img").css({"display": "block"});
    console.log(cookies.get('device-issues'))
    if(cookies.get('location') == 'JA'){
      axios.post('https://techventure.iservice.co.in/website/createjob/', {utm_source: utm_source, utm_medium: utm_medium,utm_campaign : utm_campaign,gclid : gclid, name:cookies.get('name'),first_name: cookies.get('first_name'),last_name: cookies.get('last_name'),customer_id: localStorage.getItem('number'),total_amount: cookies.get('total-estimate'), location_code: this.state.deliveryCentre, address: "Service Center", device: cookies.get('device-model'), problems: cookies.get('device-issues'), colour: "No Colour", type: cookies.get('type'), "date" : cookies.get('date_slot'), "time" : cookies.get('time_slot')}, JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        if (response.data.job_id) {
          if (cookies.get('skip-pay')=='1') {
            cookies.set('current-job-id', response.data.job_id, {path: '/'});
            window.location = '/payment';
          }
          else{
            cookies.set('current-job-id', response.data.job_id, {path: '/'});
              axios.post(apilink+'/website/imojopayment/', {
                  id: response.data.job_id,
                  amount: response.data.amount,
                  'success-url': 'https://app.iservice.co.in/payment'
                }, JSON.stringify(axiosConfig))
                .then(response => {
                  console.log(response);
                  window.location = response.data.url;
                })
                .catch(error => {
                  console.log(error);
                });
            }
          }
      })
      .catch(error => {
        console.log("hey" + error);
        if (cookies.get('skip-pay')) {
          cookies.set('current-job-id', 'N20322', {path: '/'});
          window.location = '/track';
        }
        cookies.set('current-job-id', 'N20322', {path: '/'});
      });
    }

    else{
      axios.post(apilink+'/website/createjob/', {utm_source: utm_source, utm_medium: utm_medium,utm_campaign : utm_campaign,gclid : gclid, name:cookies.get('name'),first_name: cookies.get('first_name'),last_name: cookies.get('last_name'),customer_id: cookies.get('userId'),total_amount: cookies.get('total-estimate'), location_code: this.state.deliveryCentre, address: "Service Center", device: cookies.get('device-model'), problems: cookies.get('device-issues'), colour: "No Colour", type: cookies.get('type'), "date" : cookies.get('date_slot'), "deviceid" : cookies.get('trackdeviceid'), "time" : cookies.get('time_slot')}, JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        if (response.data.job_id) {
          if (cookies.get('skip-pay')=='1') {
            cookies.set('current-job-id', response.data.job_id, {path: '/'});
            window.location = '/payment';
          }
          else{
            cookies.set('current-job-id', response.data.job_id, {path: '/'});
              axios.post(apilink+'/website/imojopayment/', {
                  id: response.data.job_id,
                  amount: response.data.amount,
                  'success-url': 'https://app.iservice.co.in/payment'
                }, JSON.stringify(axiosConfig))
                .then(response => {
                  console.log(response);
                  window.location = response.data.url;
                })
                .catch(error => {
                  console.log(error);
                });
            }
          }
      })
      .catch(error => {
        console.log("hey" + error);
        if (cookies.get('skip-pay')) {
          cookies.set('current-job-id', 'N20322', {path: '/'});
          window.location = '/track';
        }
        cookies.set('current-job-id', 'N20322', {path: '/'});
      });
    }
  }

  handleMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  handleDateChange(e, i, val) {
    
    console.log(i, val);
    var res = val.split("-");
    axios.get(apilink+'/website/walkin_time/'+res[0], JSON.stringify(axiosConfig))
    .then(response => {
      console.log(response);
      const allTimes = response.data.map(val => {
        return (
          <MenuItem key={counter++} className="menu-item-repair" value={val} primaryText={val}/>
        );
      });
      this.setState({
        timeSlots: allTimes
      });
    })
    .catch(error => {
      console.log(error);
    });



    cookies.set('date_slot', val, {path: '/'});
      cookies.set('date', "true", {path: '/'});


    this.setState({
      deliveryDate: val
    });
           var date = cookies.get('date');
          var time = cookies.get('time');
          var nameflag = cookies.get('nameflag');
          var locationflag = cookies.get('locationflag');


          
            if( date !="false" && time !="false" && nameflag !="false" &&  locationflag !="false" ){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
          document.getElementById('desk-btn-mobile-disbale').classList.remove('disabled');

        }
    
  }
  handleDragEnd(e) {
    console.log('onDragEnd', e);
  }

  handleCloseClick() {
    console.log('onCloseClick');
  }

  handleClick(e) {
    console.log('onClick', e);
  }

  handleTimeChange(e, i, val) {
    cookies.set('time_slot', val, {path: '/'});
    cookies.set('time', "true", {path: '/'});

    console.log(i, val);
    this.setState({
      deliveryTime: val
    });
           var date = cookies.get('date');
      var time = cookies.get('time');
          var nameflag = cookies.get('nameflag');
          var locationflag = cookies.get('locationflag');



        if( date !="false" && time !="false"  && nameflag !="false" && locationflag !="false" ){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
          document.getElementById('desk-btn-mobile-disbale').classList.remove('disabled');

        }

  }


  handleNameChange(e, val){
    this.setState({
      name: val
    });
    cookies.set('name', val, {path: '/'});
    if(val == ""){

      cookies.set('nameflag', "false", {path: '/'});
           document.getElementById('desk-btn-dis').classList.remove('hide');
          document.getElementById('desk-btn').classList.add('hide');




    }
    else{
      cookies.set('nameflag', "true", {path: '/'});

    }

        var date = cookies.get('date');
          var time = cookies.get('time');
          var nameflag = cookies.get('nameflag');
          var locationflag = cookies.get('locationflag');

        if( date !="false" && time !="false" && nameflag !="false" && locationflag !="false"){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
          document.getElementById('desk-btn-mobile-disbale').classList.remove('disabled');
        }
  }

  handleLocationChange(e, i, val) {
    this.setState({
      deliveryCentre: val
    });
    cookies.set('location', val, {path: '/'});
    cookies.set('locationflag', "true", {path: '/'});


    for (let i = 0; i < allLocs.length; i++) {
      if (allLocs[i].code === val) {
        this.setState({
          coords: {
            lat: allLocs[i].latitude,
            lng: allLocs[i].longitude
          },
          storeName: allLocs[i].name
        });
      }
    }
    var date = cookies.get('date');
    var time = cookies.get('time');
    var nameflag = cookies.get('nameflag');
    var locationflag = cookies.get('locationflag');


    if( date !="false" && time !="false" && nameflag !="false" && locationflag !="false"){
      document.getElementById('desk-btn-dis').classList.add('hide');
      document.getElementById('desk-btn').classList.remove('hide');
      document.getElementById('desk-btn-mobile-disbale').classList.remove('disabled');
    }

  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        
          <Container fluid className="estimateContainer" style={{padding: '50px 30px 30px 30px'}}>
             <div id="loading-img"></div>
               

            <Row>
              <Col md={1} xs={1} />
              <Col md={5} xs={11}>
                <Row style={{paddingBottom: '20px'}}>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading">
                      1
                    </span>
                    <span className="product-heading" style={{paddingLeft: '20px', paddingBottom: '20px'}}>
                      Name
                    </span>
                  </Col>
                </Row>
                <Col md={8} xs={11}>
                <TextField onChange={this.handleNameChange} value={this.state.name} hintText="Name" fullWidth className="trackerOrder delivery"/>
                </Col>
                <Row style={{paddingBottom: '20px'}}>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading">
                      2
                    </span>
                    <span className="product-heading" style={{paddingLeft: '20px', paddingBottom: '20px'}}>
                      SELECT DATE
                    </span>
                  </Col>
                </Row>
                <Col md={8} xs={11}>

                  <SelectField
                    value={this.state.deliveryDate}
                    className="repair-select-field"
                    hintText="Select date..."
                    onChange={this.handleDateChange}
                    style={{marginBottom: '20px', width: '100%'}}
                    fullWidth
                    >
                    {this.state.dateSlots}
                  </SelectField>
                </Col>



                <Row style={{paddingBottom: '20px'}}>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading">
                      3
                    </span>
                    <span className="product-heading" style={{paddingLeft: '20px', paddingBottom: '20px'}}>
                      SELECT TIME
                    </span>
                  </Col>
                </Row>
                <Col md={8} xs={11}>
                  <SelectField
                    value={this.state.deliveryTime}
                    className="repair-select-field"
                    hintText="Select time..."
                    onChange={this.handleTimeChange}
                    style={{marginBottom: '20px'}}
                    fullWidth
                    >
                    {this.state.timeSlots}
                  </SelectField>
                </Col>
                    <br/>
              
                <Row style={{paddingBottom: '20px'}}>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading">
                      4
                    </span>
                    <span className="product-heading" style={{paddingLeft: '20px'}}>
                      SELECT STORE LOCATION
                    </span>
                  </Col>
                </Row>
                <Col md={8} xs={11}>
                <SelectField
                  value={this.state.deliveryCentre}
                  className="repair-select-field"
                  hintText="Select nearest centre..."
                  onChange={this.handleLocationChange}
                  style={{marginBottom: '20px'}}
                  fullWidth
                  >
                  {this.state.locations}
                </SelectField>
                </Col>
                </Col>
                    <Col md={5} xs={11}>

                <Gmaps
                  width={'100%'}
                  height={'300px'}
                  lat={this.state.coords.lat}
                  lng={this.state.coords.lng}
                  zoom={11}
                  loadingMessage={'Please wait'}
                  params={params}
                  onMapCreated={this.handleMapCreated}
                  >
                  <Marker
                    lat={this.state.coords.lat}
                    lng={this.state.coords.lng}
                    draggable
                    onDragEnd={this.handleDragEnd}
                    />
                  <InfoWindow
                    lat={this.state.coords.lat}
                    lng={this.state.coords.lng}
                    content={this.state.storeName}
                    onCloseClick={this.handleCloseClick}
                    />
                </Gmaps>
              </Col>
              <Col md={1} xs={1} />

                <br />
                <br />
                <br />

                <div style={{textAlign: 'center'}}>
                <br />
                <br />
                <br />
                
              <Col sm={1} md={1} xs={1} />
              <br />

                  <FlatButton id="desk-btn-dis" backgroundColor="#3386f4" hoverColor="#3386f4" label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'CONFIRM AND PAY ₹ ' + cookies.get('total-estimate')}  style={{color: '#fff', margin: '20px auto', height: '50px',minWidth: '0px'}} className="floating-btn-bot-row hide-on-mobile disabled btn-height paybutton"/>
                  <FlatButton  id="desk-btn" onClick={this.handleAddJob} backgroundColor="#3386f4" hoverColor="#3386f4" label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'CONFIRM AND PAY ₹ ' + cookies.get('total-estimate')}  style={{color: '#fff', margin: '20px auto', height: '50px',minWidth: '0px'}} className="floating-btn-bot-row hide hide-on-mobile btn-height paybutton"/>
                  <br />
                  <br />

                </div>
              <Col sm={2} md={4} xs={12}>
                <br/>
              </Col>
            </Row>
          </Container>
          <Visible xs sm>
            <Container fluid className="header header-mobile">
              <Row id="floating-btn-bot" className="floating-btn-bot-row hide">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FlatButton onClick={this.handleAddJob} label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'PAY ₹ ' + cookies.get('total-estimate')} fullWidth className="floating-btn-bot paybutton"/>
                  
                </Col>
              </Row>
              <Row id="floating-btn-bot-dis" className="floating-btn-bot-row" style={{paddingBottom: '20px'}}>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FlatButton id="desk-btn-mobile-disbale" onClick={this.handleAddJob} label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'PAY ₹ ' + cookies.get('total-estimate')} fullWidth className="floating-btn-bot disabled"/>
                
                </Col>
              </Row>
            </Container>
          </Visible>
        </div>
      </MuiThemeProvider>
    );
  }
}

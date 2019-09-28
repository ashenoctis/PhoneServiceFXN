import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col, Visible} from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ActionFavorite from 'material-ui/svg-icons/image/lens';
import ActionFavoriteBorder from 'material-ui/svg-icons/image/panorama-fish-eye';
import CircularProgress from 'material-ui/CircularProgress';
import Cookies from 'universal-cookie';
import axios from 'axios';
const geolocator = require('geolocator');
const axiosConfig = {
  withCredentials: true
};
let counter = 0;
let counterAdd = 0;

const cookies = new Cookies();

export class Delivery extends Component {

  constructor() {
    super();
    this.state = {
      deviceFullDescription: cookies.get('device-brand') + ' ' + cookies.get('device-model'),
      issues: '',
      payLabel: '',
      deliveryTime: '',
      city: '',
      postalCode: '',
      street: '',
      address: '',
      houseNumber: '',
      timeSlots: [],
      savedAddress: [],
      selectedAdd: '',
       timeSlots: [],
      dateSlots: []
    };
    
    geolocator.config({
      language: 'en',
      google: {
        version: '3',
        key: 'AIzaSyBT8geVW0_7SWA40w-ngiVhb_ODVaqlJiU'
      }
    });
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);


    
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handlePincodeChange = this.handlePincodeChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleAddJob = this.handleAddJob.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {





    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  
    console.log('loaded user id:' + cookies.get('userId'));
    console.log('total-estimate:' + cookies.get('total-estimate'));
      cookies.set('date', "false", {path: '/'});
      cookies.set('time', "false", {path: '/'});

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumWait: 10000,
      maximumAge: 0,
      desiredAccuracy: 30,
      fallbackToIP: true,
      addressLookup: true,
      timezone: true
    };
    geolocator.locate(options, (err, location) => {
      if (err) {
        return console.log(err);
      }
      console.log(location);
      cookies.set('location', location.formattedAddress, {path: '/'});

      this.setState({
        city: location.address.city,
        postalCode: location.address.postalCode,
        street: location.address.street,
        address: location.formattedAddress
      });
      $('#loaderCircle').css('display','none')

      cookies.set('city', location.address.city, {path: '/'});
      cookies.set('postalCode', location.address.postalCode, {path: '/'});
      cookies.set('street', location.address.street, {path: '/'});
      cookies.set('address', location.formattedAddress, {path: '/'});
      document.querySelector('#disappear-text').style.opacity = 0;
    });



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
      })

    axios.post(apilink+'/website/user/', {id: cookies.get('userId')}, JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        const addresses = response.data.address.map(add => {
          console.log(add);
          return (
            <RadioButton
              key={counterAdd++}
              value={add.id}
              label={add.address_first_line + '...'}
              checkedIcon={<ActionFavorite style={{color: '#7ed321'}}/>}
              uncheckedIcon={<ActionFavoriteBorder style={{color: '#d6edff'}}/>}
              style={{margin: '10px'}}
              iconStyle={{width: '15px'}}
              disableTouchRipple
              />
          );
        });
        this.setState({
          savedAddress: addresses
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleAddJob(e) {

    var city = this.state.city;
    var fullname = this.state.name
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


    city = city.toLowerCase();

     $(".paybutton").css("display",'none');
    $(".estimateContainer").css("opacity",0.5);
     $("#loading-img").css({"display": "block"});
    e.preventDefault();
    console.log(this.state.selectedAdd);
    if (this.state.houseNumber) {
      axios.post(apilink+'/website/updateprofile/', {id: cookies.get('userId'), address: [{address_first_line: this.state.houseNumber, address_second_line: this.state.street, city: this.state.city, state: '', country: 'India', pincode: this.state.postalCode}]}, JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        if (response.data.status === 'Successful') {
          axios.post(apilink+'/website/user/', {id: cookies.get('userId')}, JSON.stringify(axiosConfig))
            .then(response => {
              console.log(response);
              for (let j = 0; j < response.data.address.length; j++) {
                console.log(response.data.address[j].address_first_line, this.state.houseNumber);
                if (response.data.address[j].address_first_line === this.state.houseNumber) {
                  axios.post(apilink+'/website/createjob/', {utm_source: utm_source, utm_medium: utm_medium,utm_campaign : utm_campaign,gclid : gclid,name:cookies.get('name'),first_name: cookies.get('first_name'),last_name: cookies.get('last_name'),amc_problem: cookies.get('amc_problem'), customer_id: cookies.get('userId'), "deviceid" : cookies.get('trackdeviceid'), total_amount: cookies.get('total-estimate'), address: [{address_first_line: this.state.houseNumber, address_second_line: this.state.street, city: this.state.city, state: '', country: 'India', pincode: this.state.postalCode}] ,location_code: 'HQ', address_id: response.data.address[j].id, device: cookies.get('device-model'), problems: cookies.get('device-issues'),b2b: cookies.get('b2b'), colour: "No Colour", type: cookies.get('type'),"date" : cookies.get('date_slot'), "time" : cookies.get('time_slot')}, JSON.stringify(axiosConfig))
                    .then(response => {
                      console.log(response);
                      if (response.data.job_id) {
                        if (cookies.get('skip-pay')=='1') {
                          cookies.set('current-job-id', response.data.job_id, {path: '/'});
                          window.location = '/payment';
                        }
                      }
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
                    })
                    .catch(error => {
                      console.log(error);
                      cookies.set('current-job-id', 'N20322', {path: '/'});
                      window.location = '/payment';
                    });
                }
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      axios.post(apilink+'/website/createjob/', {customer_id: cookies.get('userId'), location_code: 'KR', address_id: this.state.selectedAdd, device_id: cookies.get('device-model-id'), problems: cookies.get('device-issues'), colour: cookies.get('device-colour'), type: 'Pickup and Drop'}, JSON.stringify(axiosConfig))
        .then(response => {
          console.log(response);
          if (response.data.job_id) {
            cookies.set('current-job-id', response.data.job_id, {path: '/'});
            window.location = '/payment';
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

  }

  handleAddressChange(e, val) {
    console.log(val);

    this.setState({
      selectedAdd: val
    });
    try {
           var date = cookies.get('date');
      var time = cookies.get('time');
      if( date =="true" && time=="true"){
      document.getElementById('floating-btn-bot-dis').classList.add('hide');
      document.getElementById('floating-btn-bot').classList.remove('hide');
    }
    } catch (err) {
      console.log(err.message);
    }

    try {
           var date = cookies.get('date');
      var time = cookies.get('time');
      if( date =="true" && time=="true"){
      document.getElementById('desk-btn-dis').classList.add('hide');
      document.getElementById('desk-btn').classList.remove('hide');
    }
    } catch (err) {
      console.log(err.message);
    }

    cookies.set('address-id', val, {path: '/'});
  }

  handleTimeChange(e, i, val) {
    cookies.set('time', "true", {path: '/'});
    cookies.set('time_slot', val, {path: '/'});
    console.log(i, val);
    this.setState({
      deliveryTime: val
    });
           var date = cookies.get('date');
      var time = cookies.get('time');
            if( date =="true" && time=="true"){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
        }
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


      cookies.set('date', "true", {path: '/'});

      cookies.set('date_slot', val, {path: '/'});
      this.setState({
        deliveryDate: val
      });


           var date = cookies.get('date');
        var time = cookies.get('time');
            if( date =="true" && time=="true"){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
        }
  }


  handleNameChange(e, val){
    this.setState({
      name: val
    });
    cookies.set('name', val, {path: '/'});
    

  }

  handleNumberChange(e, val) {
    this.setState({
      houseNumber: val
    });
    try {
                    var date = cookies.get('date');
      var time = cookies.get('time');
      if( date =="true" && time=="true"){
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
      if( date =="true" && time=="true"){

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
    this.forceUpdate();
  }

  handleStreetChange(e, val) {
    this.setState({
      street: val
    });
  }

  handlePincodeChange(e, val) {
    this.setState({
      postalCode: val
    });
  }

  handleCityChange(e, val) {
    this.setState({
      city: val
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Container fluid className="estimateContainer" style={{padding: '60px 40px 40px 40px'}}>
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

              <TextField onChange={this.handleNameChange} value={this.state.name} hintText="Name" fullWidth className="trackerOrder delivery"/>

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
              <SelectField
                value={this.state.deliveryTime}
                className="repair-select-field"
                hintText="Select time..."
                onChange={this.handleTimeChange}
                style={{marginBottom: '20px', width: '100%'}}
                fullWidth
                >
                {this.state.timeSlots}
              </SelectField>
              </Col>
              <Col md={5} xs={11}>

              <Row>
                <Col md={5} xs={11}>
                  <span className="product-heading">
                    4
                  </span>
                  <span className="product-heading" style={{paddingLeft: '20px'}}>
                    ADD PICKUP ADDRESS
                  </span>
                </Col>
              </Row>
              <TextField onChange={this.handleNumberChange} value={this.state.houseNumber} hintText="House number / floor" fullWidth className="trackerOrder delivery"/>
              <TextField onChange={this.handleStreetChange} value={this.state.street} hintText="Street" fullWidth className="trackerOrder delivery"/>
              <TextField onChange={this.handleCityChange} value={this.state.city} hintText="City" fullWidth className="trackerOrder delivery"/>
              <TextField onChange={this.handlePincodeChange} value={this.state.postalCode} hintText="Pincode" fullWidth className="trackerOrder delivery"/>


              <Visible xs sm>
                <Container fluid className="header header-mobile">
                  <Row id="floating-btn-bot" className="floating-btn-bot-row hide">
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FlatButton onClick={this.handleAddJob} label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'PAY ₹ ' + cookies.get('total-estimate')} fullWidth className="floating-btn-bot paybutton"/>
                      
                    </Col>
                  </Row>
                  <Row id="floating-btn-bot-dis" className="floating-btn-bot-row">
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FlatButton label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'PAY ₹ ' + cookies.get('total-estimate')} fullWidth className="floating-btn-bot disabled paybutton"/>
                        
                    </Col>
                  </Row>
                </Container>
              </Visible>
            </Col>
       
        
     
                  <Col md={1} xs={1}>
              <br/>
            </Col>

          </Row>
           <div style={{textAlign: 'center'}}>
           <h3 className="locationerror"><center>We dont service in your location yet.</center></h3>
                <FlatButton id="desk-btn-dis" backgroundColor="#3386f4" hoverColor="#3386f4" label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'PAY ₹ ' + cookies.get('total-estimate')} style={{color: '#fff', margin: '20px auto', height: '50px',minWidth: '0px'}} className="floating-btn-bot-row hide-on-mobile disabled btn-height"/>
                <FlatButton id="desk-btn" onClick={this.handleAddJob} backgroundColor="#3386f4" hoverColor="#3386f4" label={(cookies.get('skip-pay') === '1') ? 'CONFIRM ORDER' : 'PAY ₹ ' + cookies.get('total-estimate')} style={{color: '#fff', margin: '20px auto', height: '50px',minWidth: '0px'}} className="floating-btn-bot-row hide hide-on-mobile btn-height"/>
                  <br />
                  <sub>I agree to all Iservice terms and condition</sub> 
                  
              </div>
        </Container>
      </MuiThemeProvider>
    );
  }
}

import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DownIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import {Repair} from './../repairnew/repairnew';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Snackbar from 'material-ui/Snackbar';
import OwlCarousel from 'react-owl-carousel2';
import DocumentMeta from 'react-document-meta';



    var utm_source = localStorage.getItem('utm_source');
    var utm_medium = localStorage.getItem('utm_medium');
    var utm_campaign =  localStorage.getItem('utm_campaign');
    var gclid = localStorage.getItem('gclid');


    localStorage.setItem('utm_source1',utm_source);
    localStorage.setItem('utm_medium1',utm_medium);
    localStorage.setItem('utm_campaign1',utm_campaign);
    localStorage.setItem('gclid1',gclid);



const cookies = new Cookies();
const emailRegex = /^\S+@\S+\.\S+$/;
let standardHtml = null;
let allModels = [];
let validEmail;
const dataSourceModels = [];
const primaryColor = '#3386f4';
const hoverColor = '#3E8CF8';
const buttonHeight = '50px';

let searchArr = [];
let searchKey = [];

const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    navText:true
};


const link = apilink;

const events = {
    onDragged: function(event) {},
    onChanged: function(event) {}
};


export class Landing extends Component {

  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
    this.state = {dataSource: [], testvalue: 1, RepairOpen: false, signupOpen: false, repairStr: '', chosenModel: '', chosenProblem: '', email: '', phone: '', password: '', signInOpen: false, invalid: '', invalidSignup: '', signUpSuccess: false, openSnack: false, openTablet: false};
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
    this.handleCheckBlurElement = this.handleCheckBlurElement.bind(this);
    this.handleEmailUpdateInput = this.handleEmailUpdateInput.bind(this);
    this.handleMobileUpdateInput = this.handleMobileUpdateInput.bind(this);
    this.handlePasswordUpdateInput = this.handlePasswordUpdateInput.bind(this);
    this.handleOpenSignIn = this.handleOpenSignIn.bind(this);
    this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
    this.handleSigninBtn = this.handleSigninBtn.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);
    this.handleTrackOrder = this.handleTrackOrder.bind(this);
    this.handleViewAllJobs = this.handleViewAllJobs.bind(this);
  }

  handleViewAllJobs() {
    window.location = '/orders';
  }

  handleRedirect(e) {
    e.preventDefault();
    document.getElementById('landing-repair').style.border = '1px solid #3F51B5';
    window.location = '/repair';

  }

  handleTrackOrder(e) {
    cookies.set('current-job-id', e.target.id, {path: '/'});
    window.location = '/track';
  }

  componentDidMount() {
    var parts = window.location.href;
    localStorage.setItem('ad_url',parts);
    localStorage.setItem('ad_url_landing',parts);


    var adlink = parts
    var url = new URL(adlink);






    cookies.set('ad_url', parts);
    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  


    axios.get(apilink+'/website/models/', JSON.stringify(axiosConfig)).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        dataSourceModels.push(response.data[i].name);
      }
      allModels = response.data;
      this.setState({
        dataSource: dataSourceModels
      });
    }).catch(error => {
      console.log(error);
    });
  }





  handleUpdateInput(chosenRequest, index) {
    for (let s = 0; s < allModels.length; s++) {
      if (s === index) {
        if (allModels[s].device_type === 'Tablet Computer') {
          document.getElementById('signupbtn').style.display = 'none';
          this.setState({
            openTablet: true
          });
          return;
        }
      }
    }
    axios.get(apilink+'/website/models/', JSON.stringify(axiosConfig))
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (chosenRequest === response.data[i].name) {
            cookies.set('device-model-id', response.data[i].id, {path: '/'});
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      chosenModel: chosenRequest
    });
    for (let i = 0; i < allModels.length; i++) {
      if (allModels[i].name === chosenRequest) {
        cookies.set('device-type', allModels[i].device_type, {path: '/'});
        cookies.set('device-brand', allModels[i].brand, {path: '/'});
        cookies.set('device-model', chosenRequest, {path: '/'});
        window.location = '/repair';
        return;
      }
    }
    if (index === -1 && cookies.get('device-model-id') !== '') {
      window.location = '/repair';
    }
  }





  handleCheckElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#FFF';
    e.target.parentElement.parentElement.style.border = '1px solid #3386f4';
  }

  handleCheckBlurElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#f0f3f7';
    e.target.parentElement.parentElement.style.border = '1px solid #d6edff';
  }

  handleEmailUpdateInput(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
    if (this.state.email.match(emailRegex)) {
      validEmail = true;
    } else {
      validEmail = false;
    }
  }

  handleMobileUpdateInput(e) {
    e.preventDefault();
    this.setState({
      phone: e.target.value
    });
  }

  handlePasswordUpdateInput(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }

  
  handleOpenSignIn() {
    this.setState({
      signupOpen: false,
      signInOpen: true
    });
  }

  handleSigninMenuClose() {
    document.getElementById('signupbtn').style.display = 'block';
    this.setState({
      signInOpen: false,
      invalid: ''
    });
  }


  handleSigninBtn(e) {
    e.preventDefault();
    if (this.state.email === null || this.state.email === '') {
      return this.setState({
        invalid: 'Email is missing'
      });
    }

    if (this.state.password === null || this.state.password === '') {
      return this.setState({
        invalid: 'Password is missing'
      });
    }

    if (validEmail === undefined || validEmail === false) {
      return this.setState({
        invalidSignup: 'Invalid email'
      });
    }
    const dataSignin = {
      username: this.state.email,
      password: this.state.password
    };
    axios({
      method: 'POST',
      url: apilink+'/website/login/',
      data: dataSignin
    }).then(response => {
      if (response.data.status === 'Successful') {
        cookies.set('userId', response.data.id, {path: '/'});
        this.setState({
          signinOpen: false,
          openSnack: true
        });
        const payload = {
          "Site": {
           "Email": this.state.email
         }
        }
        ClevertapReact.profile(payload);
        ClevertapReact.event("User Signed In");
        if (document.getElementById('signupbtn') !== null || document.getElementById('signupbtn') !== undefined) {
          document.getElementById('signupbtn').style.display = 'none';
        }
        window.location = '/profile';
      } else {
        this.setState({
          invalid: response.data.status
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  handleNavigateProfileBtn() {
    window.location = '/profile';
  }

  handleSnackRequestClose() {
    this.setState({
      openSnack: false
    });
  }

  render() {
    const meta = {
      title: 'iService - iPhone, iMac, MacBook, Watch Repair and Service Center',
      description: 'Apple iPhone, iPad, Macbook & Watch Repair. Walk-ins and Doorstep service in Bangalore and Delhi. Easiest & Fastest Way to Repair Your Apple Device. Exclusively Apple and selected brands.',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'apple service center, Apple Repair Bangalore, laptop service bangalore, laptop service delhi, best smartphone repair center, iService, iService bangalore, iphone screen replacement, iphone battery replacement, iphone repair center, apple service center in koramangala, iphone repair shop, iphone x repair, macbook service center, ipad repair shop, macbook repair in bangalore'
        }
      }
    }


    if (cookies.get('userId') !== null && cookies.get('userId') !== undefined && cookies.get('userId') !== '') {
      if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined) {
        document.getElementById('signupbtn').style.display = 'none';
      }
      axios.post(apilink+'/website/user/', {id: cookies.get('userId')}).then(response => {
        localStorage.setItem('userObject', JSON.stringify(response.data));
      }).catch(err => {
        console.log(err);
      });
      axios.post(apilink+'/website/user_jobs/', {id: cookies.get('userId')}).then(result => {
        let userObject = JSON.parse(localStorage.getItem('userObject'));
        if (result.data.jobs.length !== 0) {
          let jobData = result.data.jobs[result.data.jobs.length - 1];
          let date1 = new Date(result.data.jobs[result.data.jobs.length - 1].time.ready);
          let date2 = new Date();
          let timeDiff = Math.abs(date2.getHours() - date1.getHours());

          console.log(timeDiff)


          let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24*365));
          if (result.data.jobs[result.data.jobs.length - 1].status ) { 
            let counter_landing = 0;
            let jobIssues = result.data.jobs[result.data.jobs.length - 1].problems.map(data => {
              return (
                <p key={counter_landing++} className="landing-personalized-one-body-device">{data}</p>
              );
            });
            standardHtml = (
              <div className="ContainerHeight">
                <Container fluid className="section personalized-landing-repair">
                <Row>
                    <Col sm={2} md={4} xs={12}/>
                    <Col sm={8} md={4} xs={12}>
                    <br />
                    <br />

                      <p className="repair-field-device">Repair another device?</p>
                      <div style={{height: '58px', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Row key={0} id="personalized-landing-repair" className="landing-repair-field" style={{height: '58px', backgroundColor: '#FFFFFF'}}>
                          <Col xs={10}>
                            <AutoComplete
                              style={{height: '0px'}}
                              value={this.state.repairStr}
                              searchText={this.state.repairStr}
                              hintText="which device do you have?"
                              hintStyle={{fontSize: '13.4px', color: '#9b9b9b'}}
                              openOnFocus
                              dataSource={this.state.dataSource}
                              filter={AutoComplete.caseInsensitiveFilter}
                              maxSearchResults={5}
                              onNewRequest={this.handleUpdateInput}
                              fullWidth
                              />
                          </Col>
                          <Col xs={2}>
                            <SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}}/>
                          </Col>
                        </Row>
                      </div>
                      <br/>
                      <br/>

                      <br/>
                      <br/>
                      <br/>
                    </Col>
                    <Col sm={2} md={4} xs={12}/>
                  </Row>
                    <Col lg={4} md={4} sm={4} xs={12}/>
                    <Col lg={4} md={4} sm={4} xs={12}>
                      <div className="landing-personalized-one-header-container">
                        <h3 className="landing-personalized-one-header">Welcome {userObject.first_name}, Your last job with us</h3>
                      </div>
                  
                      <div className="landing-personalized-one-body-container">
                        <p className="landing-personalized-one-body-heads">PRODUCT</p>
                        <p className="landing-personalized-one-body-device">{jobData.device}</p>
                      </div>
                      <div className="landing-personalized-one-body-container">
                        <p className="landing-personalized-one-body-heads">ISSUES</p>
                        {jobIssues}
                      </div>
                    
                      <div className="landing-personalized-one-body-container">
                        <RaisedButton
                          className="raised-button repair-btn"
                          buttonStyle={{height: buttonHeight, width: '100%'}}
                          style={{borderRadius: '10px', textAlign: 'center'}}
                          label="VIEW ALL JOBS"
                          labelStyle={{fontSize: '14px', paddingTop: '10px'}}
                          backgroundColor={primaryColor}
                          labelColor="#fff"
                          onTouchTap={this.handleViewAllJobs}
                          fullWidth
                          />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}/>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <div className="landing-personalized-one-body-container" style={{textAlign: 'center', padding: '40px'}}>
                        <img src={require("../imgs/features1.png")} style={{maxWidth: '300px'}}/>
                      </div>
                    </Col>
                  </Row>

   
                </Container>
              </div>
            );
          } else {
            standardHtml = (
              <div className="ContainerHeight">
                <Container fluid className="section personalized-landing-repair">
                  <Row>
                    <Col sm={2} md={4} xs={12}/>
                    <Col sm={8} md={4} xs={12}>
                    <br />
                    <br />
                    
                      <p className="repair-field-device">Repair another device?</p>
                      <div style={{height: '58px', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Row key={0} id="personalized-landing-repair" className="landing-repair-field" style={{height: '58px', backgroundColor: '#FFFFFF'}}>
                          <Col xs={10}>
                            <AutoComplete
                              style={{height: '0px'}}
                              value={this.state.repairStr}
                              searchText={this.state.repairStr}
                              hintText="which device do you have?"
                              hintStyle={{fontSize: '13.4px', color: '#9b9b9b'}}
                              openOnFocus
                              dataSource={this.state.dataSource}
                              filter={AutoComplete.caseInsensitiveFilter}
                              maxSearchResults={5}
                              onNewRequest={this.handleUpdateInput}
                              fullWidth
                              />
                          </Col>
                          <Col xs={2}>
                            <SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}}/>
                          </Col>
                        </Row>
                      </div>
                      <br/>
                      <br/>

                      <br/>
                      <br/>
                      <br/>
                    </Col>
                    <Col sm={2} md={4} xs={12}/>
                  </Row>
                  <Row>
                    <Col lg={4} md={4} sm={4} xs={12}/>
                    <Col lg={4} md={4} sm={4} xs={12}>
                      <div className="landing-personalized-one-header-container">
                        <h1 className="landing-personalized-one-header">Welcome back {userObject.first_name}, Your last job with us</h1>
                      </div>
                      <div className="landing-personalized-one-body-container">
                        <p className="landing-personalized-one-body-heads">PRODUCT</p>
                        <p className="landing-personalized-one-body-device">{jobData.device}</p>
                      </div>
                      <div className="landing-personalized-one-body-container">
                        <p className="landing-personalized-one-body-heads">ISSUES</p>
                        <p>Ready</p>
                      </div>
                      <div className="landing-personalized-one-body-container">
                        <p className="landing-personalized-one-body-heads">JOB DURATION</p>
                        <p className="landing-personalized-one-body-device">{diffDays} days {timeDiff} hours</p>
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={12}/>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <div className="landing-personalized-one-body-container">
                        <img src={require("../imgs/landing.png")} style={{width: '50%', paddingTop:'-20px'}}/>
                      </div>
                    </Col>
                  </Row>
                  
                </Container>
              </div>
            );
          }

        } else {
          standardHtml = (
            <div className="ContainerHeight">
              <Container fluid className="section landing-repair">
                <Row style={{padding: '20px 0',paddingLeft: '10px'}}>
                  <img class ="homepage_banner" src="" />

                    <center><h1 className="landing-repair-h1">
                      India's Most Trusted Apple Authorized Service Provider! 
                    </h1></center>
                    <p className="landing-repair-p">
                    <center style={{fontSize:'15px'}}>
                      Book a doorstep service or walk-in to the nearest centre and track repair progress all the way
                      </center>
                    </p>
                </Row>
                <Row>
                  <Col sm={2} md={4} xs={12}/>
                  <Col sm={8} md={4} xs={12}>
                    <div style={{height: '58px', marginLeft: 'auto', marginRight: 'auto'}}>
                      <Row key={1} id="landing-repair" className="landing-repair-field" style={{height: '58px'}}>
                        <Col xs={10}>
                          <AutoComplete
                            style={{height: '0px'}}
                            value={this.state.repairStr}
                            searchText={this.state.repairStr}
                            hintText="which device do you have?"
                            hintStyle={{fontSize: '13.4px', color: '#9b9b9b'}}
                            openOnFocus
                            dataSource={this.state.dataSource}
                            filter={AutoComplete.caseInsensitiveFilter}
                            maxSearchResults={5}
                            onNewRequest={this.handleUpdateInput}
                            fullWidth
                            />
                        </Col>
                        <Col xs={2}>
                          <SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}}/>
                        </Col>
                      </Row>
                    </div>
                    <br/>
                    <br/>
 
                    <br/>
                    <br/>
                    <br/>
                  </Col>
                  <Col sm={2} md={4} xs={12}/>
                </Row>
                <Row style={{backgroundColor: '#FAFAFA'}}>
                  <Col sm={12} xs={12}>
                    <div style={{textAlign: 'center', width: '100%', padding: '20px'}}>
                      <img src={require("../imgs/landing.png")} style={{width: '50%'}}/>
                    </div>
                    <br/>
                    <p className="landing-repair-p">
                    <center>
                      <span style={{color: '#ed6a5e', fontWeight: '600'}}>50,000+</span> iService customers across Nation-wide
                      </center>
                    </p>
                    <p style={{padding: 10}}/>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="section landing-info-2" style={{paddingBottom: '20px'}}>
                <Row className="landing-repair-row">
                  <Col xs={12} sm={2} md={4}/>
                  <Col xs={12} sm={8} md={4}>
                    <h1 className="landing-repair-h1" style={{fontSize: '24pt', fontWeight: '300'}}>
                      How it works
                    </h1>
                  </Col>
                  <Col xs={12} sm={2} md={4}/>
                </Row>
                  <Col sm={8} md={4}>
                    <Row>
                      <Col sm={12} xs={12}>
                        <p className="landing-repair-p-num">
                          1 <span className="landing-repair-works">
                              BOOK A REPAIR?
                            </span><img src="https://image.flaticon.com/icons/png/512/24/24670.png" style={{width: '35px', float: 'right'}}/>
                        </p>
                        <div className="vertical-dashed-line">
                          <p className="vertical-dashed-line-content">
                            Book an at-home service or walk into our service center. Need to talk to us? Walk in to our nearest store.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={8} md={4}>
                    <Row>
                      <Col sm={12} xs={12}>
                        <p className="landing-repair-p-num">
                          2 <span className="landing-repair-works">HAND-OVER YOUR DEVICE?</span><img src="https://cdn4.iconfinder.com/data/icons/fevzicons-1/100/noun_172924-512.png" style={{width: '55px', float: 'right', marginTop: '10px'}}/>
                        </p>
                        <div className="vertical-dashed-line">
                          <p className="vertical-dashed-line-content" style={{marginLeft: '5px'}}>
                            Give us your device based on your chosen service type.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={8} md={4}>
                    <Row>
                      <Col sm={12} xs={12}>
                        <p className="landing-repair-p-num">
                          3 <span className="landing-repair-works">TRACK YOUR JOB</span><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/2048-200.png" style={{width: '35px', float: 'right', marginTop: '10px'}}/>
                        </p>
                        <div className="vertical-dashed-line">
                          <p className="vertical-dashed-line-content" style={{marginLeft: '5px'}}>
                            Our tracking feature gives you real-time updates on the progress of your device repair.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                <Row>
                  <Col sm={12} className="landing-bg-special-col">
                    <div style={{textAlign: 'center', width: '100%'}}>
                      <img src={require("../imgs/bgcurve.png")} style={{width: '100%', marginTop: '10px'}}/>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container fluid className="section landing-info-1" style={{marginTop: '-60px', marginBottom: '-40px', paddingBottom: '40px', paddingTop: '40px'}}>
                <Row style={{paddingTop: '0'}}>
                  <Col sm={12}>
                    <h1 className="landing-repair-h1 info-h1" style={{fontSize: '24pt', fontWeight: '300', paddingBottom: '20px'}}>
                      Why iService
                    </h1>
                  </Col>
                </Row>
                  <Col md={4} sm={12} xs={12}>
                    <div style={{padding: '20px'}}>
                      <Row>
                        <Col sm={12} xs={12}>
                          <p style={{paddingLeft: '0px', fontSize: '18px', color: '#d6edff', fontWeight: 600}} className="landing-repair-p-info">REPAIR FROM ANYWHERE, FAST</p>
                        </Col>
                      </Row>
                      <Row>

                        <Col sm={8} xs={12}>
                          <p style={{marginBottom: '20px', padding: '0px', marginTop: '0px'}} className="landing-repair-features">
                            Walk-in to the nearest centre or book a doorstep service for a quick repair. We would not want to keep you from your device for too long!
                          </p>
                        </Col>
                        <Col sm={4} xs={12}>
                          <div className="featured-1" style={{textAlign: 'center', width: '100%'}}>
                            <img src={require("../imgs/features1.png")} style={{maxWidth: '220px'}}/>
                          </div>
                        </Col>
     
                      </Row>
                    </div>
                  </Col>
                  <Col md={4} sm={12} xs={12}>
                    <div style={{padding: '20px'}}>
                      <Row>
                        <Col sm={12} xs={12}>
                          <p style={{paddingLeft: '0px', fontSize: '18px', color: '#d6edff', fontWeight: 600}} className="landing-repair-p-info">iSERVICE WARRANTY</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={8} xs={12}>
                          <p style={{marginBottom: '20px', padding: '0px', marginTop: '0px'}} className="landing-repair-features">
                            We use high quality spares and give you upto 1 year warranty on repairs.
                          </p>
                        </Col>
                        <Col sm={4} xs={12} style={{paddingLeft: '0px'}}>
                          <div className="featured-2" style={{textAlign: 'center', width: '100%'}}>
                            <img src={require("../imgs/features2.png")} style={{maxWidth: '100px'}}/>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4} sm={12} xs={12}>
                    <div style={{padding: '20px'}}>
                      <Row>
                        <Col sm={12} xs={12}>
                          <p style={{paddingLeft: '0px', fontSize: '18px', color: '#d6edff', fontWeight: 600}} className="landing-repair-p-info">TRANSPARENT ALL THE WAY</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={8} xs={12}>
                          <p style={{marginBottom: '20px', padding: '0px', marginTop: '0px'}} className="landing-repair-features">
                            Track repair progress and get honest estimate about what needs to be repaired so that <br/> you save time.
                          </p>
                        </Col>
                        <Col sm={4} xs={12}>
                          <div className="featured-3" style={{textAlign: 'center', width: '100%'}}>
                            <img src={require("../imgs/features3.png")} style={{maxWidth: '130px'}}/>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
              </Container>
              
              <Container fluid className="section landing-reviews">
              <owl-carousel>
              </owl-carousel>
                <Row>
                  <Col sm={12}>
                    <h1 className="landing-repair-h1 info-h1" style={{fontSize: '24pt'}}>
                      People &hearts; us
                    </h1>
                  </Col>
                </Row>
                <br />
              <Col sm={12} xs={12}>
                <div className="business-desktop-client-reviews">
                  <Row>
                    <OwlCarousel className="owl-carousel owl-theme" options={options} events={events} >
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                               <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src={require("../imgs/iTechie.png")} />
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Tejas Gowda</h3>
                                <p className="">The best ever iPhone Service in Bangalore. I tried at 2 other Service Centres who gave a clear no stating a error after making me wait for 2 hours. Then I landed at iService, believe me I was delighted the way the process happened. I got my same old phone with all the backup in just 40 mins. Keep up the good work.</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                                <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src={require("../imgs/iTechie.png")}/>
                          </div>
                            <div className="business-desktop-client-box">
                            <h3>Annika</h3>
                              <p className="">I was so happy when I got to know that I can fix my iPhone in Bangalore and the best part was they delivered my phone after fixing it at my office which was great. Thank you guys!”</p>
                            </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                                <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src={require("../imgs/iTechie.png")}/>
                          </div>
                            <div className="business-desktop-client-box">
                            <h3>Purushothama S</h3>
                              <p className="">“Really the best service with less price and fast service and they have fulfilled the promise of the on time service. No need of bargaining.”</p>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </OwlCarousel>
                  </Row>
                </div>
              </Col> 
              </Container>
              
              <Row>
              <Col sm={12} xs={12}>
                <FlatButton id="signupbtndesktop" labelStyle={{ }} label="REPAIR" style={{color: '#fff', fontSize: '20px !important', fontWeight: '600' }} className=" floating-btn-bot-signup desktop hide-on-desktop " backgroundColor= {primaryColor} primary={true}  onTouchTap={this.handleRedirect}/>
                <FlatButton id="signupbtn"labelStyle={{ }} label="REPAIR" style={{color: '#fff', fontSize: '20px !important', fontWeight: '600'}} className=" floating-btn-desktop-signup mobile hide-on-mobile  " backgroundColor= {primaryColor} primary={true}  onTouchTap={this.handleRedirect}/>
              </Col>
            </Row>
              <Snackbar open={this.state.openSnack} message="Login Successful" autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
            </div>
          );  
        }
        this.forceUpdate();
      }).catch(err => {
        console.log(err);
      });
    }
    if (cookies.get('userId') === null || cookies.get('userId') === undefined || cookies.get('userId') === '') {
      if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined) {
        document.getElementById('signupbtn').style.display = 'block';
      }
      standardHtml = (
        <div className="ContainerHeight">
          <Container fluid className="section landing-repair">
                <Row style={{padding: '20px 0', paddingLeft: '10px'}}>
                <img class ="homepage_banner" src="" />
                    <center ><h1 className="landing-repair-h1">
                    India's Most Trusted Apple Authorized Service Provider!
                    </h1></center>
                    <p className="landing-repair-p">
                    <center style={{fontSize:'15px'}}>
                      Book a doorstep service or walk-in to the nearest centre and track repair progress all the way
                      </center>
                    </p>
                </Row>
            <Row>
              <center>
                <div style={{height: '58px', marginLeft: 'auto', marginRight: 'auto', width: '300px'}}>
                  <Row key={1} id="landing-repair" className="landing-repair-field" style={{height: '58px'}}>
                    <Col xs={10}>
                      <AutoComplete
                        style={{height: '0px'}}
                        value={this.state.repairStr}
                        searchText={this.state.repairStr}
                        hintText="which device do you have?"
                        hintStyle={{fontSize: '13.4px', color: '#9b9b9b'}}
                        openOnFocus
                        dataSource={this.state.dataSource}
                        filter={AutoComplete.caseInsensitiveFilter}
                        maxSearchResults={5}
                        onNewRequest={this.handleUpdateInput}
                        fullWidth
                        />
                    </Col>
                    <Col xs={2}>
                      <SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}}/>
                    </Col>
                  </Row>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </center>
              
            </Row>
            <Row style={{backgroundColor: '#FAFAFA'}}>
              <Col sm={12} xs={12}>
                <div style={{textAlign: 'center', width: '100%', padding: '20px', paddingTop: '-20px'}}>
                  <img src={require("../imgs/landing.png")} style={{width: '50%', marginTop:'-100px'}}/>
                </div>
                <br/>
                <p className="landing-repair-p">
                  <span style={{color: '#ed6a5e', fontWeight: '600'}}>50,000 +</span> iService customers Nation-wide
                </p>
                <p style={{padding: 10}}/>
              </Col>
            </Row>
          </Container>
          <Container fluid className="section landing-info-2" style={{paddingBottom: '20px'}}>
            <Row className="landing-repair-row">
              <Col xs={12} sm={2} md={4}/>
              <Col xs={12} sm={8} md={4}>
                <h1 className="landing-repair-h1" style={{fontSize: '24pt', fontWeight: '300'}}>
                  How it works
                </h1>
              </Col>
              <Col xs={12} sm={2} md={4}/>
            </Row>
              <Col sm={8} md={4}>
                <Row>
                  <Col sm={12} xs={12}>
                    <p className="landing-repair-p-num">
                      1 <span className="landing-repair-works">
                          BOOK A REPAIR?
                        </span><img src="https://image.flaticon.com/icons/png/512/24/24670.png" style={{width: '35px', float: 'right'}}/>
                    </p>
                    <div className="vertical-dashed-line">
                      <p className="vertical-dashed-line-content">
                        Book an at-home service or schedule a device pick-up at your convenience. Need to talk to us? Walk in to our nearest store.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={8} md={4}>
                <Row>
                  <Col sm={12} xs={12}>
                    <p className="landing-repair-p-num">
                      2 <span className="landing-repair-works">HAND-OVER YOUR DEVICE?</span><img src="https://cdn4.iconfinder.com/data/icons/fevzicons-1/100/noun_172924-512.png" style={{width: '55px', float: 'right', marginTop: '0px'}}/>
                    </p>
                    <div className="vertical-dashed-line">
                      <p className="vertical-dashed-line-content" style={{marginLeft: '5px'}}>
                      Give us your device based on your chosen service type.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={8} md={4}>
                <Row>
                  <Col sm={12} xs={12}>
                    <p className="landing-repair-p-num">
                      3 <span className="landing-repair-works">TRACK YOUR JOB</span><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/2048-200.png" style={{width: '35px', float: 'right', marginTop: '0px'}}/>
                    </p>
                    <div className="vertical-dashed-line">
                      <p className="vertical-dashed-line-content" style={{marginLeft: '5px'}}>
                        Our tracking feature gives you real-time updates on the progress of your device repair.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>

            <Row>
              <Col sm={12} className="landing-bg-special-col">
                <div style={{textAlign: 'center', width: '100%'}}>
                  <img src={require("../imgs/bgcurve.png")} style={{width: '100%', marginTop: '10px'}}/>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid className="section landing-info-1" style={{marginTop: '-60px', marginBottom: '-40px', paddingBottom: '40px', paddingTop: '40px'}}>
            <Row style={{paddingTop: '0'}}>
              <Col sm={12}>
                <h1 className="landing-repair-h1 info-h1" style={{fontSize: '24pt', fontWeight: '300', paddingBottom: '20px'}}>
                  Why iService
                </h1>
              </Col>
            </Row>
              <Col md={4} sm={12} xs={12}>
                <div style={{padding: '20px'}}>
                  <Row>
                    <Col sm={12} xs={12}>
                      <p style={{paddingLeft: '0px', fontSize: '18px', color: '#d6edff', fontWeight: 600}} className="landing-repair-p-info">REPAIR FROM ANYWHERE, FAST</p>
                    </Col>
                  </Row>
                  <Row>
 
                    <Col sm={8} xs={12}>
                      <p style={{marginBottom: '20px', padding: '0px', marginTop: '0px'}} className="landing-repair-features">
                        Walk-in to the nearest centre or book a doorstep service for a quick repair. We would not want to keep you from your device for too long!
                      </p>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="featured-1" style={{textAlign: 'center', width: '100%'}}>
                        <img src={require("../imgs/features1.png")} style={{maxWidth: '220px'}}/>
                      </div>
                    </Col>
 
                  </Row>
                </div>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <div style={{padding: '20px'}}>
                  <Row>
                    <Col sm={12} xs={12}>
                      <p style={{paddingLeft: '0px', fontSize: '18px', color: '#d6edff', fontWeight: 600}} className="landing-repair-p-info">iSERVICE WARRANTY</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={8} xs={12}>
                      <p style={{marginBottom: '20px', padding: '0px', marginTop: '0px'}} className="landing-repair-features">
                        We use high quality spares and give you upto 1 year warranty on repairs.
                      </p>
                    </Col>
                    <Col sm={4} xs={12} style={{paddingLeft: '0px'}}>
                      <div className="featured-2" style={{textAlign: 'center', width: '100%'}}>
                        <img src={require("../imgs/features2.png")} style={{maxWidth: '100px'}}/>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <div style={{padding: '20px'}}>
                  <Row>
                    <Col sm={12} xs={12}>
                      <p style={{paddingLeft: '0px', fontSize: '18px', color: '#d6edff', fontWeight: 600}} className="landing-repair-p-info">TRANSPARENT ALL THE WAY</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={8} xs={12}>
                      <p style={{marginBottom: '20px', padding: '0px', marginTop: '0px'}} className="landing-repair-features">
                        Track repair progress and get honest estimate about what needs to be repaired so that <br/> you save time.
                      </p>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="featured-3" style={{textAlign: 'center', width: '100%'}}>
                        <img src={require("../imgs/features3.png")} style={{maxWidth: '130px'}}/>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
          </Container>
          
          <Container fluid className="section landing-reviews">
            <Row>
              <Col sm={12}>
                <h1 className="landing-repair-h1 info-h1" style={{fontSize: '24pt'}}>
                  People &hearts; us
                </h1>
              </Col>
            </Row>
            <br />
              <OwlCarousel hidden className="owl-theme">
                    </OwlCarousel>
              <Col sm={12} xs={12}>
                <div className="business-desktop-client-reviews">
                  <Row>
                    <OwlCarousel className="owl-carousel owl-theme" options={options} events={events} >
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/ >
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Tejas Gowda</h3>
                                <p className="">The best ever iPhone Service in Bangalore. I tried at 2 other Service Centres who gave a clear no stating a error after making me wait for 2 hours. Then I landed at iService, believe me I was delighted the way the process happened. I got my same old phone with all the backup in just 40 mins. Keep up the good work.</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/>
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Updesh Singh</h3>
                                <p className="">Team was courteous and knowledgeable. Lady on phone, delivery boy, technicians all did an excellent job. Couldn't have asked for anything more. Full 5 star ratings. Keep up team. My iPhone screen had smashed. Team did the pickup repair and delivery in fastest possible time, that's commendable.</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/>
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Akhilesh Murthy Kollipara</h3>
                                <p className="">The best hospital for your phone, amazed by the ambience and instant service they offer at an affordable price, giving this review after using the mobile for more than two weeks post review. Not even need to think twice to go for I service , kudos guys</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/>
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Dusmant Kumar Pati</h3>
                                <p className="">Best service for iPhone. My wife's iPhone 5c started giving problem on battery. I booked a home-service to replace the battery. Service person was on time, did the job well, with thorough tests and price is also decent. Thanks iService.</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/>
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Sadanand Kadem</h3>
                                <p className="">good service and good  friendly people! i got service for my wife phone! which was dead, archana from rmv branch she took my problem in priorty and given a service very fast! appreciate your technican he is done good job! well done team! all the best! keep going on!</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/>
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>Vikramaditya Kadam</h3>
                                <p className="">Best Service, The Staff is very friendly and the Service is top notch. They repaired my One Plus One within an hour. I broke my phone and had to attend a interview, they let me use their internet and also made couple of calls from their phone. Best Customer Service. Thank You!!!!!</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container owl">
                          <div style={{textAlign: 'right', width: '100%'}}>
                            <img className="techie-img" src="https://app.iservice.co.in/avatar" width="200px"/>
                          </div>
                              <div className="business-desktop-client-box">
                                <h3>sreejith j</h3>
                                <p className="">i went to their store with the issue of charging port, i was worried that i might require to change the whole damn thing, but to my surprise they did a simple service and the issue got resolved, i was saved by 1000 of rupees in replacing the port.</p>
                              </div>
                          </div>
                        </Col>
                      </div>
                     
                    </OwlCarousel>
                  </Row>
                </div>
              </Col>             
            <Row>
              <Col sm={12} xs={12}>

                <RaisedButton id="signupbtndesktop" label="REPAIR" style={{color: 'red', fontSize: '20px !important', fontWeight: '600' }} className="spanclass floating-btn-bot-signup desktop hide-on-desktop raised-button repair-btn raised-button repair-btn" backgroundColor= {primaryColor} onTouchTap={this.handleRedirect}/>
                <RaisedButton id="signupbtn" label="REPAIR" style={{color: 'red', fontSize: '20px !important', fontWeight: '600'}} className="spanclass floating-btn-desktop-signup mobile hide-on-mobile raised-button repair-btn raised-button repair-btn" backgroundColor= {primaryColor} onTouchTap={this.handleRedirect}/>
              </Col>
            </Row>
          </Container>

          
            <Row>
              <Col sm={12} xs={12}>
                <RaisedButton id="signupbtndesktop"  labelStyle={{ fontSize: '19px', color: '#fff !important'}}label="REPAIR" className="floating-btn-bot-signup desktop hide-on-desktop raised-button repair-btn raised-button repair-btn" backgroundColor= "#ed6a5e" onTouchTap={this.handleRedirect}/>
                <RaisedButton id="signupbtn"   labelStyle={{ fontSize: '19px', color: '#fff !important'}} label="REPAIR"  className="floating-btn-desktop-signup mobile hide-on-mobile raised-button repair-btn raised-button repair-btn" backgroundColor= "#ed6a5e" onTouchTap={this.handleRedirect}/>
              
              </Col>
            </Row>


          <Snackbar open={this.state.openSnack} message="Login Successful" autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
        </div>
      );  
    }
    return (
      <div>
        <DocumentMeta {...meta} />
        <MuiThemeProvider>
          {standardHtml}
        </MuiThemeProvider>
      </div>
    );
  }
}

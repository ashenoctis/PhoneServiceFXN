import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import {Container, Row, Col, Visible} from 'react-grid-system';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Cookies from 'universal-cookie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import Sticky from 'react-stickynode';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import DocumentMeta from 'react-document-meta';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';


$(document).ready(function(){
    $('#id-order').css('display','block')
    document.getElementById("box").oninput=function(){
  var matcher = new RegExp(document.getElementById("box").value, "gi");
  for (var i=0;i<document.getElementsByClassName("connect-cat").length;i++) {
    if (matcher.test(document.getElementsByClassName("name")[i].innerHTML) || matcher.test(document.getElementsByClassName("category")[i].innerHTML)) {
      document.getElementsByClassName("connect-cat")[i].style.display="inline-block";
    } else {
      document.getElementsByClassName("connect-cat")[i].style.display="none";
    }
      
  }
}
});

const cookies = new Cookies();
let user_status = null;
let CreateJob = null;
const hoverColor = '#3E8CF8';
const scrollToElement = require('scroll-to-element');
const primaryColorFinal = '#3386f4';
let orders = [];
let orders1 = [];

let deviceorders = [];
const primaryColor = '#3386f4';
let slides = null;
const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};
export class Order extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      emailId: '',
      phoneId: '',
      class: 'profileScroller',
      snackOpen: false,
      checkedNote: false,
      email_permission: false,
      sms_permission: false,
      call_permission: false,
      signInOpen: false,
      problem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
    this.handleDimHighlight = this.handleDimHighlight.bind(this);
     this.handleRedirect = this.handleRedirect.bind(this);
    this.handleTrackSolution = this.handleTrackSolution.bind(this);
    this.handleTrackCreateSolution = this.handleTrackCreateSolution.bind(this);
    this.handleTrackAMCCreateSolution = this.handleTrackAMCCreateSolution.bind(this);
    this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
    this.handleMobileUpdateInput = this.handleMobileUpdateInput.bind(this);
    this.handleSigninBtn = this.handleSigninBtn.bind(this);






    

    
    this.handleRequestClose = this.handleRequestClose.bind(this);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }



  componentDidMount() {
    $('.pagenotfounds').hide()
    $('.initial-history').hide();

    
    $('.eview').hide()
    $('.mview').hide()
    $('.serachimei').show();
    

      const headers = document.getElementById("orders");
      headers.classList.add('active');

    $( "#orders" ).click(function() {
      const headers = document.getElementById("orders");
      const nonheaders = document.getElementById("devicehistory");
      $('.serachimei').hide();


      headers.classList.add('active');
      nonheaders.classList.remove('active');


      $('.orderhistoryview').show();
      $('.devicehistoryview').hide();

    });

    $( "#devicehistory" ).click(function() {
      const headers = document.getElementById("devicehistory");
      const nonheaders = document.getElementById("orders");

      
      $('.serachimei').show();


      headers.classList.add('active');
      nonheaders.classList.remove('active');

      $('.orderhistoryview').hide();
      $('.devicehistoryview').show();
      $('.initial-history').show();
    });


    if (cookies.get('userId') === null || cookies.get('userId') === undefined || cookies.get('userId') === '') {
      
    }
    else{
      axios.post(apilink+'/website/user/', {id: cookies.get('userId')}).then(response => {
        if (response.data.email_permission) {
          document.getElementById('email').classList.add('active');
        }
        if (response.data.call_permission) {
          document.getElementById('call').classList.add('active');
        }
        if (response.data.sms_permission) {
          document.getElementById('sms').classList.add('active');
        }
        this.setState({
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          phone: response.data.phone[0].phone,
          email: response.data.email[0].email,
          emailId: response.data.email[0].id,
          phoneId: response.data.phone[0].id
        });
        localStorage.setItem('userObject', JSON.stringify(response.data));
        this.forceUpdate();
      }).catch(err => {
        console.log(err);
      });



      axios.post(apilink+'/website/user_jobs/', {id: cookies.get('userId')}).then(result => {

        let orderCounter = 0;
        orders = result.data.jobs.map(response => {
          if (response.status === 'Cancelled') {
            user_status = (<strong style={{color: '#FF0000'}}>{response.status}</strong>);
          } else {
            user_status = (<strong style={{color: '#32CD32'}}>{response.status}</strong>);
          }  
          return (
            <Col key={orderCounter++} sm={12} lg={3}  xs={12}>
              <div className="profileOrderSection orderhistoryview">
                <Row>
                  <Col xs={12}>
                    <div className="profileOrderContainer">
                      <div className="profileOrderOverlay"/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="profileOrderContainerText">
                      <h6 className="order-pair" style={{fontSize: '20px'}}>{response.device}</h6>
                      <p className="paddingZero order-amount-text" style={{fontSize: '16px'}}>STATUS : {user_status} </p>
                      <p className="paddingZero order-amount-text" style={{fontSize: '16px'}}>PAID : <strong>₹{response.paid_amount}</strong> </p>
                      <p className="paddingZero order-detail-text" style={{minHeight: '60px'}}>ISSUES : <strong>{response.problems.join()}</strong></p>
                      <Row>
                        <Col xs={12}><FlatButton id={response.jobId} onClick={this.handleTrackSolution} className="viewSolution" labelStyle={{textAlign: 'center'}} backgroundColor={primaryColorFinal} label="VIEW"  style={{color: '#fff'}}/></Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        });
        this.forceUpdate();
      }).catch(err => {
        console.log(err);
      });

      axios.post('https://techventure.iservice.co.in/website/user_jobs/', {id: localStorage.getItem('number')}).then(result => {
        let orderCounter = 0;
        orders1 = result.data.jobs.map(response => {
          if (response.status === 'Cancelled') {
            user_status = (<strong style={{color: '#FF0000'}}>{response.status}</strong>);
          } else {
            user_status = (<strong style={{color: '#32CD32'}}>{response.status}</strong>);
          }  
          return (
            <Col key={orderCounter++} sm={12} lg={3}  xs={12}>
              <div className="profileOrderSection orderhistoryview">
                <Row>
                  <Col xs={12}>
                    <div className="profileOrderContainer">
                      <div className="profileOrderOverlay"/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="profileOrderContainerText">
                      <h6 className="order-pair" style={{fontSize: '20px'}}>{response.device}</h6>
                      <p className="paddingZero order-amount-text" style={{fontSize: '16px'}}>STATUS : {user_status} </p>
                      <p className="paddingZero order-amount-text" style={{fontSize: '16px'}}>PAID : <strong>₹{response.paid_amount}</strong> </p>
                      <p className="paddingZero order-detail-text" style={{minHeight: '60px'}}>ISSUES : <strong>{response.problems.join()}</strong></p>
                      <Row>
                        <Col xs={12}><FlatButton id={response.jobId} onClick={this.handleTrackSolution} className="viewSolution" labelStyle={{textAlign: 'center'}} backgroundColor={primaryColorFinal} label="VIEW"  style={{color: '#fff'}}/></Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        });
        this.forceUpdate();
      }).catch(err => {
        console.log(err);
      });

 



        axios.post(apilink+'/website/user_devices/', {id: cookies.get('userId')}).then(result => {
        let orderCounter = 0;
        deviceorders = result.data.map(response => {
          if (response.amc === null || response.amc === 'None') {
            $('.AmcCreate').css('display','none');
            user_status = (<strong style={{color: '#FF0000'}}></strong>);
            CreateJob =  (<FlatButton id={response.id}  data-brand={response.brand} data-model={response.device} onClick={this.handleTrackCreateSolution} className="viewSolution AmcCreate" labelStyle={{textAlign: 'center'}} backgroundColor={primaryColorFinal} label="Create Job"  style={{color: '#fff'}}/>)
          }
          else if (response.amc === 'Expired') {
            $('.AmcCreate').css('display','none');
            user_status = (<strong style={{color: '#FF0000'}}>AMC Expired</strong>);
            CreateJob =  (<FlatButton id={response.id}  data-brand={response.brand} data-model={response.device} onClick={this.handleTrackCreateSolution} className="viewSolution AmcCreate" labelStyle={{textAlign: 'center'}} backgroundColor={primaryColorFinal} label="Create Job"  style={{color: '#fff'}}/>)

          } 
           else {
            $('.NonAmc').css('display','none');
            user_status = (<strong style={{color: '#32CD32'}}>{response.amc}</strong>);
            CreateJob =  (<FlatButton id={response.id}  data-brand={response.brand} data-model={response.device} onClick={this.handleTrackAMCCreateSolution} className="viewSolution AmcCreate" labelStyle={{textAlign: 'center'}} backgroundColor={primaryColorFinal} label="Create Job"  style={{color: '#fff'}}/>)
          }  
          return (
            <Col key={orderCounter++} sm={12} lg={3}  xs={12}>
              <div className="profileOrderSection devicehistoryview connect-cat" style={{visibility: "visible",display: "block"}}>
                <Row>
                  <Col xs={12}>
                    <div className="profileOrderContainer">
                      <div className="profileOrderOverlay"/>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="profileOrderContainerText">
                      <h6 className="order-pair" style={{fontSize: '20px'}}>{response.device}</h6>
                      <p className="paddingZero order-amount-text category name"  style={{fontSize: '14px',}}>IMEI:{response.imei}</p>
                      <p className="paddingZero order-amount-text"> {user_status} </p>
                      <Row>
                        <Col xs={12}>
                        {CreateJob}
                        </Col>
 
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        });
        this.forceUpdate();
      }).catch(err => {
        console.log(err);
      });


    }
  }

    handleSigninBtn() {
      var selectedIds = ['Diagnosis - Not Sure About the Problem'];
   
      cookies.set('type', 'delivery', {path: '/'});
      cookies.set('amc_problem',this.state.problem, {path: '/'});
      cookies.set('device-issues',selectedIds, {path: '/'});
      cookies.set('total-estimate','0', {path: '/'});

      cookies.set('b2b','true', {path: '/'});
      window.location = '/delivery';
    }

  handleTrackSolution(e) {
    if (e.target.parentElement.parentElement.id !== null && e.target.parentElement.parentElement.id !== undefined && e.target.parentElement.parentElement.id !== '') {
      cookies.set('current-job-id', e.target.parentElement.parentElement.id, {path: '/'});
      cookies.set('current-job-id', e.target.parentElement.parentElement.id, {path: '/'});
      cookies.set('current-job-id', e.target.parentElement.parentElement.id, {path: '/'});

      window.location = '/track';
    }
  }

  handleTrackCreateSolution(e) {

    if (e.target.parentElement.parentElement.id !== null && e.target.parentElement.parentElement.id !== undefined && e.target.parentElement.parentElement.id !== '') {
      var checkid = e.target.parentElement.parentElement.id;

      cookies.set('device-brand', $("#"+checkid).attr('data-brand'), {path: '/'});
      cookies.set('device-model', $("#"+checkid).attr('data-model'), {path: '/'});
      cookies.set('trackdeviceid', checkid, {path: '/'});

      window.location = '/repair'
    }

    
  }

    handleMobileUpdateInput(e) {
    this.setState({
      problem: e.target.value
    });
  }


  handleSigninMenuClose() {
    localStorage.setItem('userObject', '' );
    cookies.remove('userId');
    this.setState({
      signInOpen: false,
      signupOpen: false
    });
  }


    handleTrackAMCCreateSolution(e) {
      this.setState({
        signInOpen: true, 
      });

    if (e.target.parentElement.parentElement.id !== null && e.target.parentElement.parentElement.id !== undefined && e.target.parentElement.parentElement.id !== '') {
      var checkid = e.target.parentElement.parentElement.id;

      cookies.set('device-brand', $("#"+checkid).attr('data-brand'), {path: '/'});
      cookies.set('device-model', $("#"+checkid).attr('data-model'), {path: '/'});
      cookies.set('trackdeviceid', checkid, {path: '/'});

      // window.location = '/repair'
    }

    
  }



  handleChange(value) {
    this.setState({
      slideIndex: value
    });
  }

  handleHighlight(e) {
    e.target.style.border = '1px solid #3386f4';
  }

  handleDimHighlight(e) {
    e.target.style.border = '1px solid #d6edff';
  }




  handleRequestClose() {
    this.setState({
      snackOpen: false
    });
  }
    handleRedirect(e) {
    e.preventDefault();
    window.location = '/repair';

  }

    handleCheckElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#FFF';
    e.target.parentElement.parentElement.style.border = '1px solid #3386f4';
  }

  render() {
    const meta = {
      title: 'Track Device Repair Status | iService',
      description: "Any device, Any issue, No problem; iService is here to help! Track your device repair status and get real time updates. Fast & Timely service is our promise!",
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'gadget repair center bangalore, gadget repair center delhi, top smartphone repair centers'
        }
      }
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div className="ContainerHeight" >
          <Sticky enabled top={50} bottomBoundary={10000} innerZ={1499} activeClass="header-mobile-sticky profile">
            <Container fluid>
              <Row className="profile-header">
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <Row style={{height: '50px'}}>
                    <Col className="header" sm={4} xs={4}>
                      <h1 className="profileHeader" id="orders" >My Jobs</h1>
                    </Col>
                    <Col className="header" sm={4} xs={4}>
                      <h1 className="profileHeader" id="devicehistory" >My Devices</h1>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4}/>
              </Row>
            </Container>
          </Sticky>



          <Container fluid>
            <Row id="id-order">
              <Col sm={4} xs={12} lg={1}/>
              <Col sm={4} xs={12} lg={11}>
                <div className="profile-order">   
                    <Col sm={4} xs={12} lg={11}>
                    {orders}
                    {orders1}

                    <div className="initial-history">
                    <Col sm={1} xs={1} md={3} />
                    {deviceorders}
                    </div>
                    </Col>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} xs={12}>
                <RaisedButton id="signupbtndesktop"  labelStyle={{ fontSize: '19px', color: '#fff !important'}}label="REPAIR" className="floating-btn-bot-signup desktop hide-on-desktop raised-button repair-btn raised-button repair-btn" backgroundColor= "#ed6a5e" onTouchTap={this.handleRedirect}/>
                <RaisedButton id="signupbtn"   labelStyle={{ fontSize: '19px', color: '#fff !important'}} label="REPAIR"  className="floating-btn-desktop-signup mobile hide-on-mobile raised-button repair-btn raised-button repair-btn" backgroundColor= "#ed6a5e" onTouchTap={this.handleRedirect}/>
              </Col>
            </Row>

             <Dialog
            open={this.state.signInOpen}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              repositionOnUpdate={true}
            
              actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleSigninMenuClose}><CloseIcon color="#3386f4"/></IconButton>}

            appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginBottom: '10px'}}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row className="closebutton">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4"  className= "modalsignin" onClick={this.handleSigninMenuClose}/>
                  </IconButton>
                </Col>
                <Col xs={12} style={{textAlign: 'center'}}>
                </Col>
              </Row>
              <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                    Please briefly describe the problem you're facing
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container>

             <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <TextField type="text" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} />
                </Col>
              </Row>
  

                <Row className="phonenumber enableotp">
                  <div className="signinbutton">
                    <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="Submit" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleSigninBtn}/>
                  </div>
                </Row>


            </Container>
          </Dialog>


          </Container>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

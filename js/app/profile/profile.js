import React, {Component} from 'react';
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
const cookies = new Cookies();
let user_status = null;
const scrollToElement = require('scroll-to-element');
const primaryColorFinal = '#3386f4';
let orders = [];
let slides = null;
const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};
export class Profile extends Component {
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
      email_permission: true,
      sms_permission: true,
      call_permission: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
    this.handleDimHighlight = this.handleDimHighlight.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleProfileUpdateContent = this.handleProfileUpdateContent.bind(this);
    this.handleUpdateFirstName = this.handleUpdateFirstName.bind(this);
    this.handleUpdateLastName = this.handleUpdateLastName.bind(this);
    this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
    this.handleUpdateMobile = this.handleUpdateMobile.bind(this);
    this.handleProfileHeader = this.handleProfileHeader.bind(this);
    this.handleTrackSolution = this.handleTrackSolution.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }

  componentDidMount() {
    $('.pagenotfounds').hide()
    
     $('.eview').hide()
    $('.mview').hide()
    if (cookies.get('userId') === null || cookies.get('userId') === undefined || cookies.get('userId') === '') {
      window.location = '/home';
    }
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

  }

  handleTrackSolution(e) {
    if (e.target.parentElement.parentElement.id !== null && e.target.parentElement.parentElement.id !== undefined && e.target.parentElement.parentElement.id !== '') {
      cookies.set('current-job-id', e.target.parentElement.parentElement.id, {path: '/'});
      window.location = '/track';
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

  handleCheckbox(e) {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      if (e.target.id === 'email') {
        this.setState({
          email_permission: false
        });
      }

      if (e.target.id === 'call') {
        this.setState({
          call_permission: false
        });
      }

      if (e.target.id === 'sms') {
        this.setState({
          sms_permission: false
        });
      }
    } else {
      e.target.classList.add('active');
      if (e.target.id === 'email') {
        this.setState({
          email_permission: true
        });
      }

      if (e.target.id === 'call') {
        this.setState({
          call_permission: true
        });
      }

      if (e.target.id === 'sms') {
        this.setState({
          sms_permission: true
        });
      }
    }
  }

  handleUpdateFirstName(e, val) {
    e.preventDefault();
    this.setState({
      firstName: val
    });
  }

  handleUpdateLastName(e, val) {
    e.preventDefault();
    this.setState({
      lastName: val
    });
  }

  handleUpdateEmail(e, val) {
    e.preventDefault();
    this.setState({
      email: val
    });
  }

  handleUpdateMobile(e, val) {
    e.preventDefault();
    this.setState({
      phone: val
    });
  }

  handlePasswordChange(e, val) {
    this.setState({
      password: val
    });
  }

  handleConfirmPasswordChange(e, val) {
    this.setState({
      passwordConfirm: val
    });
  }

  handleProfileUpdateContent() {
    let emailvalid =false;
    let phonevalid =false;
    let passwordmatch =false;
    $('.passwordmatch').css('border','1px solid #d6edff')
    $('.phname').css('border','1px solid #d6edff')
    $('.emailname').css('border','1px solid #d6edff')

    let userObj = {
      id: cookies.get('userId'),
      first_name: this.state.firstName,
      second_name: this.state.lastName,
      email: [{id: this.state.emailId, email: this.state.email}],
      phone: [{id: this.state.phoneId, phone: this.state.phone}],
      call_permission: this.state.call_permission,
      email_permission: this.state.email_permission,
      sms_permission: this.state.sms_permission
    };
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(this.state.email)) {
        emailvalid = true;
    } 
    else{
      $('.emailname').css('border','1px solid red')

    }

    if (/^[0-9\b]+$/.test(this.state.phone) && this.state.phone.length === 10) {
        phonevalid = true;
    }
    else{
      $('.phname').css('border','1px solid red')
    }


    if (this.state.password !== '' && this.state.password !== null && this.state.password !== undefined) {
      userObj.password = this.state.password;
    }

    if(this.state.password == this.state.passwordConfirm){
      passwordmatch = true;
    }
    else{
      $('.passwordmatch').css('border','1px solid red')
      
    }

    if(emailvalid && phonevalid && passwordmatch){
      axios.post(apilink+'/website/updateprofile/', userObj).then(result => {
        if (result.data) {
          this.setState({
            snackOpen: true
          });
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }

  handleProfileHeader(e) {
    // scrollToElement('#id-' + e.target.id);
    const headers = document.getElementsByClassName('profileHeader');
    for (let i = 0; i < headers.length; i++) {
      headers[i].classList.remove('active');
    }
    
    $('#id-personal').css('display','none')
    $('#id-notify').css('display','none')


    if('#id-' + e.target.id){
      if(('#id-' + e.target.id)== '#id-notifcation'){
        $('#id-notify').css('display','block')
        $('#id-notifcation').css('display','block')

      }
      else{
      $('#id-'+e.target.id).css('display','block')
        $('#id-notifcation').css('display','block')


      }
    }



    e.target.classList.add('active');
  }

  handleRequestClose() {
    this.setState({
      snackOpen: false
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Sticky enabled top={50} bottomBoundary={10000} innerZ={1499} activeClass="header-mobile-sticky profile">
            <Container fluid>
              <Row className="profile-header">
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <Row style={{height: '50px'}}>
                    <Col className="header" sm={4} xs={4}>
                      <h1 className="profileHeader" id="personal" onClick={this.handleProfileHeader}>PERSONAL</h1>
                    </Col>
                    <Col className="header" sm={4} xs={4}>
                      <h1 className="profileHeader" id="notifcation" onClick={this.handleProfileHeader}>NOTIFICATIONS</h1>
                    </Col>
                  </Row>
                </Col>
                <Col sm={4}/>
              </Row>
            </Container>
          </Sticky>
          <Container fluid>
            <Row id="id-personal">
              <Col sm={4} xs={12} lg={1}/>
              <Col sm={4} xs={12} lg={8}>
                <div className="profileContainer">

                  <Col sm={4} xs={12} lg={5}>
                    <TextField onChange={this.handleUpdateFirstName} type="text" floatingLabelStyle={{paddingLeft: '10px', marginTop: '0px'}} inputStyle={{border: '2px solid #d6edff', borderRadius: '2px'}} className="profileName" floatingLabelText="FIRST NAME" onFocus={this.handleHighlight} onBlur={this.handleDimHighlight} value={this.state.firstName}/>
                  </Col>

                  <Col sm={4} xs={12} lg={5}>
                    <TextField onChange={this.handleUpdateLastName} type="text" floatingLabelStyle={{paddingLeft: '10px', marginTop: '0px'}} inputStyle={{border: '1px solid #d6edff', borderRadius: '2px'}} className="profileName" floatingLabelText="LAST NAME" onFocus={this.handleHighlight} onBlur={this.handleDimHighlight} value={this.state.lastName}/>
                  </Col>

                  <Col sm={4} xs={12} lg={5}>
                    <TextField onChange={this.handleUpdateEmail} type="text" floatingLabelStyle={{paddingLeft: '10px', marginTop: '0px'}} inputStyle={{border: '1px solid #d6edff', borderRadius: '2px'}} className="profileName emailname" floatingLabelText="EMAIL" onFocus={this.handleHighlight} onBlur={this.handleDimHighlight} value={this.state.email}/>
                  </Col>

                  <Col sm={4} xs={12} lg={5}>
                    <TextField onChange={this.handleUpdateMobile} type="number" floatingLabelStyle={{paddingLeft: '10px', marginTop: '0px'}} inputStyle={{border: '1px solid #d6edff', borderRadius: '2px'}} className="profileName phname" floatingLabelText="PHONE" onFocus={this.handleHighlight} onBlur={this.handleDimHighlight} value={this.state.phone}/>
                  </Col>

                  <Col sm={4} xs={12} lg={5} style={{display: 'none'}}>
                    <TextField onChange={this.handlePasswordChange} type="password" floatingLabelStyle={{paddingLeft: '10px', marginTop: '0px'}} inputStyle={{border: '1px solid #d6edff', borderRadius: '2px'}} className="profileName passwordmatch" floatingLabelText="PASSWORD" onFocus={this.handleHighlight} onBlur={this.handleDimHighlight} value={this.state.password}/>
                  </Col>

                  <Col sm={4} xs={12} lg={5} style={{display: 'none'}}>
                    <TextField onChange={this.handleConfirmPasswordChange} type="password" floatingLabelStyle={{paddingLeft: '10px', marginTop: '0px'}} inputStyle={{border: '1px solid #d6edff', borderRadius: '2px'}} className="profileName passwordmatch" floatingLabelText="CONFIRM PASSWORD" onFocus={this.handleHighlight} onBlur={this.handleDimHighlight} value={this.state.passwordConfirm}/>
                  </Col>
                </div>
              </Col>
              <Col sm={4} xs={12} lg={1}/>
            </Row>

            <Row id="id-notifcation" className="marginBottom40" >
              <Col sm={4} xs={12} lg={1}/>
              <Col sm={4} xs={12} lg={4}>
                <Row id="id-notify">
                  <Col xs={12}>
                    <p>NOTIFICATIONS</p>
                  </Col>
                  <Col xs={12}>
                    <div className="check-div">
                      <img id="email" src={require("../imgs/checked.png")} onClick={this.handleCheckbox}/>
                    </div>
                    <p style={{display: 'inline-block', fontSize: '12pt', verticalAlign: 'middle'}}>Email Alerts</p>
                  </Col>
                  <Col xs={12}>
                    <div className="check-div">
                      <img id="sms" src={require("../imgs/checked.png")} onClick={this.handleCheckbox}/>
                    </div>
                    <p style={{display: 'inline-block', fontSize: '12pt', verticalAlign: 'middle'}}>SMS Alerts</p>
                  </Col>
                  <Col xs={12}>
                    <div className="check-div">
                      <img id="call" src={require("../imgs/checked.png")} onClick={this.handleCheckbox}/>
                    </div>
                    <p style={{display: 'inline-block', fontSize: '12pt', verticalAlign: 'middle'}}>Call Alerts</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div style={{width: '100%', textAlign: 'center'}}>
                      <FlatButton id="desk-btn-dis" onClick={this.handleProfileUpdateContent} backgroundColor="#3386f4" hoverColor="#3386f4" label={'APPLY'} fullWidth style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row hide-on-mobile btn-height"/>
                      <FlatButton id="desk-btn" onClick={this.handleProfileUpdateContent} backgroundColor="#3386f4" hoverColor="#3386f4" label={'APPLY'} fullWidth style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row hide hide-on-mobile btn-height"/>
                    </div>
                    <Visible xs sm>
                      <Container fluid className="header header-mobile">
                        <Row id="floating-btn-bot" className="floating-btn-bot-row hide">
                          <Col lg={12} md={12} sm={12} xs={12}>
                            <FlatButton onClick={this.handleProfileUpdateContent} label={'APPLY'} fullWidth className="floating-btn-bot"/>
                          </Col>
                        </Row>
                        <Row id="floating-btn-bot-dis" className="floating-btn-bot-row" style={{paddingBottom: '20px'}}>
                          <Col lg={12} md={12} sm={12} xs={12}>
                            <FlatButton onClick={this.handleProfileUpdateContent} label={'APPLY'} fullWidth className="floating-btn-bot"/>
                          </Col>
                        </Row>
                      </Container>
                    </Visible>
                    <Snackbar open={this.state.snackOpen} message="Profile has been updated" autoHideDuration={1000} onRequestClose={this.handleRequestClose}/>
                  </Col>
                </Row>
              </Col>
              <Col sm={4} xs={12}><br/></Col>
            </Row>
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

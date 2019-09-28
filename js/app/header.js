import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Hidden, Visible} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import MailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import Sticky from 'react-stickynode';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import TextField from 'material-ui/TextField';
import Cookies from 'universal-cookie';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';

const cookies = new Cookies();
let logout = null;
let signin = null;
let signup = null;
let desktopLogout = null;
let desktopSignin = null;
let desktopSignup = null;
let profile = null;
const primaryColor = '#3386f4';
const hoverColor = '#3E8CF8';
const emailRegex = /^\S+@\S+\.\S+$/;
let validEmail;
let name = null;

        // <Container fluid className="header header-top" id="header-top-landing">
          //   <Row className="header-row">
          //     <Col xs={12} sm={12} md={12}>
          //       <a href="/profile" className="name-header" style={{float: 'right', marginTop: '10px'}} onClick={this.handleChangeState}>{this.state.name}</a>
          //     </Col>
          //   </Row>
          // </Container>




  $( document ).ready(function() {
    
    $( ".logoclick" ).click(function() {
    console.log("logo")
     window.location = '/';
    });





});

export class Header extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';

    this.state = {menuOpen: false, signInOpen: false, signupOpen: false, email: '', phone: '', password: '', invalid: '', signUpSuccess: false, name: ''};
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleOpenSignin = this.handleOpenSignin.bind(this);
    this.handleOpenSignup = this.handleOpenSignup.bind(this);
    this.handleSignupClose = this.handleSignupClose.bind(this);
    this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
    this.handleSignupBtn = this.handleSignupBtn.bind(this);
    this.handleSigninBtn = this.handleSigninBtn.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
    this.handleCheckBlurElement = this.handleCheckBlurElement.bind(this);
    this.handleEmailUpdateInput = this.handleEmailUpdateInput.bind(this);
    this.handleMobileUpdateInput = this.handleMobileUpdateInput.bind(this);
    this.handlePasswordUpdateInput = this.handlePasswordUpdateInput.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleCongratsMenuClose = this.handleCongratsMenuClose.bind(this);
    this.handleSignupEnter = this.handleSignupEnter.bind(this);
    this.handleSigninEnter = this.handleSigninEnter.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleOtpBtn = this.handleOtpBtn.bind(this);
    this.handleResendOtpBtn = this.handleResendOtpBtn.bind(this);

    this.handleSignupOtpBtn = this.handleSignupOtpBtn.bind(this);


    

  }

  handleChangeState(){
    window.location = '/profile';
  }

  componentDidMount() {

      var parts = window.location.href;
      localStorage.setItem('ad_url',parts);

      var adlink = localStorage.getItem('ad_url');

      var url = new URL(adlink);

      var utm_source = url.searchParams.get("utm_source");
      var utm_medium = url.searchParams.get("utm_medium");
      var utm_campaign = url.searchParams.get("utm_campaign");
      var gclid = url.searchParams.get("gclid");

      localStorage.setItem('utm_source',utm_source);
      localStorage.setItem('utm_medium',utm_medium);
      localStorage.setItem('utm_campaign',utm_campaign);
      localStorage.setItem('gclid',gclid);

      if(utm_source == '' || utm_source == undefined ||  utm_source == null ){
        $('.phonenumberdisplay').css('display','block');
        $('.phonenumberdisplayads').css('display','none');

      }
      else{
        $('.phonenumberdisplay').css('display','none');
        $('.phonenumberdisplayads').css('display','block');

      }





    logout = null;
    if (localStorage.getItem('userObject') !== null && localStorage.getItem('userObject') !== '' && localStorage.getItem('userObject') !== undefined) {
      name = JSON.parse(localStorage.getItem('userObject'));
      this.setState({
        name: 'Hi, ' + name.first_name
      });
    }


    if (cookies.get('userId') !== null && cookies.get('userId') !== undefined && cookies.get('userId') !== '') {

      logout = (
        <a id="logout" onClick={this.handleLogoutUser} className="menu-item">Logout</a>
      );
      signin = (
        <a style={{display: 'none'}}/>
      );
      signup = (
        <a style={{display: 'none'}}/>
      );
      profile = (
        <NavLink to="/profile" className="menu-item">Profile</NavLink>
      );
      desktopSignup = null;
      desktopSignin = null;
      desktopLogout = (
        <a id="logout" onClick={this.handleLogoutUser} style={{cursor: 'pointer'}}>LOGOUT</a>
      );
    } else {
         if(window.location.href== server+"/orders" || window.location.href== server+"/myorders"){
          console.log("adds")
          this.setState({
            signInOpen: true, 
          });
        }
      logout = (
        <a style={{display: 'none'}}/>
      );
      profile = (
        <a style={{display: 'none'}}/>
      );
      signin = (
        <a style={{cursor: 'pointer'}} onClick={this.handleOpenSignin} className="menu-item">Sign In</a>
      );
      signup = (
        <a style={{cursor: 'pointer'}} onClick={this.handleOpenSignup} className="menu-item">Sign Up</a>
      );
      desktopSignin = (
        <a style={{cursor: 'pointer'}} onClick={this.handleOpenSignin}>SIGN IN</a>
      );
      desktopSignup = (
        <a style={{cursor: 'pointer'}} onClick={this.handleOpenSignup}>SIGN UP</a>
      );
    }
    const menuSecond = document.getElementsByClassName('menu-secondary');
    if (menuSecond.length !== 0) {
      for (let i = 0; i < menuSecond[0].childNodes.length; i++) {
        if (window.location.pathname === menuSecond[0].childNodes[i].getAttribute("href")) {
          menuSecond[0].childNodes[i].classList.add('active');
        }
      }
    }

    const menuPrimary = document.getElementsByClassName('menu-primary');
    if (menuPrimary.length !== 0) {
      for (let j = 0; j < menuPrimary[0].childNodes.length; j++) {
        if (window.location.pathname === menuPrimary[0].childNodes[j].getAttribute("href")) {
          menuPrimary[0].childNodes[j].classList.add('active');
        }
      } 
    }
    
    this.forceUpdate();
  }

  handleSigninEnter(e) {
    if (e.keyCode === 13) {
      this.handleSigninBtn()
    }
  }

  handleSignupEnter(e) {
    if (e.keyCode === 13) {
      this.handleSignupBtn();
    }
  }

  handleOpenSignin() {
    this.setState({
      signInOpen: true, signupOpen: false
    });
    if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined && document.getElementById('signupbtn') !== '') {
      document.getElementById('signupbtn').style.display = 'none';
    }
  }

  handleOpenSignup() {
    this.setState({signupOpen: true});
    document.getElementById('signupbtn').style.display = 'none';
  }

  handleSignupClose() {
    this.setState({
      signupOpen: false
    });
    if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined && document.getElementById('signupbtn') !== '') {
      document.getElementById('signupbtn').style.display = 'block'; 
    }
  }

  handleSigninMenuClose() {
     window.location = '/';
      localStorage.setItem('userObject', '' );
      cookies.remove('userId');


     
    this.setState({
      signInOpen: false
    });
    if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined && document.getElementById('signupbtn') !== '') {
      document.getElementById('signupbtn').style.display = 'block';
    }
  }

  handleMenuOpen() {
    this.setState({menuOpen: true});
  }

  handleMenuClose() {
    this.setState({menuOpen: false});
  }

  handleLogoutUser() {
    cookies.remove('userId');
    localStorage.clear();

    profile = (
      <a style={{display: 'none'}}/>
    );
    logout = (
      <a style={{display: 'none'}}/>
    );
    signin = (
      <a className="menu-item" onClick={this.handleOpenSignin}>Sign In</a>
    );
    signup = (
      <a className="menu-item" onClick={this.handleOpenSignup}>Sign Up</a>
    );
    desktopLogout = null;
    desktopSignin = (
      <a style={{cursor: 'pointer'}} onClick={this.handleOpenSignin}>SIGN IN</a>
    );
    desktopSignup = (
      <a style={{cursor: 'pointer'}} onClick={this.handleOpenSignup}>SIGN UP</a>
    );
    this.setState({
      menuOpen: false,
      name: ''
    });
    this.forceUpdate();
    window.location = '/';
  }

  handleSignup(ev) {
    ev.preventDefault();
    if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined) {
      document.getElementById('signupbtn').style.display = 'none';
    }
    this.setState({
      signupOpen: true,
      signInOpen: false
    });
  }

  handleSignupOtpBtn(){


    $('.displayOtp').css('display','none');
    $('.phonenumber').css('display','block');

     this.setState({
        invalidSignup: ''
      });


    if (this.state.phone === null || this.state.phone === '' || this.state.phone === undefined) {
      return this.setState({
        invalidSignup: 'Mobile number is missing'
      });
    }




    if (this.state.email === null || this.state.email === '' || this.state.phone === undefined) {
      return this.setState({
        invalidSignup: 'Email is missing'
      });
    }

    if (validEmail === undefined || validEmail === false) {
      return this.setState({
        invalidSignup: 'Invalid email input'
      });
    }
    if (this.state.phone.length != 10) {
      return this.setState({
        invalidSignup: ' Invalid Phone Number'
      });
    }


    console.log(this.state.phone)
    console.log(this.state.email)

    const dataSignup = {
      phone: this.state.phone,
       email: this.state.email,
    };



    axios({
      method: 'POST',
      url: apilink+'/website/signup/',
      data: dataSignup
    }).then(response => {
      console.log(response)
      if (response.data.status === 'Successful') {
        console.log("header")
        cookies.set('userId', response.data.id, {path: '/'});
        axios({
          method: 'POST',
          url: apilink+'/website/sendotp/',
          data: dataSignup
        }).then(response => {

          $('.phonenumber').css('display','none');
          $('.displayOtp').css('display','block');
            console.log("response")
        }).catch(error => {
          console.log(error);
        });
      }
      if (response.data.status === 'Failed') {
        return this.setState({
        invalidSignup: 'Account with Phone Number Already Exists'
      });
      }

      console.log("response")
    }).catch(error => {
      console.log(error);
    });
  }


  handleResendOtpBtn(){
    localStorage.getItem('number');
    const dataSignup = {
      phone: localStorage.getItem('number'),
    };

    axios({
      method: 'POST',
      url: apilink+'/website/sendotp/',
      data: dataSignup
    }).then(response => {
      if (response.data.status === 'Successful') {
      }
      })
  }

  handleOtpBtn(){
    $('.displayOtp').css('display','none');
    $('.phonenumber').css('display','block');
    $('.closebutton').css('display','block');


     this.setState({
        invalid: ''
      });
    if (this.state.phone === null || this.state.phone === '' || this.state.phone === undefined) {
      return this.setState({
        invalid: 'Mobile number is missing'
      });
    }

    if (this.state.phone.length != 10) {
      return this.setState({
        invalid: ' Invalid Phone Number'
      });
    }


    const dataSignup = {
      phone: this.state.phone,
    };


    localStorage.setItem('number',this.state.phone);


    axios({
      method: 'POST',
      url: apilink+'/website/signup/',
      data: dataSignup
    }).then(response => {
      console.log(response)
      console.log(response.data.status)
      if (response.data.status === 'Successful') {
        cookies.set('userId', response.data.id, {path: '/'});
        axios({
          method: 'POST',
          url: apilink+'/website/sendotp/',
          data: dataSignup
        }).then(response => {

          $('.phonenumber').css('display','none');
          $('.displayOtp').css('display','block');

            console.log("response")
        }).catch(error => {
          console.log(error);
        });
      }
      if (response.data.status === 'Failed') {
        return this.setState({
        invalidSignup: 'Account with Phone Number Already Exists'
      });
      }

      console.log("response")
    }).catch(error => {
      console.log(error);
    });
  }

  handleSigninBtn() {


    
      if (this.state.password === null || this.state.password === '') {
        return this.setState({
          invalid: 'Password is missing'
        });
      }
      console.log(this.state.phone)
      console.log(this.state.password)


      const dataSignin = {
        username: this.state.phone,
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
          if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined && document.getElementById('signupbtn') !== '') {
            document.getElementById('signupbtn').style.display = 'none';
          }
          window.location = '/orders';
          
        } else {
          this.setState({
            invalid: response.data.status
          });
        }
      }).catch(error => {
        console.log(error);
      });
    
  }



  handleSignupBtn() {
    if (this.state.email === null || this.state.email === '') {
      return this.setState({
        invalidSignup: 'Email is missing'
      });
    }

    if (this.state.phone === null || this.state.phone === '') {
      return this.setState({
        invalidSignup: 'Mobile number is missing'
      });
    }

    if (this.state.password === null || this.state.password === '') {
      return this.setState({
        invalidSignup: 'Password is missing'
      });
    }

    if (validEmail === undefined || validEmail === false) {
      return this.setState({
        invalid: 'Invalid email input'
      });
    }
    const createlead = {
      first_name: "",
      last_name: "",
      email: this.state.email,
      phone: this.state.phone,
      device: cookies.get('device-model')

    }

    const dataSignup = {
      email: this.state.email,
      username: this.state.phone,
      password: this.state.password
    };
    axios({
      method: 'POST',
      url: apilink+'/website/login/',
      data: dataSignup
    }).then(response => {
      // axios.post(apilink+'/website/createlead/', createlead, axiosConfig).
      // then(response => {
      //   console.log(response)
      // })

      if (response.data.status === 'Successful') {
        console.log("header")
        cookies.set('userId', response.data.id, {path: '/'});
        this.setState({
          signupOpen: false,
          menuOpen: false,
          
        });
        window.location = '/orders';

      }
      if (response.data.status === 'User Already Exists') {
        console.log("het")
        return this.setState({
        invalidSignup: 'User Already Exists'
      });
      }
    }).catch(error => {
      console.log(error);
    });
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

  handleCongratsMenuClose() {
    if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined) {
      document.getElementById('signupbtn').style.display = 'none';
    }
    this.setState({
      signUpSuccess: false
    });
    logout = (
      <a id="logout" onClick={this.handleLogoutUser} className="menu-item">Logout</a>
    );
    signin = (
      <a style={{display: 'none'}}/>
    );
    signup = (
      <a style={{display: 'none'}}/>
    );
    desktopSignup = null;
    desktopSignin = null;
    desktopLogout = (
      <a id="logout" onClick={this.handleLogoutUser} style={{cursor: 'pointer'}}>LOGOUT</a>
    );
  }

  handleNavigateProfileBtn() {
    window.location = '/profile';
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
  
          <Hidden xs sm md>
            <Sticky enabled bottomBoundary={10000} innerZ={1499} activeClass="header-mobile-sticky">
              <Container fluid className="header header-bottom" id="landing-bottom-header">
                <Row className="header-row">
                  <Col sm={2}>
                    <div className="logo-img">
                      <NavLink to="/" style={{textAlign: 'center'}}>
                        <img className= "logoclick" src={require("./imgs/logo.png")} style={{width: '170px'}}/>
                      </NavLink>
                    </div>
                  </Col>
                  <Col sm={7}>
                    <div className="menu-secondary">
                      <NavLink to="/repair">REPAIR</NavLink>
                      <NavLink to="/orders">TRACK</NavLink>
                      <NavLink to="/devices/">DEVICES</NavLink>
                      <NavLink to="/Payments/">PAY</NavLink>
                      <a style={{color: 'rgb(237, 106, 94)'}} target="_blank" href="https://shop.iservice.co.in/">SHOP</a>


                    </div>
                  </Col>
                  <Col sm={3}>

                    <div style={{textAlign: 'right', paddingTop: '15px', float: 'right'}}>
                    <Row>
                      <h5 className="phonenumberdisplay" style={{marginRight: '10px'}}><a href="tel:+917411811911" style={{fontWeight:'bold'}}>Call Us at 74118 11911</a></h5>
                      <h5 className="phonenumberdisplayads" style={{marginRight: '10px'}}><a href="tel:+918046801041" style={{fontWeight:'bold'}}>Call us at 080-46801041</a></h5>
                    </Row>
                    <Row>

                        <div className="menu-primary">
                           <a target="_blank" href="https://blog.iservice.co.in/">BLOG</a>
                          {desktopSignin}
                          {desktopLogout}
                        </div>
                        <br />
                        <NavLink to="/profile"  style={{float: 'right', marginTop: '10px'}} onClick={this.handleChangeState}>{this.state.name}</NavLink>
                    </Row>
                      
                    </div>
                  </Col>
                </Row>
              </Container>
            </Sticky>
          </Hidden>
          <Visible xs sm md>
            <Sticky enabled bottomBoundary={10000} innerZ={1499} activeClass="header-mobile-sticky">
              <Container fluid className="header header-mobile">
                <Row className="header-row">
                  <Col xs={3}>
                    <div style={{textAlign: 'center'}}>
                        <img src={require("./imgs/glyph.png")} style={{width: '30px', paddingTop:'15px'}}/>
                      </div>
                  </Col>
                  <Col xs={6}>
                    <h1 className="logo-text">
                      iService
                    </h1>
                  </Col>
                  <Col xs={3}>
                    <IconButton tooltip="Menu" style={{width: '50px', margin: '10px', float: 'right'}} onTouchTap={this.handleMenuOpen}>
                      <NavIcon color="#3386f4"/>
                    </IconButton>
                  </Col>
                </Row>
              </Container>
            </Sticky>
            <FullscreenDialog
              open={this.state.menuOpen}
              title={'iService'}
              actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
              titleStyle={{
                fontFamily: 'Montserrat',
                letterSpacing: '1pt',
                fontWeight: '200',
                color: '#3386f4',
                textAlign: 'center',
                padding: '0',
                margin: '0',
                lineHeight: '50pt'
              }}
              appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginBottom: '10px'}}
              >
              <Container fluid className="header header-mobile">
                <Row className="header-row">
                  <Col xs={12} style={{textAlign: 'center'}}>
                  <NavLink to="/" >
                    <img className= "logoclick"  src={require("./imgs/glyph.png")} style={{width:'30px', paddingTop:'15px', padding: '0 5px'}}/>
                    <h1 className="logo-text" style={{display: 'inline-block'}}>
                      iService
                    </h1>
                    </NavLink>
                    <IconButton tooltip="Close Menu" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                      <CloseIcon color="#3386f4"/>
                    </IconButton>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={12}>
                    {profile}

                    <NavLink to="/repair" className="menu-item">
                      Repair
                    </NavLink>
                    <NavLink to="/orders" className="menu-item">
                      Track
                    </NavLink>
                    <a target="_blank" href="http://blog.iservice.co.in/" className="menu-item">
                      Blog
                    </a>
                
                    <NavLink to="/devices/" className="menu-item">
                     Devices
                    </NavLink>

                    <NavLink to="/about" className="menu-item">
                     About Us
                    </NavLink>

                     <NavLink to="/Payments" className="menu-item">
                     PAY
                    </NavLink>


                    <a className="menu-item" style={{color: 'rgb(237, 106, 94)'}} target="_blank" href="https://shop.iservice.co.in/">SHOP</a>


                    {signin}
                    {logout}
                    <Row className="menu-item">
                      <h5 className="phonenumberdisplay" style={{marginRight: '10px'}}> Call us at : 074118 11911</h5>
                    </Row>



                    <p className="menu-footer-text">
                      <span>35,000</span> iService customers India-wide
                    </p>
                  </Col>
                </Row>
              </Container>
            </FullscreenDialog>
          </Visible>
          <Dialog
          repositionOnUpdate={false}
            open={this.state.signupOpen}
             autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
            actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
            appBarStyle={{display: 'none'}}
            id="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4" onClick={this.handleSignupClose}/>
                  </IconButton>
                </Col>
              </Row>
              <Row>
                  <Container fluid className="header header-mobile">
                    <Row className="header-row">
                      <Col xs={12} style={{textAlign: 'center'}}>
                        <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                          SIGN UP
                        </h1>
                      </Col>
                    </Row>

                  </Container>
                  <center>
                  <Container>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="signupDialogText">
                        </div>
                      </Col>
                    </Row>

                    <Row className="phonenumber">
                      <Col xs={12} md={4} lg={3}>
                          Email : 
                      </Col>
                      <Col xs={12} md={4} lg={6}>
                        <div className="signupInputArea">
                          <TextField type="text" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" hintStyle={{color: '#9b9b9b', zIndex: '9999', paddingLeft: '15px'}} onChange={this.handleEmailUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                        </div>
                      </Col>
                  
                    </Row>
                    <Row className="phonenumber">

                      <Col xs={12} md={4} lg={3}>
                          Phone number : 
                      </Col>
                      <Col xs={12} md={4} lg={6}>
                        <div className="signupInputArea">
                          <TextField type="number" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                        </div>
                      </Col>
                    </Row>


                    <Row className="phonenumber">
                      <div className="signinbuttonheader">
                        <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="Get OTP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleSignupOtpBtn}/>
                      </div>
                    </Row>


                    <div  style={{display: 'none'}} className="displayOtp">
                      <Row>
                        <Col xs={12} md={4} lg={3}>
                          Enter OTP : 
                        </Col>
                        <Col xs={12} md={4} lg={6}>
                          <div className="signupInputArea">
                            <TextField type="password" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSigninEnter}/>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                          <div className="signinbuttonheader">
                            <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="SIGN UP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px'}} onTouchTap={this.handleSignupBtn}/>
                          </div>
                      </Row>
                    </div>
                          <p className="signInErr">{this.state.invalidSignup}</p>


                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div>
                          <p className="signInText">Already have an account? <span className="signInTextClick" style={{color: primaryColor, cursor: 'pointer'}} onTouchTap={this.handleOpenSignin}>Sign in</span></p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  </center>
              </Row>
            </Container>
          </Dialog>
          <Dialog
            repositionOnUpdate={false}
            open={this.state.signInOpen}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
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
                    SIGN IN
                  </h1>
                </Col>
              </Row>

            </Container>
            <Container fluid>
              <Row>
                  <center>
                  <Container>
                    <Row className="phonenumber">
                      <Col xs={12} md={4} lg={3}>
                          Phone number : 
                      </Col>
                      <Col xs={12} md={4} lg={6}>
                        <div className="signupInputArea">
                          <TextField type="number" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                        </div>
                      </Col>
                    </Row>

                    <div  style={{display: 'none'}} className="displayOtp">
                      <Row>
                        <Col xs={12} md={4} lg={3}>
                          Enter OTP : 
                        </Col>
                        <Col xs={12} md={4} lg={6}>
                          <div className="signupInputArea">
                            <TextField type="password" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSigninEnter}/>
                            <div  onTouchTap={this.handleResendOtpBtn}>Resend OTP</div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <p className="signInErr">{this.state.invalid}</p>

                     <Row className="phonenumber">
                        <div className="signinbuttonheader">
                          <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="Get OTP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleOtpBtn}/>
                        </div>
                      </Row>

                    <div style={{display: 'none'}} className="displayOtp">
                      <Row>
                          <div className="signinbuttonheader">
                            <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="SIGN IN" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleSigninBtn}/>
                          </div>
                      </Row>
                    </div>
                    <Row>
                      <div>
                      </div>
                    </Row>
                  </Container>
                  </center>
              </Row>
            </Container>
          </Dialog>
          <Dialog
            open={this.state.signUpSuccess}
            actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleCongratsMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              repositionOnUpdate={true}
            appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginTop: '10px'}}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
       
              <Row className="header-row">
                <Col xs={8} style={{textAlign: 'center'}}>
                  <h4 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                    CONGRATULATIONS
                  </h4>
                </Col>
                <Col xs={2} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleCongratsMenuClose}>
                    <CloseIcon color="#3386f4" onClick={this.handleCongratsMenuClose}/>
                  </IconButton>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                  <Container>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div style={{textAlign: 'center'}}>
                          <img src={require("./imgs/confirmed-signup.png")} style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div>
                          <p style={{textAlign: 'left', fontSize: '15px', letterSpacing: '1px', lineHeight: '22px'}}>
                            We recommend you to set your <span style={{color: '#3386f4'}}>notification</span> preferences on jobs, tracking and diagnosis based information to your device.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="">
                          <FlatButton labelStyle={{fontSize: '15px', letterSpacing: '2px'}} backgroundColor={primaryColor} hoverColor={hoverColor} label="UPDATE PROFILE" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', fontSize: '15px'}} onTouchTap={this.handleNavigateProfileBtn}/>
                        </div>
                      </Col>
                    </Row>
                  </Container>
              </Row>
            </Container>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

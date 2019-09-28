
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col, Visible} from 'react-grid-system';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import ActionFavorite from 'material-ui/svg-icons/image/lens';
import ActionFavoriteBorder from 'material-ui/svg-icons/image/panorama-fish-eye';
import axios from 'axios';
import Cookies from 'universal-cookie';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import ClevertapReact from 'clevertap-react';
import Dialog from 'material-ui/Dialog';

ClevertapReact.initialize("TEST-758-986-794Z");

const emailRegex = /^\S+@\S+\.\S+$/;
let validEmail;
let counter = 1;
let counterProds = 0;
let total = 0;

const cookies = new Cookies();

const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};






$( document ).ready(function() {




$( ".modalsignin" ).click(function() {
   history.back();
  });
});







export class Estimate extends Component {

  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
    this.state = {
      deviceFullDescription: cookies.get('device-brand') + ' ' + cookies.get('device-model'),
      issues: '',
      relatedProducts: '',
      payLabel: '',
      method: 'delivery',
      signupOpen: false,
      signInOpen: false,
      email: '',
      password: '',
      invalid: '',
      invalidSignup: '',
      phone: '',
      openSnack: false,
      openLoginSnack: false
    };
    this.handleChangeMethod = this.handleChangeMethod.bind(this);
    this.handlePageRedirect = this.handlePageRedirect.bind(this);
    this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleOpenSignIn = this.handleOpenSignIn.bind(this);
    this.handleSigninBtn = this.handleSigninBtn.bind(this);
    this.handleEmailUpdateInput = this.handleEmailUpdateInput.bind(this);
    this.handlePasswordUpdateInput = this.handlePasswordUpdateInput.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
    this.handleCheckBlurElement = this.handleCheckBlurElement.bind(this);
    this.handleMobileUpdateInput = this.handleMobileUpdateInput.bind(this);
    this.handleSignupBtn = this.handleSignupBtn.bind(this);
    this.handleSignupClose = this.handleSignupClose.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);
  }

  handlePageRedirect(e) {
    if (cookies.get('userId') === null || cookies.get('userId') === undefined || cookies.get('userId') === '') {
      return this.setState({
        openLoginSnack: true,
        signInOpen: true
      });
    }

    if (e.target.innerHTML === 'Skip payment for now') {
      cookies.set('skip-pay', '1', {path: '/'});
    } else {
      cookies.set('skip-pay', '0', {path: '/'});
    }
    window.location = '/' + this.state.method;
  }

  handleSnackRequestClose() {
    this.setState({
      openSnack: false,
      openLoginSnack: false
    });
  }

  handleChangeMethod(e, value) {
    e.preventDefault();

    console.log(value);
    this.setState({
      method: value
    });
        cookies.set('type', value, {path: '/'});
    
    document.querySelector('#disappear-text').style.opacity = 0;
    try {
      document.getElementById('floating-btn-bot-dis').classList.add('hide');
      document.getElementById('floating-btn-bot').classList.remove('hide');
    } catch (err) {
      console.log(err.message);
    }
    this.forceUpdate();

    try {
      document.getElementById('desk-btn-dis').classList.add('hide');
      document.getElementById('desk-btn').classList.remove('hide');
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

  handleSignup() {
    this.setState({
      signupOpen: true,
      signInOpen: false
    });
  }

  handleOpenSignIn() {
    this.setState({
      signInOpen: true,
      signupOpen: false
    });
  }

  handleSigninMenuClose() {
    this.setState({
      signInOpen: false,
      signupOpen: false
    });
    axios.post(apilink+'/website/user/', {id: cookies.get('userId')}).then(response => {
      localStorage.setItem('userObject', JSON.stringify(response.data));
    }).catch(err => {
      console.log(err);
    });
  }

  handleEmailUpdateInput(e, val) {
    if (val.match(emailRegex)) {
      validEmail = true;
      this.setState({
        email: val
      });
    } else {
      validEmail = false;
    }
  }

  handleMobileUpdateInput(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handlePasswordUpdateInput(e) {
    this.setState({
      password: e.target.value
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

  handleSigninBtn(e) {
    e.preventDefault();
    if (this.state.email === null || this.state.email === '') {
      return this.setState({
        invalid: 'Email is missing',
      });
    }

    if (this.state.password === null || this.state.password === '') {
      return this.setState({
        invalid: 'Password is missing'
      });
    }

    if (validEmail === undefined || validEmail === false) {
      return this.setState({
        invalid: 'Invalid email input'
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
        console.log(response.data);
        cookies.set('userId', response.data.id, {path: '/'});
        
        this.setState({
          signInOpen: false,
          signupOpen: false,
          openSnack: true
        });
        const payload = {
          "Site": {
           "Email": this.state.email
         }
        }

        ClevertapReact.profile(payload);
        ClevertapReact.event("User Signed In");
        document.getElementById('signin-desktop').style.display = 'none';
        document.getElementById('signup-desktop').style.display = 'none';
        // document.getElementById('logout').style.display = 'block';
        this.forceUpdate();
      } else {
        this.setState({
          invalid: response.data.status
        });
      }
      this.forceUpdate();
    }).catch(error => {
      console.log(error);
    });
  }

  handleSignupBtn() {
    console.log(this.state);
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

    const dataSignup = {
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    };
    const payload = {
      "Site": {
       "Email": this.state.email,
       "Phone": this.state.phone
     }
    }
    const createlead = {
      first_name: "",
      last_name: "",
      email: this.state.email,
      phone: this.state.phone,
      device: cookies.get('device-model')

    }
    axios({
      method: 'POST',
      url: apilink+'/website/signup/',
      data: dataSignup
    }).then(response => {
      axios.post(apilink+'/website/createlead/', createlead, axiosConfig).
      then(response => {
        console.log(response)
      })
      console.log(response);
      if (response.data.status === 'Successful') {
        cookies.set('userId', response.data.id, {path: '/'});
        ClevertapReact.profile(payload);
        ClevertapReact.event("User Signed Up");
        this.setState({
          signupOpen: false
        });
      }
      else{
        $('#userthere').css('display','block')
      }
    }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {


    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  
    if (cookies.get('userId') === undefined || cookies.get('userId') == '' || cookies.get('userId') === null) {
      this.setState({
        signupOpen: true

      });
      if (document.getElementById('estimate-btn') !== null && document.getElementById('estimate-btn') !== undefined) {
        document.getElementById('estimate-btn').style.display = 'none !important';
        this.forceUpdate();
        return;
      }
    }

    

    if(cookies.get('device-issues') == 'Diagnosis'){
      $('.skippayment').hide();
      var issueList = {
        model: cookies.get('device-model'),
        issue: ["Diagnosis"],
      };
    }

    else{
      if(cookies.get('related-products') == ''){

        var issueList = {
          model: cookies.get('device-model'),
          issue: cookies.get('device-issues'),
        };
      }
      else{
        var issueList = {
          model: cookies.get('device-model'),
          issue: cookies.get('device-issues'),
          related: cookies.get('related-ids'),
        };
      }
    }

    axios({
      method: 'POST',
      url: apilink+'/website/check_estimate/',
      data: issueList
    }).then(response => {
      console.log(response);
      const issuesList = response.data.estimate.map(result => {
        total += result.estimate_amount;

        return (
          <Row key={counter++} className="marginTop20">
            <Col lg={6} md={6} sm={6} xs={6}>
              <span className="issue-heading">
                {result.estimate_issue} 
              </span>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <span className="issue-heading floatRight">
                <strong>{result.estimate_amount}</strong>
              </span>
            </Col>
          </Row>
        );
      });


      // const productsList = response.data.product.map(result => {
      //   total += result.product_amount;
      //   return (
      //     <Row key={counter++} className="marginTop20">
      //       <Col lg={6} md={6} sm={6} xs={6}>
      //         <span className="issue-heading">
      //           {result.product_name}
      //         </span>
      //       </Col>
      //       <Col lg={6} md={6} sm={6} xs={6}>
      //         <span className="issue-heading floatRight">
      //           <strong>{result.product_amount}</strong>
      //         </span>
      //       </Col>
      //     </Row>
      //   );
      // });

      this.setState({
        issues: issuesList,
        // relatedProducts: productsList,
        netTime: response.data.net_time,
        payLabel: 'PAY  ' 
      });
      cookies.set('total-estimate', total, {path: '/'});


    }).catch(error => {
      console.log(error);
    });
  }

  handleSignupClose() {
    window.location = '/repair';
  }

  render() {
    const primaryColor = '#3386f4';
    const hoverColor = '#3E8CF8';
    return (
      <MuiThemeProvider>
        <div>
          <Container fluid className="estimateContainerNew" style={{paddingBottom: '50px', paddingTop: '50px'}}>
            <Row>
              <Col sm={4} xs={12}>
                <br/>
              </Col>
              <Col sm={4} xs={12}>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading">
                      DEVICE
                    </span>
                    <p className="product-name">{this.state.deviceFullDescription}</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <span className="product-heading">
                      ISSUES
                    </span>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <span className="product-heading floatRight">
                      INR
                    </span>
                  </Col>
           
                </Row>
                {this.state.issues}
   
                <Row className="rowWidth100 marginTop20 estimatetimevalue">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading">
                      ESTIMATE JOB DURATION
                    </span>
                    <p className="product-name">{this.state.netTime}</p>
                  </Col>
                </Row>
                <Row className="rowWidth100 marginTop20">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <span className="product-heading marginBottom20">
                      SCHEDULE
                    </span>
                    <p id="disappear-text" className="disappear-text">Please select one of the methods:</p>
                    <RadioButtonGroup name="scheduleMethod" onChange={this.handleChangeMethod}>
                      <RadioButton
                        value="delivery"
                        label="Pickup and Delivery"
                        checkedIcon={<ActionFavorite style={{color: '#F44336'}}/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{margin: '10px'}}
                        iconStyle={{width: '15px'}}
                        disableTouchRipple
                        />
                      <RadioButton
                        value="walkin"
                        label="Walk-in"
                        checkedIcon={<ActionFavorite style={{color: '#F44336'}}/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{margin: '10px'}}
                        iconStyle={{width: '15px'}}
                        disableTouchRipple
                        />
                      <RadioButton
                        value="itechie"
                        label="iTechie doorstep visit"
                        checkedIcon={<ActionFavorite style={{color: '#F44336'}}/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{margin: '10px'}}
                        iconStyle={{width: '15px'}}
                        disableTouchRipple
                        />
                    </RadioButtonGroup>
                  </Col>
                </Row>
                <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton id="desk-btn-dis" backgroundColor="#3386f4" hoverColor="#3386f4" label={'PAY AND SCHEDULE '} fullWidth style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row hide-on-mobile disabled btn-height"/>
                  <FlatButton id="desk-btn" onClick={this.handlePageRedirect} backgroundColor="#3386f4" hoverColor="#3386f4" label={'PAY AND SCHEDULE '} fullWidth style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row hide hide-on-mobile btn-height"/>
                <a style={{textAlign: 'center', padding: '10px 0', display: 'block', cursor: 'pointer'}} className="skippayment" onClick={this.handlePageRedirect}>Skip payment for now</a>
                  
                </div>
              </Col>
              <Col sm={4} xs={12}>
                <br/>
              </Col>
            </Row>
          </Container>
          <Visible xs sm>
            <Container fluid className="header header-mobile">
              <Row id="floating-btn-bot" className="floating-btn-bot-row hide">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FlatButton onClick={this.handlePageRedirect} label={'PAY ₹ ' + cookies.get('total-estimate')} fullWidth className="floating-btn-bot"/>
                </Col>
              </Row>
              <Row id="floating-btn-bot-dis" className="floating-btn-bot-row">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FlatButton label={'PAY AND SCHEDULE '} fullWidth className="floating-btn-bot disabled"/>
                </Col>
              </Row>
            </Container>
          </Visible>
          <Dialog
            open={this.state.signupOpen}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              repositionOnUpdate={true}
            actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
            appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginBottom: '10px'}}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4" className= "modalsignin" onClick={this.handleSigninMenuClose}/>
                  </IconButton>
                </Col>
                <Col xs={12} style={{textAlign: 'center'}}>
                </Col>
              </Row>
              <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                    Almost there, give us your details
                  </h1>
                </Col>
              </Row>
            </Container>
            <center>
            <Container>
              <Row>
                <Col xs={12} md={4} lg={3}>
                  Email : 
                </Col>
                <Col xs={12} md={4} lg={6}>
                
                  <div className="signupInputArea">
                    <TextField type="text" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" hintText="Email" hintStyle={{color: '#9b9b9b', zIndex: '9999', paddingLeft: '15px'}} onChange={this.handleEmailUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} lg={3}>
                  Phone Number : 
                </Col>
                <Col xs={12} md={4} lg={6}>
                
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" hintText="Mobile Number" hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} lg={3}>
                  Password : 
                </Col>
                <Col xs={12} md={4} lg={6}>
                
                  <div className="signupInputArea">
                    <TextField type="password" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" hintText="Password" hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={12} md={12} xs={12}>
                  <div className="signinbutton">
                    <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="SIGN UP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px'}} onTouchTap={this.handleSignupBtn}/>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={2} md={4} xs={12}/>
                <Col sm={8} md={4} xs={12}>
                  <div>
                    <p className="signInText">Already have an account?
                      <br/>
                      <span className="signInTextClick" style={{color: primaryColor}} onTouchTap={this.handleOpenSignIn}>
                        Sign in
                      </span>

                    <p  id="userthere" className="signInErr">
                      User already exists
                    </p>
                    </p>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={2} md={4} xs={12}/>
                <Col sm={8} md={4} xs={12}>
                  <div>
                    <p className="signInErr">{this.state.invalidSignup}</p>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
            </Container>
            </center>
          </Dialog>
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

              <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                    SIGN IN
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col xs={12} md={4} lg={3}>
                  Email : 
                </Col>

                <Col xs={12} md={4} lg={6}>
                
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '9999', paddingLeft: '15px'}} onChange={this.handleEmailUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
              </Row>
              <Row>
               <Col xs={12} md={4} lg={3}>
                  Password : 
                </Col>
                <Col xs={12} md={4} lg={6}>

                  <div className="signupInputArea">
                    <TextField type="password" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={2} md={4} xs={12}/>
                <Col sm={8} md={4} xs={12}>
                  <div className="">
                    <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="SIGN IN" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px'}} onTouchTap={this.handleSigninBtn}/>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={2} md={4} xs={12}/>
                <Col sm={8} md={4} xs={12}>
                  <div>
                    <p className="signInText">Dont have an account? <span className="signInTextClick" style={{color: primaryColor}} onTouchTap={this.handleSignup}>Sign Up</span></p>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={2} md={4} xs={12}/>
                <Col sm={8} md={4} xs={12}>
                  <div>
                    <p className="signInErr">{this.state.invalid}</p>
                  </div>
                </Col>
                <Col sm={2} md={4} xs={12}/>
              </Row>
            </Container>
          </Dialog>
          <Snackbar open={this.state.openSnack} message="Login Successful" autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
          <Snackbar open={this.state.openLoginSnack} message="Please login to continue" autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
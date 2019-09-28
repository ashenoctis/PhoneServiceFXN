import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import $ from 'jquery';
import Dialog from 'material-ui/Dialog';


const partnersbg = require("../imgs/partnerhero.png");

export class NewPartners extends Component {

  componentDidMount(){
    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  }

  constructor() {
    super();
    this.state = {
      enquireOpen: false,

    };
    this.handleEnquireForm = this.handleEnquireForm.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
    this.handleTextAreaElement = this.handleTextAreaElement.bind(this);
    this.handleCheckBlurElement = this.handleCheckBlurElement.bind(this);
    this.handleTextAreaBlurElement = this.handleTextAreaBlurElement.bind(this);
    this.handleEnquireClose = this.handleEnquireClose.bind(this);
   this.handleSignupBtn = this.handleSignupBtn.bind(this);

    
  }


  

  handleEnquireClose() {
    this.setState({enquireOpen: false});
    document.getElementById('btn-enquire').style.display = 'block';
    document.getElementById('btn-enquire-desktop').style.display = 'block';
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

  handleEnquireForm() {
    this.setState({
      enquireOpen: true
    });
    document.getElementById('btn-enquire').style.display = 'none';
    document.getElementById('btn-enquire-desktop').style.display = 'none';
  }

  handleTextAreaElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#FFF';
    e.target.parentElement.style.backgroundColor = '#FFF';
    e.target.parentElement.style.border = '1px solid #3386f4';
  }

  handleTextAreaBlurElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#f0f3f7';
    e.target.parentElement.style.backgroundColor = '#f0f3f7';
    e.target.parentElement.parentElement.style.border = '1px solid #d6edff';
    e.target.parentElement.style.border = '1px solid #d6edff';
  }

  handleSignupBtn(e) {
        var email = $('#email').val();
    var phone = $('#phone').val();
    var company = $('#company').val();
    var enquiry = $('#enquiry').val();
    console.log(email)
    console.log(phone)

    console.log(enquiry)
    console.log(company)
     $.ajax({
    type: "post",
    url: apilink+"/website/partner/",
    dataType: 'json',
    async: false,
    data: {
    "email" :    email,
    "phone" :    phone,
    "company" :    company,
    "enquiry" :    enquiry,

    },
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', 'Basic b250aGVkb3Q6dGVzdEAxMjM='); 
    },
    success: function (response){
    console.log(response)
    $('.formresponse').css('display','block')
    $('#email').val("");
    $('#phone').val("");
    $('#company').val("");
    $('#enquiry').val("");
    }
  })
  }

  render() {
    const primaryColor = '#3386f4';
    const hoverColor = '#3E8CF8';
    return (
      <MuiThemeProvider>
        <div>
          <Container className="newpartners-section-1" style={{backgroundImage: "url('" + partnersbg + "')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Row>
              <Col sm={4} xs={12}/>
              <Col sm={4} xs={12}>
                <div className="newpartners-container">
                  <h1 className="newpartners-header">Partner with us</h1>
                  <p className="newpartners-para" style={{fontFamily: 'Istok'}}>
                    Partnering with us is not just about, its about getting the full support and solution to mange and grow your business as an individual, shop or franchise.
                  </p>
                </div>
              </Col>
              <Col sm={4} xs={12}/>
            </Row>
          </Container>
          <Container className="newpartners-section-features">
            <Row>
              <Col sm={12} xs={12}>
                <div className="newpartners-container">
                  <p className="new-partner-feature-heading">
                    Why Us?
                  </p>
                  <Row>
                    <Col sm={4} xs={12}>
                      <div className="newpartners-image-container text-align-center">
                        <img className="partner-icons" src={require("../imgs/partner_1.png")}/>
                      </div>
                      <div className="feature-container">
                        <div className="get-customers">
                          <p className="new-partner-feature-content-heading">GET CUSTOMERS</p>
                          <p className="new-partner-data">Using our online and offline marketing strength, we support you by giving you more business in your area.</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="newpartners-image-container text-align-center">
                        <img className="partner-icons" src={require("../imgs/partner_2.png")}/>
                      </div>
                      <div className="feature-container">
                        <div className="get-customers">
                          <p className="new-partner-feature-content-heading">SPARE PARTS</p>
                          <p className="new-partner-data">We source  parts at competitive prices so you don’t have to worry about quality and sourcing.</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="newpartners-image-container text-align-center">
                        <img className="partner-icons" style={{marginTop: '20px'}} src={require("../imgs/partner_3.png")}/>
                      </div>
                      <div className="feature-container">
                        <div className="get-customers">
                          <p className="new-partner-feature-content-heading">KNOWLEDGE & CERTIFICATION</p>
                          <p className="new-partner-data">Keep learning about how to repair the latest models, brands and even get certified from leading agencies. This will bring more customers to you.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="partners-features-bottom">
                    <Col sm={4} xs={12}>
                      <div className="newpartners-image-container text-align-center">
                        <img style={{marginTop: '45px'}} className="partner-icons" src={require("../imgs/partner_4.png")}/>
                      </div>
                      <div className="feature-container">
                        <div className="get-customers">
                          <p className="new-partner-feature-content-heading">STARTING KIT</p>
                          <p className="new-partner-data">We give you a starting kit complete with tools, training, parts, branding and marketing material.</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="newpartners-image-container text-align-center">
                        <img style={{marginTop: '20px', maxHeight: '100px'}} className="partner-icons" src={require("../imgs/partner_5.png")}/>
                      </div>
                      <div className="feature-container">
                        <div className="get-customers">
                          <p className="new-partner-feature-content-heading">PARTNER APP</p>
                          <p className="new-partner-data">Manage all these on our app which is designed to give you fast access to all the features. </p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="newpartners-image-container text-align-center">
                        <img style={{maxHeight: '100px', marginTop: '22px'}} className="partner-icons" src={require("../imgs/partner_6.png")}/>
                      </div>
                      <div className="feature-container margin-bot">
                        <div className="get-customers">
                          <p className="new-partner-feature-content-heading">MANY OPPORTUNITIES</p>
                          <p className="new-partner-data">We allow you to select the type of partnership you want, wherther an iTechie, Franchise or running your own shop in your hometown, we shall support you in every way.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="floating-btn-bot-row">
              <Col lg={12} md={12} sm={12} xs={12}>
                <FlatButton fullWidth backgroundColor={'#FFFFFF'} id="btn-enquire" label="ENQUIRE" labelStyle={{fontSize: '20px', fontWeight: 'bold', color: '#ed6a5e'}} style={{color: '#fff', fontSize: '40px !important', fontWeight: '600', height: '50px', boxShadow: '0pt 1pt 20pt -2pt rgba(0, 0, 0, 0.3)'}} className="floating-btn-bot-signup hide-on-desktop" onClick={this.handleEnquireForm}/>
                <FlatButton backgroundColor={'#FFFFFF'} id="btn-enquire-desktop" label="ENQUIRE" style={{fontSize: '20px', fontWeight: 'bold', color: '#ed6a5e'}} className="floating-btn-desktop-signup hide-on-mobile" onClick={this.handleEnquireForm}/>
              </Col>
            </Row>
          </Container>
          <Dialog
            open={this.state.enquireOpen}
            actionButton={<IconButton key={1} tooltip="Close" style={{width: '50px'}} onTouchTap={this.handleMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
            autoScrollBodyContent={true}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4" onClick={this.handleEnquireClose}/>
                  </IconButton>
                </Col>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <br/>
                </Col>
              </Row>
              <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '1.5em', fontWeight: '400'}}>
                    ENQUIRE
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container>
               
            <form><center>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" id="email" placeholder="Email" hintStyle={{color: '#9b9b9b', zIndex: '9999', paddingLeft: '15px'}}  underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                  </center>

                  <center>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" id="phone" placeholder="Mobile Number" hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}}  underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                    
                  </div>
                  </center>
                  <center>

                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" id="company" placeholder="Company" hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}}  underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                    
                  </div>
                  </center>
                <center>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7'}} className="signupintputText enquire-text-area" placeholder="Write your enquiry here…" hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px', paddingTop: '10px', top: '0', height: '0px'}} id="enquiry"  underlineShow={false} fullWidth onFocus={this.handleTextAreaElement} onBlur={this.handleTextAreaBlurElement} multiLine rows={5}/>
                  </div>
                    </center>
                  
              <Row>
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                    <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="ENQUIRE" fullWidth style={{color: '#fff', marginTop: '10px', minHeight: '55px', borderRadius: '5px'}} onTouchTap={this.handleSignupBtn}/>
                </Col>
                <Col sm={4} xs={12}/>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    <p className="signInErr formresponse">Successfully submitted.</p>
                  </div>
                </Col>
              </Row>
              </form>
            </Container>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
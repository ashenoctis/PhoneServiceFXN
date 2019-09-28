import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col} from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';


const businessbg = require("../imgs/businesshero.png");

const primaryColor = '#3386f4';
const hoverColor = '#3E8CF8';
const buttonHeight = '40px';
const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
};






const events = {
    onDragged: function(event) {},
    onChanged: function(event) {}
};

export class BusinessNew extends Component {
  constructor(props) {
    super(props);
    this.state = {openEnquire: false, subject: ''};
    this.handleOpenEnquire = this.handleOpenEnquire.bind(this);
    this.handleEnquireMenuClose = this.handleEnquireMenuClose.bind(this);
    this.handleSetBusinessPlan = this.handleSetBusinessPlan.bind(this);
    this.handleSubjectUpdateInput = this.handleSubjectUpdateInput.bind(this);
    this.handleSignupBtn = this.handleSignupBtn.bind(this);

  }

  componentDidMount() {

    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  
    document.getElementById('header-top-landing').style.backgroundColor = '#d6edff';
    document.getElementById('landing-bottom-header').style.backgroundColor = '#d6edff';
  }

  handleOpenEnquire() {
    this.setState({
      openEnquire: true
    });
    document.getElementById('enquire-btn-desktop').style.display = 'none';
    document.getElementById('enquire-btn-mobile').style.display = 'none';
  }

  handleEnquireMenuClose() {
    this.setState({
      openEnquire: false
    });
    document.getElementById('enquire-btn-desktop').style.display = 'block';
    document.getElementById('enquire-btn-mobile').style.display = 'block';
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


  handleSubjectUpdateInput(e, val) {
    this.setState({
      subject: val
    })
  }

  handleSetBusinessPlan(e) {
    console.log(e.target.id);
    if (e.target.id === 'startup') {
      this.setState({
        subject: 'Startup',
        openEnquire: true
      });
    }

    if (e.target.id === 'smallbusiness') {
      this.setState({
        subject: 'Small Business',
        openEnquire: true
      });
    }

    if (e.target.id === 'enterprise') {
      this.setState({
        subject: 'Enterprise',
        openEnquire: true
      });
    }

    document.getElementById('enquire-btn-desktop').style.display = 'none';
    document.getElementById('enquire-btn-mobile').style.display = 'none';
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Container fluid>
              <Col sm={12} xs={12} style={{padding: '0px'}}>
                <OwlCarousel className="owl-carousel owl-theme" options={options} events={events} >
                  <div>
                    <Col sm={12} xs={12}>
                      <div className="business-container" style={{backgroundImage: "url('" + businessbg + "')", backgroundSize: '100% 700px', backgroundRepeat: 'no-repeat'}}>
                        <div className="business-desktop-client-box">
                          <div className="business-desktop-client-box-text">
                             <h1><span style={{color: '#2b4162'}}>Expert services</span> <span style={{color: '#3386f4'}}>for your business</span></h1><br />
                             Running and growing your business is your and your employee’s primary goal not taking care of broken phones and laptops. We offer you customized solutions depending on the size of the organization and needs. 
                          </div>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <Col sm={12} xs={12}>
                      <div className="business-container" style={{backgroundImage: "url('" + businessbg + "')", backgroundSize: '100% 700px', backgroundRepeat: 'no-repeat'}}>
                        <div className="business-desktop-client-box">
                          <div className="business-desktop-client-box-text">
                             <h1><span style={{color: '#2b4162'}}>Expert services</span> <span style={{color: '#3386f4'}}>for your business</span></h1><br />
                              Running and growing your business is your and your employee’s primary goal not taking care of broken phones and laptops. We offer you customized solutions depending on the size of the organization and needs. 
                          </div>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <Col sm={12} xs={12}>
                      <div className="business-container" style={{backgroundImage: "url('" + businessbg + "')", backgroundSize: '100% 700px', backgroundRepeat: 'no-repeat'}}>
                        <div className="business-desktop-client-box">
                          <div className="business-desktop-client-box-text">
                             <h1><span style={{color: '#2b4162'}}>Expert services</span> <span style={{color: '#3386f4'}}>for your business</span></h1><br />
                              Running and growing your business is your and your employee’s primary goal not taking care of broken phones and laptops. We offer you customized solutions depending on the size of the organization and needs. 
                          </div>
                        </div>
                      </div>
                    </Col>
                  </div>
                </OwlCarousel>
              </Col>
            <Row className="business-how-it-works">
              <Col md={12} xs={12}>
                <h1 className="business-how-works-head">How it works</h1>
                <p className="business-how-it-works-text">Schedule a pickup, walk in to the nearest store or call your personal iTechie to where you are.<br />
                </p>
              </Col>
            </Row>

            <Row className="business-client-reviews">
              <Col sm={12} xs={12}>
                <h1 className="business-how-works-head">Client reviews</h1>
                <p className="business-how-it-works-text">We serve at least 23 different business houses and this is what they have to say about us.</p>
              </Col>
              <Col sm={12} xs={12}>
                <div className="business-desktop-client-reviews">
                  <Row>
                    <OwlCarousel className="owl-carousel owl-theme" options={options} events={events} >
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container">
                            <div className="business-desktop-client-image"/>
                            <div className="business-desktop-client-box">
                              <p className="business-desktop-client-box-text">We serve at least 23 different business houses and this is what they have to...</p>
                            </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container">
                            <div className="business-desktop-client-image"/>
                            <div className="business-desktop-client-box">
                              <p className="business-desktop-client-box-text">We serve at least 23 different business houses and this is what they have to...</p>
                            </div>
                          </div>
                        </Col>
                      </div>
                      <div>
                        <Col sm={12} xs={12}>
                          <div className="business-client-review-container">
                            <div className="business-desktop-client-image"/>
                            <div className="business-desktop-client-box">
                              <p className="business-desktop-client-box-text">We serve at least 23 different business houses and this is what they have to...</p>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </OwlCarousel>
                  </Row>
                </div>
              </Col>
            </Row>
            <br />

            <Row className="business-feature-pricing">
              <Col sm={12} xs={12}>
                <div className="business-feature-pricing-head-container">
                  <h1 className="business-feature-head">Features & Pricing</h1>
                  <p className="business-feature-head-text">Contact us with your choice to know more.</p>
                </div>
              </Col>
              <Col sm={12} xs={12}>
                <div className="business-feature-pricing-container">
                  <Row>
                    <Col sm={4} xs={12}>
                      <div className="business-feature-pricing-container-data">
                        <Row>
                          <Col sm={12} xs={12}>
                            <div className="Startup-header-business" style={{marginBottom: '-10px'}}>
                              <p className="business-feature-pricing-container-header">STARTUP</p>
                              <img src={require("../imgs/Business1.png")} style={{maxWidth: '50px', maxHeight: '50px', position: 'absolute', right: '0', top: '-15px'}}/>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} xs={12}>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Discounted prices for company and team </p>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Scheduled pickup drop facility </p>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Data Security</p>
                            <hr className="iservice-hr-line"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} xs={12}>
                            <p className="business-choose-plan"><a id="startup" style={{fontWeight: '700', cursor: 'pointer'}} onClick={this.handleSetBusinessPlan}>CHOOSE THIS PLAN</a></p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="business-feature-pricing-container-data">
                        <Row>
                          <Col sm={12} xs={12}>
                            <div className="Startup-header-business" style={{marginBottom: '-10px'}}>
                              <p className="business-feature-pricing-container-header">SMALL BUSINESS</p>
                              <img src={require("../imgs/Business2.png")} style={{maxWidth: '50px', maxHeight: '50px', position: 'absolute', right: '0', top: '-15px'}}/>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} xs={12}>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Startup plan plus…</p>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Preferential pricing for company and team</p>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Onsite Services for all applicable issues</p>
                            <hr className="iservice-hr-line"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} xs={12}>
                            <p className="business-choose-plan" style={{paddingTop: '1px', fontWeight: 'bold'}}><a id="smallbusiness" style={{fontWeight: '700', cursor: 'pointer'}} onClick={this.handleSetBusinessPlan}>CHOOSE THIS PLAN</a></p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col sm={4} xs={12}>
                      <div className="business-feature-pricing-container-data">
                        <Row>
                          <Col sm={12} xs={12}>
                            <div className="Startup-header-business" style={{marginBottom: '-10px'}}>
                              <p className="business-feature-pricing-container-header">ENTERPRISE</p>
                              <img src={require("../imgs/Business3.png")} style={{maxWidth: '50px', maxHeight: '50px', position: 'absolute', right: '0', top: '-15px'}}/>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} xs={12}>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">SLAs</p>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Credit invoicing</p>
                            <hr className="iservice-hr-line"/>
                            <p className="business-feature-pricing-container-text">Nation-wide support and more…</p>
                            <hr className="iservice-hr-line"/>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} xs={12}>
                            <p className="business-choose-plan" style={{paddingTop: '18px', fontWeight: 'bold'}}><a id="enterprise" style={{fontWeight: '700', cursor: 'pointer'}} onClick={this.handleSetBusinessPlan}>CHOOSE THIS PLAN</a></p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={12} xs={12}>
                <div className="business-enquire-btn-container">
                  <FlatButton id="enquire-btn-mobile" label="ENQUIRE" style={{color: '#fff', fontSize: '20px !important', fontWeight: '600', cursor: 'pointer !important'}} className="floating-btn-bot-signup desktop hide-on-desktop" onClick={this.handleOpenEnquire}/>
                  <FlatButton id="enquire-btn-desktop" label="ENQUIRE" style={{color: '#fff', fontSize: '20px !important', fontWeight: '600', cursor: 'pointer !important'}} className="floating-btn-desktop-signup mobile hide-on-mobile" onClick={this.handleOpenEnquire}/>
                </div>
              </Col>
            </Row>
          </Container>
          <FullscreenDialog
            open={this.state.openEnquire}
            title={'ENQUIRE'}
            actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleEnquireMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
            titleStyle={{
              fontFamily: 'Montserrat',
              letterSpacing: '1pt',
              fontWeight: '200',
              color: '#eb6b62',
              textAlign: 'center',
              padding: '0',
              margin: '0',
              lineHeight: '50pt'
            }}
            style={{left: '2%', width: '96vw', height: '98vh', borderRadius: '10px', marginTop: '5px', boxShadow: '0px 0px 0px 50px #3386f4'}}
            containerStyle={{padding: '20px'}}
            appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginBottom: '10px'}}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close Menu" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4" onClick={this.handleEnquireMenuClose}/>
                  </IconButton>
                </Col>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <br/><br/>
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
              <Row>
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <div className="signupDialogText">
                    <p className="signupTextContent" style={{textAlign: 'center'}}>ENQUIRE FOR BUSINESS PARTNERSHIPS OR VENDORSHIP FOR TECHNICAL ASSISTANCE WITH YOUR BUSINESS</p>
                  </div>
                </Col>
                <Col sm={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" placeholder="Email" hintStyle={{color: '#9b9b9b', zIndex: '9999', paddingLeft: '15px'}} id="email" onChange={this.handleEmailUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
                <Col sm={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" placeholder="Mobile Number" hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} id="phone" onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
                <Col sm={4} xs={12}/>
              </Row>
              <Row>
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" placeholder="Company" placeholderStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} id="company" onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement}/>
                  </div>
                </Col>
                <Col sm={4} xs={12}/>
              </Row>

              <Row>
                <Col sm={4} xs={12}/>
                <Col sm={4} xs={12}>
                  <div className="signupInputArea">
                    <TextField inputStyle={{backgroundColor: '#f0f3f7'}} className="signupintputText enquire-text-area" placeholder="Write your enquiry here…" id="enquiry" placeholderStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px', paddingTop: '10px', top: '0', height: '0px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleTextAreaElement} onBlur={this.handleTextAreaBlurElement} multiLine rows={5}/>
                  </div>
                </Col>
                <Col sm={4} xs={12}/>
              </Row>
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
            </Container>
          </FullscreenDialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

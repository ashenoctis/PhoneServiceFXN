import React, {Component} from 'react';
import {Helmet} from "react-helmet";

import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import DocumentMeta from 'react-document-meta';


const fb = require("../imgs/Facebook_Color hover.png");
const insta = require("../imgs/Instagram_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");
const youtube = require("../imgs/Youtube_Color hover.png");




export class Cable extends Component {
  componentDidMount(){
    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  }
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(e) {
    e.target.src = e.target.src.replace("normal", "hover");
  }

  handleMouseOut(e) {
    e.target.src = e.target.src.replace("hover", "normal");
  }

  render() {
    const meta = {
      title: 'Buy Cable Protectors Online | iService',
      description: 'Buy Cable Protectors for Apple chargers. Apple cables are prone to breaking easily. Get cable protectors starting from Rs. 99 for a pack of 2.',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'cable protectors for apple chargers, apple charger accessories, apple accessories, iphone charger protectors'
        }
      }
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div>
            <Col sm={12} xs={12} style={{padding: '0px'}}>
              <div className="business-container cableimage" style={{backgroundImage: "url(http://www.iservice.co.in/wp-content/uploads/2017/08/iservice_banner_2_JUL17-8.png)", backgroundSize: '100% auto', backgroundRepeat: 'no-repeat'}}>
              </div>
            </Col>
            <Col sm={12} xs={12}>
              <div className="cableheader">
                <Row>
                  <Col sm={12} xs={12}>
                    <div>
                      <h1><center>Protect those Expensive Cables With  <span className="aboutus-story">Cable Protectors From iService</span></center></h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Container>
            <Col sm={2} md={1} />
            <Col className= "cablerow" sm={3} md={3}>
              <Col  md={12} xs={12}>
               <div className="aboutus-timeline">
                <center><img style={{marginTop: '10px',width:'150px'}} className="aboutus-image" src='https://i2.wp.com/www.iservice.co.in/wp-content/uploads/2017/07/icons-01-01.png?zoom=2&w=1080'/></center>

              </div>
              </Col>
              <Col md={12} xs={12}  style={{paddingBottom: '60px'}}>
                <center><p className="">Cables are susceptible to <strong>breaking easily</strong>.</p></center>
              </Col>
            </Col>
            <Col sm={3} md={3}>
              <Col md={12} xs={12}>
               <div className="aboutus-timeline">
                <center><img style={{marginTop: '10px',width:'150px'}} className="aboutus-image" src='https://i0.wp.com/www.iservice.co.in/wp-content/uploads/2017/07/icons-02-01.png?w=1080'/></center>

              </div>
              </Col>
              <Col md={12} xs={12}  style={{paddingBottom: '60px'}}>
               <center> <p className="">Joints are not built for<strong> twists or bends</strong>.</p></center>
              </Col>
            </Col>
            <Col sm={3} md={3}>
              <Col md={12} xs={12}>
               <div className="aboutus-timeline">
                <center><img style={{marginTop: '10px',width:'150px'}} className="aboutus-image" src='https://i1.wp.com/www.iservice.co.in/wp-content/uploads/2017/07/icons-03.png?w=1080'/></center>

              </div>
              </Col>
              <Col md={12} xs={12}  style={{paddingBottom: '60px'}}>
                <center><p className="">The Layers of the Protectors<strong>absorbs impact preventing damage</strong>.</p></center>
              </Col>
            </Col>
        </Container>
     




          <Container className="aboutus-section-3">

            <Col md={2} xs={12} />

            <Col md={8} xs={12}>
          <br/> 

              <center><p>We heard you and we understand the need for protecting those expensive cables of yours. Hence, we offer you a solution to provide protection across all your cables whether it's for <strong>you, your friends, family or even your entire office</strong>. We've got you covered!</p></center>

                           <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton  href="https://www.instamojo.com/iservice/cable-protectors-by-iservice/"  backgroundColor="#3386f4" hoverColor="#3386f4" label={'Buy Cable Protectors'}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>
              <script src="https://js.instamojo.com/v1/button.js"></script>

              
            </Col>
          </Container>
          <Container className="aboutus-section-4">
            <Row>
              <Col sm={4} xs={12}/>
              <Col sm={4} xs={12}>
                <Row>
                  <Col xs={12} sm={12}>
                    <p className="aboutus-follow-me">FOLLOW US</p>
                  </Col>
                  <Col xs={6} sm={6} className="text-align-center">
                    <a href="https://www.facebook.com/iServiceIndia"><img style={{width: '45px'}} className="aboutus-follow-images" src={require("../imgs/Facebook_Color normal.png")} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/></a>
                  </Col>
                  <Col xs={6} sm={6} className="text-align-center">
                    <a href="https://twitter.com/iserviceindia"><img style={{width: '62px'}} className="aboutus-follow-images" src={require("../imgs/Twitter_Color normal.png")} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/></a>
                  </Col>
           
                </Row>
              </Col>
              <Col sm={4} xs={12}/>
            </Row>
          </Container>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

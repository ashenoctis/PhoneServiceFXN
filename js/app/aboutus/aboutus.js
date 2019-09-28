import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';

const fb = require("../imgs/Facebook_Color hover.png");
const insta = require("../imgs/Instagram_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");
const youtube = require("../imgs/Youtube_Color hover.png");

export class Aboutus extends Component {
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
      title: 'About | iService',
      description: "iService is a name that goes synonym with Apple Service and Multi-brand gadget repairs. Read more about us and how we became India's leading gadget service center.",
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'mobile phone repair, mobile repair, laptop repair, Professional Smartphone Repair'
        }
      }
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div>
          <Container className="aboutus-section-1">
            <Row>
              <Col sm={4} xs={12}/>
              <Col sm={4} xs={12}>
                <div className="aboutus-container">
                  <h1 className="aboutus-container-h1"><span className="aboutus-wefix-everything">We fix everything,</span><br/> at your convenience</h1>
                  <p className="aboutus-wefix-content">Schedule a pickup, walk in to the nearest store or call your personal iTechie to where you are.</p>
                  <div className="aboutus-icons" style={{maxWidth: '100%'}}>
                    <img className="aboutus-icon-image" src={require("../imgs/abouthero.png")}/>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={12}/>
            </Row>
          </Container>
          
            <Col sm={4} xs={12}/>
            <Col sm={4} xs={12}>
              <div className="aboutus-container">
                <Row>
                  <Col sm={12} xs={12}>
                    <div className="aboutus-story-container">
                      <h1>The iService <span className="aboutus-story">story</span></h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={4} xs={12}/>
            <Container fluid className="" style={{paddingBottom: '20px'}}>
            <br /> 
            <br /> 
            <br /> 
            <Col sm={8} md={4}>
              <Col md={8} xs={6}>
               <div className="aboutus-timeline">
                <h1 className="aboutus-time">2013</h1>
                Founded by Ankit, a techie at heart, an engineer by education and an entrepreneur by profession.
              </div>
              </Col>
              <Col md={4} xs={6}  style={{paddingBottom: '60px'}}>
                <img style={{marginTop: '10px'}} className="aboutus-image" src={require("../imgs/story1.png")}/>
              </Col>
            </Col>
            <Col sm={8} md={4}>
              <Col md={8} xs={6}>
               <div className="aboutus-timeline">
                <h1 className="aboutus-time">2014</h1>
               We are the goto brand for repairs and services of Apple Products in Bangalore and have presence in 2 locations.
              </div>
              </Col>
              <Col md={4} xs={6}  style={{paddingBottom: '60px'}}>
                <img className="aboutus-image aboutus-2014-img" src={require("../imgs/story_2.png")}/>
              </Col>
            </Col>
            <Col sm={8} md={4}>
              <Col md={8} xs={6}>
               <div className="aboutus-timeline">
                <h1 className="aboutus-time">2015</h1>
                Pratheek joined as co-founder and head of Tech. Another store was opened up.
              </div>
              </Col>
              <Col md={4} xs={6}  style={{paddingBottom: '60px'}}>
                <img className="aboutus-image aboutus-2014-img" src={require("../imgs/story_3.png")}/>
              </Col>
            </Col>
            <Col sm={2} md={2}/>
            <Col sm={8} md={4}>
              <Col md={8} xs={6}>
               <div className="aboutus-timeline">
                <h1 className="aboutus-time">2016</h1>
                Spread out to Android devices and the heavy demand Delhi market.
              </div>
              </Col>
              <Col md={4} xs={6}  style={{paddingBottom: '60px'}}>
                <img className="aboutus-image aboutus-2014-img" src={require("../imgs/story_2.png")}/>
              </Col>
            </Col>
            <Col sm={8} md={4}>
              <Col md={8} xs={6}>
               <div className="aboutus-timeline">
                <h1 className="aboutus-time">2017</h1>
                Prominent investors Blume Ventures decide to solve the problems of great after sales service at scale with us.
              </div>
              </Col>
              <Col md={4} xs={6}  style={{paddingBottom: '60px'}}>
                <img className="aboutus-image aboutus-2014-img" src={require("../imgs/story_3.png")}/>
              </Col>
            </Col>
            <Col sm={2} md={2}/>
            <br / >
            <br / >
            
        </Container>
     





        
            <Row  style={{background: '#d6edff'}} >
                  <Col sm={12} lg={3} md={3} />

                  <Col sm={12} lg={3} md={3}>
                  <h1 className="text-align-center aboutus-figures">35,000</h1>
                  <p className="text-align-center" style={{color: '#0067e8'}}>iService customers India-wide</p>
                  <hr className="iservice-hr"/>
                </Col>

                  <Col sm={12} lg={3} md={3}>
                    <h1 className="text-align-center aboutus-figures">55,000</h1>
                    <p className="text-align-center" style={{color: '#0067e8'}}>devices repaired</p>
                    <hr className="iservice-hr"/>
                  </Col>
            </Row>
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

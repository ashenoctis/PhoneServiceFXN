import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import DocumentMeta from 'react-document-meta';

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
import $ from 'jquery';

const cookies = new Cookies();
let user_status = null;
const scrollToElement = require('scroll-to-element');
const primaryColorFinal = '#3386f4';
let orders = [];
let slides = null;
let issueChecks = '';
const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  },
  deviceType: {
    backgroundColor: '#f9f9f9',
    minWidth: '100%',
    minHeight: '430px',
    paddingBottom: '50px'
  },
};





document.title = '360° iPad Repair Services in Bangalore and Delhi - iService';


export class Ipadpage extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.state = {
      names: [],
      image: []
    };
  }

  componentDidMount () {
    $('.mview').hide()
    $('.eview').hide()
    $('.colorlist').show()
    $('.cartviewname').hide()

  var selectedBrand = "Apple";
  var devicetypered = "Mobile Phone";

  document.title = '360° iPad Repair Services in Bangalore and Delhi - iService';
    $('.brandnameappen').append("iPhone")
    axios.post(apilink+'/website/modelimage/',{
        "brand" :    'Apple',
        "device" : 'Mobile Phone'
      }).then(response => {
      issueChecks = response.data.map(result => {
        var names=result.split(',')
        var redirecturl = names[0].split(' ').join('-');
        var urlredirect = "/Apple/Mobile-Phone/"+redirecturl+"/";
        return (
          <Col lg={3} md={4} xs={12} className="getclickbrand" data-attr={names[0]} onTouchTap={this.handleDevice}> 
            <div className="brandname modelnamefont">
              <Col className="try modelnamewidth" lg={3} md={4} xs={12}>
                <div  classname="brandnameapi" style={{textAlign: 'center'}}>
                  {names[0]}
              </div>
              <center>
                <div className="imagediv">
                  <NavLink to ={urlredirect} >
                    <img src={names[1]} width="150" />
                  </NavLink>
                </div>
                </center>
              </Col>
            </div>
          </Col>
        );
      });
      this.forceUpdate();
      var monkeyList = new List('test-list', {
        valueNames: ['brandname'],
        page: 8,
        pagination: true
      });

       $(".getclickbrand").on( "click", function() {
          localStorage.setItem('brand',$(this).attr('data-attr'));
          cookies.set('device-brand', $(this).attr('data-attr'),{path: '/'});
      });
    });

  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="ContainerHeight" >
           <Row>
              <Col sm={11} xs={11} lg={12}/>
              <Col sm={11} xs={11} lg={12}>
                <div className="newpartners-container">
                   <div className="newpartners-container">
                  <h1 className="new-partner-feature-heading brand brandlist">
                    <center>
                    We Repair & Service the following <div className="brandnameappen" style={{display: 'initial'}}></div> Models:
                    </center>
                    <br />
                    <center>
                    <label className= "searchbrand" for="usr">Search model names:</label>
                      </center>
                    <div id="test-list">
                    <center>
                      <input type="text" className="search"  id="usr" />
                      <br />
                      <ul className="pagination"></ul>
                    </center>
                      <div className="list">
                          {issueChecks}
                      </div>
                    </div>
                  </h1>
                  <Row>
                   <center><div id="apple">
                   </div></center>
                  </Row>
                </div>
                  <Row>
                    <h3> 
                    <center>iService
                    </center>
                    </h3>

                    <center>
                      <div className="brandnameappen" style={{display: 'inline'}}></div> phone repair service in India. Available in Bangalore and Delhi. ✓ Screen Replacement and Repair at ✓ Reasonable Cost. Contact us for <div className="brandnameappen" style={{display: 'inline'}}> </div> Repair and service. Iservice can do LCD Display Repair, Glass Replacement, Touchscreen Repair, Speaker Repair, Microphone Repair, Network Repair, Water Damage Repair, Charging Repair, and Battery
                    </center>
                  <br />
                  <br />
                  <br />


                   <center><div id="apple">
                   </div></center>
                  </Row>
                </div>
              </Col>
            </Row>
        </div>
      </MuiThemeProvider> 
    );
  }
}


 

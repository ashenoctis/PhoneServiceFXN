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





var APITitle, MetaKeyword,Metadescription;



export class Ipadpage extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.state = {
      names: [],
      image: [],
      APITitle: '',
      MetaKeyword: '',
      Metadescription: '',
    };
  }

  componentDidMount () {
    $('.mview').hide()
    $('.eview').hide()
    $('.colorlist').show()
    $('.cartviewname').hide()

  var selectedBrand = "Apple";
  var devicetypered = "Tablet Computer";
    var parts = window.location.href;

  axios.post('https://crm.iservice.co.in/website/tag/',{
      "url" :    parts
      })
    .then(response => {
      console.log(response.data.title)
      console.log(response.data.meta)
      console.log(response.data.description)


      APITitle =   response.data.title;
      MetaKeyword =   response.data.keywords;
      Metadescription =   response.data.description;

      this.setState({
        APITitle: APITitle,
        MetaKeyword:  MetaKeyword,
        Metadescription: Metadescription

      });
    });

    var lastSegment = parts.split('/'); 
    $('.brandnameappen').append(lastSegment[3])
    axios.post(apilink+'/website/modelimage/',{
        "brand" :    'Apple',
        "device" : 'Tablet Computer'
      }).then(response => {
      issueChecks = response.data.map(result => {
        var names=result.split(',')
        var redirecturl = names[0].split(' ').join('-');
        var urlredirect = "/Apple/Tablet-Computer/"+redirecturl+"/";
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
    const meta = {
      title:  APITitle,
      description: Metadescription,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: MetaKeyword
        }
      }
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div className="ContainerHeight" >
           <Row>
              <Col sm={11} xs={11} lg={12}/>
              <Col sm={11} xs={11} lg={12}>
                <div className="newpartners-container">
                   <div className="newpartners-container">
                  <h1 className="new-partner-feature-heading brand brandlist">
                    <center>
                    We Repair & Service the following iPad Models:
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
                      iPad repair services offered at iService <div className="brandnameappen" style={{display: 'inline'}}></div> is popular for the quality of service, service warranty and the affordable prices. iService can do LCD Display Repair, Glass Replacement, Touchscreen Repair, Speaker Repair, Microphone Repair, Network Repair, Water Damage Repair, Charging Repair, Battery Replacement etc. Searching for the best iPad repair center near you? Visit us at iService <div className="brandnameappen" style={{display: 'inline'}}></div> or schedule a doorstep service. 
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
      </div>
    );
  }
}


 

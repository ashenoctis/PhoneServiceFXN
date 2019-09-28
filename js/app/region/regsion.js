import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import SelectField from 'material-ui/SelectField';

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
let issueChecks = '';

let slides = null;
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


const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};



    var parts = window.location.href;
    var lastSegment = parts.split('/'); 
      if(lastSegment[3] == 'devices' ){
    document.title =  'All Brands';
    }




export class Region extends Component {


  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.state = {
      names: [],
      newname: []
    };
  }

  componentDidMount(){
    var parts = window.location.href;
    localStorage.setItem('ad_url',parts);
    cookies.set('ad_url', parts);
    localStorage.setItem('ad_url_landing',parts);
    


    var lastSegment = parts.split('/'); 
    $('.mview').hide()
    $('.eview').hide()


    axios.get(apilink+'/website/location/').then(response => {
      issueChecks = response.data.map(result => {
        var names=result.split(',')
        var urlredirect = "/"+names[0]+"/Devices/";
        return (
          <Col lg={3} md={4} xs={12} className="getclickbrand" data-attr={names[0]} onTouchTap={this.handleDevice}> 
            <p className="brandname">
              <Col className="try" lg={3} md={4} xs={12} style={{width:'100%'}}>
             
              <center>
                  <NavLink to ={urlredirect} >
                  <div className="imagediv card card-5">
                    {names[0]}
                    <br />
                    {names[1]}
                  </div>
                  </NavLink>
                </center>
              </Col>
            </p>
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
          localStorage.setItem('location',$(this).attr('data-attr'));
          cookies.set('location', $(this).attr('data-attr'),{path: '/'});
      });
    });


  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="ContainerHeight" >
           <Row>
              <Col sm={1} xs={1} lg={12}/>
              <Col sm={11} xs={11} lg={12}>
                <div className="newpartners-container">
                  <h1 className="new-partner-feature-heading brand brandlist">
                    <center>
                    We Repair & Service the following  brandsdsfds:
                    </center>
                    <br />
                    <center>
                    <label className= "searchbrand" for="usr">Search brand name:</label>
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

                </div>
              </Col>
            </Row>
            <Row>
            <Col sm={1} xs={1} lg={12}/>
              <Col sm={11} xs={11} lg={12}>
                <div className="newpartners-container">


             <center><div id="apple">
             </div>
                  <h3> <center>
                  Any Device, Any Issue, No Problemo!
                   </center>
                  </h3>
                  <p>We can come to you and sort your device out within a few hours at your home or office if you don't want to wade through all that traffic.
                  Or just walk-in to our nearest store and get your device repaired immediately.
                  Most services are backed by a whole 1 Year of iService Warranty!</p>

                <br />
                <br />
                <br />

                <h3> 
                  <center>
                    iService
                  </center>
                </h3>
                <p>
                Repair your smartphones & laptops at iService - India's top gadget repair service center located in Bangalore and Delhi. Select your brand and get quick service solutions.
                
                </p>
             </center>
             </div>
             </Col>
            </Row>
        </div>
      </MuiThemeProvider> 
    );
  }
}


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
import DocumentMeta from 'react-document-meta';




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
};


const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};




    var parts = window.location.href;
    var lastSegment = parts.split('/'); 
    var selectedBrand =lastSegment[4];
    var APITitle, MetaKeyword,Metadescription;







      
        // Handler for .ready() called.



export class SeoSelect extends Component {

  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.state = {
      names: [],
      newname: [],
      APITitle: '',
      MetaKeyword: '',
      Metadescription: '',


    };
  }

  componentDidMount(){

    $('.eview').show()
    $('.mview').show()

    var parts = window.location.href;
    localStorage.setItem('ad_url',parts);
    localStorage.setItem('ad_url_landing',parts);
    cookies.set('ad_url', parts);
    var location = cookies.get('location');

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
      // alert(lastSegment.length)
      if(lastSegment.length>5){
        var selectedBrand =lastSegment[4];
          // alert("hey"+selectedBrand)
      localStorage.setItem('selectedBrand', selectedBrand);
      }
      else{ 
        // alert("else")
        localStorage.setItem("selectedBrand", "");
      }
      var parts = window.location.href;
      var lastSegment = parts.split('/'); 
      var selectedBrand =lastSegment[4];
      // document.title = selectedBrand + ' Phone Repair Service Bangalore & Delhi | iService';


    $('.modelnameheader').append(selectedBrand)

    axios.post(apilink+'/website/deviceimage/',{
      "brand" :    selectedBrand
      })
    .then(response => {
      var names = Object.keys(response.data)
      var val=  Object.values(response.data)

      this.setState({ names })

      var newname= [];
      for(var i=0;i<response.data.length;i++){
        var names=response.data[i].split(',')
        // alert(names[0 ])
        var editedname =names[0].split(' ').join('-');
        newname.push("/"+location+"/"+selectedBrand+"/"+editedname+"/");
      }
      this.setState({ newname })

      for(var i=0;i<response.data.length;i++){
        var names=response.data[i].split(',')
        $('#'+i).html(names[0]);
        $('.'+i).attr("src", names[1]);
      }

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
              <Col sm={12} xs={12}>
                <div className="newpartners-container">
                  <h1 className="new-partner-feature-heading brand">
                  <center>
                  Please select your devicesss  :
                  </center>
                  <br />
                  <br />

                  <div id="test-list-1">
                    <div className="list">
                       { this.state.newname.map((newname, i) => (
                          <div>
                            <p className="devicename">
                              <Col className="try " lg={3} md={4} xs={12} style={{paddingLeft: '55px'}}>
                                <div id={i} classname="brandnameapi center-block">
                              
                              </div>
                                <NavLink to ={newname} ><img  className={i} width="150" />
                               
                                </NavLink>
                              </Col>
                            </p>
                          </div>
                          ))}
                    </div>
                  </div>


        
                  </h1>
                  <Row>
                   <center><div id="apple">
                   </div></center>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
            <Col sm={1} xs={1} lg={12}/>
              <Col sm={11} xs={11} lg={12}>
                <div className="newpartners-container">


             <center><div id="apple">
             </div>


                  <h3> 
                   <center>iService 
                   </center>
                  </h3>
                   <p>
                    <center> 
                      <div className="modelnameheader" style={{display: 'inline'}}></div> phone repair service in India. Available in Bangalore and Delhi. ✓ Screen Replacement and Repair at ✓ Reasonable Cost. Contact us for <div className="modelnameheader" style={{display: 'inline'}}> </div> Repair and service. Iservice can do LCD Display Repair, Glass Replacement, Touchscreen Repair, Speaker Repair, Microphone Repair, Network Repair, Water Damage Repair, Charging Repair, and Battery.
                Repair your smartphones & laptops at iService - India's top gadget repair service center located in Bangalore and Delhi. Select your brand and get quick service solutions.
                      
                   </center>
                   
                   </p>
                   <br />
                  <br />
                  <br />

                   <h3>
                  <center>
                  Any Device, Any Issue, No Problemo!
                   </center>
                  </h3>
                  <p>We can come to you and sort your device out within a few hours at your home or office if you don't want to wade through all that traffic.
                  Or just walk-in to our nearest store and get your device repaired immediately.
                  Most services are backed by a whole 1 Year of iService Warranty!</p>

             
                <br />
                <br />
                <br />
             </center>
             </div>
             </Col>
            </Row>
            
        </div>
      </MuiThemeProvider> 
      </div>
    );
  }
}

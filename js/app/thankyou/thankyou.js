
import React, {Component} from 'react';
import {Helmet} from "react-helmet";

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






export class Thankyoupage extends Component {

  componentDidMount(){
    $('.pagenotfounds').hide()
    $('.eview').hide()
    $('.mview').hide()

  }
  render() {
     const meta = {
      title: 'Thank you | iService',
      description: "Any device, Any issue, No problem; iService is here to help! Track your device repair status and get real time updates. Fast & Timely service is our promise!",
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div >
          <Container>
            <Row>
                <center><div className="aboutus-container">
                  <h1 className="aboutus-container-h1"><center>We have received your payment</center></h1>
                   <p className="aboutus-wefix-content">
                  <center>Thank you for trusting iService.<br /></center>
                  </p>
                         <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton  href="/" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Go to HomePage'}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
                </center>
            </Row>
            <p  style={{fontSize: '12px'}}>You will get a payment confirmation via email and SMS for your succesful payment. If the transaction is fails but you still get debited, don't worry, that amount shall be reversed to you automatically.</p>

          </Container>
        </div>
      </MuiThemeProvider> 
      </div>
    );
  }
}

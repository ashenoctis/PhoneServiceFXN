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





export class Pay extends Component {

  componentDidMount(){
    $('.pagenotfounds').hide()
    $('.eview').hide()
    $('.mview').hide()
  }
  render() {
    const meta = {
      title: 'Make payment | iService',
      description: "Thanks for availing our services. Enter here to make the payments. We accept all major net banking, payment wallets, debit and credit cards.",
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
       
          <Container>
            <Row>
                <center><div className="aboutus-container">
                  <h1 className="aboutus-container-h1"><center>Pay iService in 3 simple steps</center></h1>
                   <p className="aboutus-wefix-content">
                  <center>1.Click the button below and Enter your details <br /></center>
                  <center>2.Enter the Amount and Job No. / Device Details<br /></center>
                  <center>3.Select your preferred payment mode & pay!<br /></center>
                  </p>
                  <div style={{textAlign: 'center', display : 'none'}}>
                    <FlatButton  href="https://www.instamojo.com/@iservice/" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Pay iService with instamojo'}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>


                  <div style={{textAlign: 'center', display : 'inline-block', marginLeft: '10px'}}>
                    <FlatButton  href="https://iservice.co.in/tez" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Pay iService  '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height">
                      <img  src='https://iservice.co.in/Google-Tez-logo' style={{width: '50px', float: 'right'}}/>
                    
                    </FlatButton>
                    <a href="https://iservice.co.in/tez" >
                      <img  src='https://iservice.co.in/tez_logo' style={{width: '155px', float: 'right'}}/>
                    </a>
                  </div>
                    <script src="https://js.instamojo.com/v1/button.js"></script>
                  <br />
                  <br />
                  <br />
                </div>
                </center>
            </Row>
            <p  style={{fontSize: '12px'}}>You will get a payment confirmation via email and SMS for your succesful payment. If the transaction is fails but you still get debited, don't worry, that amount shall be reversed to you automatically.</p>

          </Container>
      </MuiThemeProvider> 
      </div>
    );
  }
}

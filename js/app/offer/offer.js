
     



import React, {Component} from 'react';
import {Container, Row, Col, Visible} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DownIcon from 'material-ui/svg-icons/navigation/expand-more';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ErrorIcon from 'material-ui/svg-icons/content/clear';
import UpIcon from 'material-ui/svg-icons/navigation/expand-less';
import Accordion from 'react-responsive-accordion';
import axios from 'axios';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import keyIndex from 'react-key-index';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CircularProgress from 'material-ui/CircularProgress';

import Checkbox from 'material-ui/Checkbox';

document.title = 'Onyx Shield offer T&C';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const geolocator = require('geolocator');
let products = [];

import Cookies from 'universal-cookie';

const messageStyle = {
  color: '#000000',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};
const primaryColor = '#3386f4';
const hoverColor = '#3E8CF8';
const buttonHeight = '40px';
let deviceModelResponse = [];
let colorPallete = [];
let issueChecks = '';
let deviceChecks = '';
let brandCounter = 0;
const finalColor = [];
const cookies = new Cookies();
let modelCounter = 0;
let counterIssue = 0;
const relatedIds = [];
const relatedProds = [];
const relatedPrices = [];
const deviceOptions = [];
const issuelist = [];



export class Buyonegetone extends Component {
  
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.state = {
      names: [],
      newname: [],
      newname1: []
    };
  }

  componentDidMount(){
    document.title = 'Onyx Shield offer T&C';

    $('.mview').hide()
    $('.eview').hide()
    $('.colorlist').show()
    $('.cartviewname').hide()


  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="ContainerHeight" >
          <Row>
            
            <Col lg={1} md={1} xs={1} />
            <Col lg={5} md={5}  xs={11}>
            <h1>
              <center >
                <div className="aboutus-container">
                TERMS AND CONDITIONS 
                </div>
              </center>
            </h1>
            <ol className="termsheader">
              <li>
                <p >Doorstep service is not available for this. </p>
              </li>
              <li>
                <p >Onyx Shield once applied can be removed at the request of a customer. But the amount paid will not be refunded. </p>
              </li>
                <li>
                <p > For iPhone 6+, 7+, 8+ the Polymer Layer does not cover about 2.5mm on each side of the leading edges. 
                  <br />
                  The back-case forms an embankment around the phone and protects the bezel and leading edges. 
                 </p>
              </li>
                <li>
                <p >The prices displayed above are for the combo pack. Parts of the combo cannot be sold individually at different prices. </p>
              </li>
                <li>
                <p >This product does not come with a warranty.</p>
              </li>
                <li>
                <p >All tests have been performed under controlled environments. We do not guarantee the physical safety of your phone. </p>
              </li>
                <li>
                <p >A maximum of 1 combo can be booked with the same phone number. </p>
              </li>
                <li>
                <p >Pickup and drop service is not applicable on this. 
</p>
              </li>
               
            </ol>
            </Col>
            <Col lg={6} md={6}  xs={11}>
            <h1>
              <center >
                <div className="aboutus-container">
                 Get your Onyx shield here.
                 <br />
                
                </div>
              </center>
            </h1>
         
              <div style={{width: '100%', textAlign: 'center'}}>
              <FlatButton  href="https://app.iservice.co.in/onyx" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Get Onyx Shield'}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
              </div>
            </Col>


          </Row>
        </div>
      </MuiThemeProvider> 
    );
  }
}
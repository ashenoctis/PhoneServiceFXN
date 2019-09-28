import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import $ from 'jquery';
import {Container, Row, Col, Hidden, Visible} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import MailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import Sticky from 'react-stickynode';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import TextField from 'material-ui/TextField';
import Cookies from 'universal-cookie';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import DocumentMeta from 'react-document-meta';

const cookies = new Cookies();

let counter = 0;
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


export class Marketing extends Component {


  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.handleOpenSignin = this.handleOpenSignin.bind(this);
      this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleTimeChange = this.handleTimeChange.bind(this);

      this.state = {
      names: [],
      newname: [],
      signInOpen: false,
      dateSlots: [],
      deliveryDate : '',
      timeSlots: [],
       deliveryTime: '',

    };
  }

  componentDidMount(){
   
    $('.mview').hide()
    $('.eview').hide()

    axios.get(apilink+'/website/walkin_date/', JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        const allTimes = response.data.map(val => {
    
          return (
            <MenuItem key={counter++} className="menu-item-repair" value={val} primaryText={val}/>
          );
        });
        this.setState({
          dateSlots: allTimes
        });
      })
      .catch(error => {
        console.log(error);
      })

        $("#phone").keypress(function (e) {
         if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg").html("Digits Only").show().fadeOut("slow");
                   return false;
        }
   });



  }


    handleDateChange(e, i, val) {
       console.log(i, val);
       var res = val.split("-");
      axios.get(apilink+'/website/walkin_time/'+res[0], JSON.stringify(axiosConfig))
      .then(response => {
        console.log(response);
        const allTimes = response.data.map(val => {
          return (
            <MenuItem key={counter++} className="menu-item-repair" value={val} primaryText={val}/>
          );
        });
        this.setState({
          timeSlots: allTimes
        });
      })
      .catch(error => {
        console.log(error);
      });


      cookies.set('date', "true", {path: '/'});

      cookies.set('date_slot', val, {path: '/'});
      this.setState({
        deliveryDate: val
      });


           var date = cookies.get('date');
        var time = cookies.get('time');
            if( date =="true" && time=="true"){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
        }
  }


  handleTimeChange(e, i, val) {
    console.log(i, val);
    this.setState({
      deliveryTime: val
    })
    cookies.set('time_slot', val, {path: '/'});
           var date = cookies.get('date');
            var time = cookies.get('time');
            if( date =="true" && time=="true"){
          document.getElementById('desk-btn-dis').classList.add('hide');
          document.getElementById('desk-btn').classList.remove('hide');
        }
  }


  handleOpenSignin() {
    var time = cookies.get('time_slot');
    var date = cookies.get('date_slot')

    var name = $('#name').val();
    var email = $('#email').val(); 
    var phone = $('#phone').val(); 
    var timestring = time + " " + date;
      this.setState({
             signInOpen: true
      });


    if(name == '' || email == '' || phone == ''){
        $('.error').html("please Enter all the fields")
    }
    else{

    axios.post(apilink+'/website/remarketing/',{
      "name" :    name,
      "email" :   email,
      "phone" :   phone,
      "time" :   timestring,
    }).then(response => {
      console.log(response)
      if(response.data.status == "Success"){
        $('#name').val('');
        $('#email').val(''); 
        $('#phone').val(''); 
          this.setState({
             signInOpen: true
          });

       
      }
      
    
    }).catch(error => {
    console.log(error);
    });
  }
    
  }

  handleSigninMenuClose() {
    this.setState({
      signInOpen: false
    });
  }


  render() {
    const meta = {
      title: 'iService - iPhone, iMac, MacBook, Watch Repair and Service Center',
      description: "Repair your smartphones & laptops at iService - India's top gadget repair service center located in Bangalore and Delhi.",
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'multi-brand smartphone repairs, multi-brand laptop repairs, best gadget services bangalore'
        }
      }
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div className="ContainerHeight" >
           <Row>
              <Col xs={12} md={12}>
                <img className="repairhero"src="https://www.iservice.co.in/iphone-repair" />

                <form className="formfill">
                  <h5 className="form-header">Please expect to hear from us within the next hour.</h5>

                  <input className="form_input" id = "name" placeholder="Name" type="text"  required/>
                  <input className="form_input" id = "phone" placeholder="Phone Number  " maxlength="10" required/> &nbsp;<span id="errmsg"></span>
                  <input className="form_input" id = "email" placeholder="Email" required/> 


                  <br/>
                  <SelectField
                    value={this.state.deliveryDate}
                    className="repair-select-field"
                    hintText="Select date..."
                    onChange={this.handleDateChange}
                    style={{ width: '80%', display:'block', margin: 'auto'}}
                    fullWidth
                    >
                    {this.state.dateSlots}
                  </SelectField>

                  <br/>

                  <SelectField
                    value={this.state.deliveryTime}
                    className="repair-select-field"
                    hintText="Select time..."
                    onChange={this.handleTimeChange}
                    style={{ width: '80%', display:'block', margin: 'auto'}}
                    fullWidth
                    >
                    {this.state.timeSlots}
                  </SelectField>


                  <div style={{width: '100%', textAlign: 'center'}}>
                    <FlatButton  onClick={this.handleOpenSignin}  backgroundColor="#3386f4" hoverColor="#3386f4" label={'Submit '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                 </div>
                  <div style={{width: '100%', textAlign: 'center'}}>
                  <center className="error" style={{color: 'red'}}></center>
                  </div>

                </form>
              </Col >
            </Row>

          <Dialog
            open={this.state.signInOpen}
            actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleSigninMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
            appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginBottom: '10px'}}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row className="closebutton">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4"  className= "modalsignin" onClick={this.handleSigninMenuClose}/>
                  </IconButton>
                </Col>
                <Col xs={12} style={{textAlign: 'center'}}>
                </Col>
              </Row>
              <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                    Success
                  </h1>
                </Col>
              </Row>
              <br/>
              <br/>
              <br/>


            </Container>
            <Container fluid>
              <Row>
                  <center>
                  <Container>
                    Thankyou, we will get back to you shortly!
                  </Container>
                  </center>
              </Row>
            </Container>
          </Dialog>


        </div>
      </MuiThemeProvider> 
      </div>
    );
  }
}

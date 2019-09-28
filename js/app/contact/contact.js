import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchIcon from 'material-ui/svg-icons/action/search';
import DownIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import {AppHeader} from './../headers/appheader';
import {Repair} from './../repairnew/repairnew';
import AutoComplete from 'material-ui/AutoComplete';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Snackbar from 'material-ui/Snackbar';
import Moment from 'react-moment';
import DocumentMeta from 'react-document-meta';


const cookies = new Cookies();
const emailRegex = /^\S+@\S+\.\S+$/;
let standardHtml = null;
let allModels = [];
let validEmail;
let searchArr = [];
let searchKey = [];


const dataSourceModels = [];
const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

        
const fb = require("../imgs/Facebook_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");

export class Contact extends Component {
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
    this.state = {dataSource: [], testvalue: 1, diagnosisOpen: false, RepairOpen: false, signupOpen: false, repairStr: '', chosenModel: '', chosenProblem: '', email: '', phone: '', password: '', signInOpen: false, invalid: '', invalidSignup: '', signUpSuccess: false, openSnack: false, openTablet: false};

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.onHandleAutoComp = this.onHandleAutoComp.bind(this);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(e) {
    e.target.src = e.target.src.replace("normal", "hover");
  }


    componentDidMount() {
      $('.pagenotfounds').hide()
      $('.eview').hide()
      $('.mview').hide()

    axios.get(apilink+'/website/models/', JSON.stringify(axiosConfig)).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        dataSourceModels.push(response.data[i].name);
      }
      allModels = response.data;
      this.setState({
        dataSource: dataSourceModels
      });
    }).catch(error => {
      console.log(error);
    });
  }


  onHandleAutoComp(searchText, key) {
    searchArr = searchText.split(' ');
    searchKey = key.split(' ');
    // console.log(key);
    // console.log(this.onFindOne(key, searchArr));
    // return this.onFindOne(key, searchArr);
    // for (let i = 0; i < searchArr.length; i++) {
    //   if (key.toLowerCase().indexOf(searchArr[i]) >= 0) {
    //     console.log(key.toLowerCase().indexOf(searchArr[i]));
    //   }
    //   return (key.toLowerCase().indexOf(searchArr[i]) !== -1);
    // }
    // console.log(searchArr, searchKey[0].toLowerCase());
    // return (searchKey[0].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    return (searchArr.indexOf(searchKey[0].toLowerCase()) !== -1);
  }

  handleMouseOut(e) {
    e.target.src = e.target.src.replace("hover", "normal");
  }
    handleUpdateInput(chosenRequest, index) {
    for (let s = 0; s < allModels.length; s++) {
      if (s === index) {
        if (allModels[s].device_type === 'Tablet Computer') {
          document.getElementById('signupbtn').style.display = 'none';
          this.setState({
            openTablet: true
          });
          return;
        }
      }
    }
    axios.get(apilink+'/website/models/', JSON.stringify(axiosConfig))
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (chosenRequest === response.data[i].name) {
            cookies.set('device-model-id', response.data[i].id, {path: '/'});
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      chosenModel: chosenRequest
    });
    for (let i = 0; i < allModels.length; i++) {
      if (allModels[i].name === chosenRequest) {
        cookies.set('device-type', allModels[i].device_type, {path: '/'});
        cookies.set('device-brand', allModels[i].brand, {path: '/'});
        cookies.set('device-model', chosenRequest, {path: '/'});
        window.location = '/repair';
        return;
      }
    }
    if (index === -1 && cookies.get('device-model-id') !== '') {
      window.location = '/repair';
    }
  }

  render() {
    const meta = {
      title: 'Contact us | iService',
      description: "Get your phones, laptops and other devices repaired hassle-free with iService. Our service centers are located at Bangalore and Delhi. Call us at 7411811911",
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'contact iservice, iservice phone number, iservice branches, iservice locations, iservice centers bangalore, iservice near me'
        }
      }
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div>
        <Row>

                <div className="aboutus-section-1">

            <br />
            <br />
            <h1><center>Get your device
            repaired, hassle-free</center></h1>
            <br />
            <center>Book a doorstep service or walk-in to the nearest centre and track repair progress all the way</center>
            <br />
            <br />
            
            

            <div style={{height: '58px', marginLeft: 'auto', marginRight: 'auto'}}>
              <center><Row key={1} id="landing-repair" className="landing-repair-field" style={{height: '58px',width:'300px'}}>
                <Col xs={10}>
                  <AutoComplete
                    style={{height: '58px'}}
                    value={this.state.repairStr}
                    searchText={this.state.repairStr}
                    hintText="Enter device, brand or problem"
                    hintStyle={{fontSize: '13.4px', color: '#9b9b9b'}}
                    openOnFocus
                    dataSource={this.state.dataSource}
                    filter={AutoComplete.caseInsensitiveFilter}
                    maxSearchResults={5}
                    onNewRequest={this.handleUpdateInput}
                    fullWidth
                    />
                </Col>
                <Col xs={2}>
                  <SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}}/>
                </Col>
              </Row></center>
            </div>

              <br />
              <br />
              <br />
              <br />
              <center>We're Happy to Help! Just fill in the form, and we <br /></center>
              <center>will contact you in a jiffy! <br/></center>
              <center><strong>Phone:</strong>&nbsp;080-47092670 <br /></center>
              <center><strong>Bangalore:</strong>&nbsp;+91-8046801041 <br /></center>
              <center><strong>Delhi:</strong>&nbsp;+91-1141171819 <br /></center>


              <center><strong>Business Hours:</strong>&nbsp;10:30 to 7:30 Monday-Sunday, &nbsp;All seven days.</center>
              <br />
              <center><strong>You can also visit our nearest service center from the map below.</strong></center>
              <br />
              <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton href="/repair"  backgroundColor="#3386f4" hoverColor="#3386f4" label={'Fix My Device! '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
              </div>
              <br />
              <br />
                
                </div>
        </Row>
          <br />
          <br />
          <Col sm={12} xs={12}/>
          <Col sm={12} xs={12}>
            <div className="aboutus-container">
              <Row>
                <Col sm={12} xs={12}>
                  <div className="aboutus-story-container">
                    <h1>Bangalore Branches</h1>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Container fluid className="" style={{paddingBottom: '20px'}}>
            <br /> 
            <br /> 
            <br /> 

            <Col sm={8} md={3}>
                <center><h1 className="aboutus-time"><center>Koramangala</center></h1></center>
                <p className="bangalore_branches">No.2, 1st Floor 80ft Road, 1st Block Koramangala, Next to Wipro Park Bangalore – 560 034</p>
                  <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton target="_blank" href="https://www.google.co.in/maps/place/iService/@12.926717,77.6313563,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae1460fef9a0ef:0xbc2bafae62862d74!8m2!3d12.926717!4d77.633545?hl=en" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Get Directions '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>

            </Col>
            <Col sm={8} md={3}>
                <h1 className="aboutus-time"><center>RMV</center></h1>
                <p className="bangalore_branches">Basement, No 52 Agastya Arcade 80 Feet Road, Devasandra, RMV 2nd Stage Near Ramiah Hospital, Below Leon Grill, Bengaluru, Karnataka 560054</p>
                  <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton target="_blank" href="https://www.google.co.in/maps/place/iService/@12.9267076,77.5635047,12z/data=!4m8!1m2!2m1!1srmv+iservice!3m4!1s0x3bae17c4ae48b4f7:0xc8f3238b381e65aa!8m2!3d13.0277261!4d77.5738728?hl=en"  backgroundColor="#3386f4" hoverColor="#3386f4" label={'Get Directions '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>
            </Col>

            <Col sm={8} md={3}>
                <center><h1 className="aboutus-time"><center>Marathahalli</center></h1></center>
                <p className="bangalore_branches">Purva riveria mall,Varthur Main Road, Marathalli Near Spice Garden Restaurant, Bangalore – 560 037</p>
              <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton target="_blank" href="https://www.google.co.in/maps/place/iService/@12.957319,77.7053733,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae1231193c0adb:0xb4e3b9e608365469!8m2!3d12.957319!4d77.707562?hl=en" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Get Directions '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>
            </Col>


            <Col sm={8} md={3}>
                <center><h1 className="aboutus-time"><center>Jayanagar</center></h1></center>
                <p className="bangalore_branches">No. 11, Basement, 18th Main road, 37th F Cross Road Below Px Near Coffee Day, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041</p>
              <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton target="_blank" href="https://www.google.co.in/maps/place/iService+-+iPhone,+MacBook,+Oneplus,+Xiaomi+Repairs+and+Service+Center/@12.9221786,77.5872881,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae15fa25709dcb:0x662e87b3b67626d8!8m2!3d12.9221734!4d77.5894821?hl=en" backgroundColor="#3386f4" hoverColor="#3386f4" label={'Get Directions '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>
            </Col>



          </Container>
          <Col sm={12} xs={12}/>
          <Col sm={12} xs={12}>
            <div className="aboutus-container">
              <Row>
                <Col sm={12} xs={12}>
                  <div className="aboutus-story-container">
                    <h1>Delhi Branch</h1>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

           <h1 className="aboutus-time"><center>Raja Garden Branch</center></h1>
           <br />
           <p className=""><center>Najafgarh Road, Block D, Raja Garden, New Delhi, Delhi 110015</center></p>
                         <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton target="_blank" href="https://www.google.co.in/maps/place/iService/@28.651704,77.1252493,17z/data=!3m1!4b1!4m5!3m4!1s0x390d030d1c70001d:0xafacedbcd8ba0084!8m2!3d28.651704!4d77.127438?hl=en"  backgroundColor="#3386f4" hoverColor="#3386f4" label={'Get Directions '}  style={{color: '#fff', margin: '20px auto', height: '50px'}} className="floating-btn-bot-row  btn-height"/>
                  </div>
                <br />
                <br />

        </div>

      </MuiThemeProvider>
      </div>
    );
  }
}

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
let brandCounter = 0;
const finalColor = [];
const cookies = new Cookies();
let modelCounter = 0;
let counterIssue = 0;
const relatedIds = [];
const relatedProds = [];
const relatedPrices = [];
const deviceOptions = [];
const brandName = [];
const modelname = [];



const issuelist = [];


  var parts = window.location.href;
  var lastSegment = parts.split('/'); 


  if(lastSegment.length>5){

     var deviceModel =decodeURI(lastSegment[5]);
      deviceModel =deviceModel.split('-').join(' ');

     var type =decodeURI(lastSegment[4]);
      type =type.split('-').join(' ');

     var brand =decodeURI(lastSegment[3]);
      brand =brand.split('-').join(' ');


   cookies.set('device-type', type,{path: '/'});
    cookies.set('device-brand', brand,{path: '/'});
    cookies.set('device-model', deviceModel,{path: '/'});
  }



export class Repair extends Component {
  constructor(props) {
    super(props);
    console.log('i was loaded');
    this.state = {loader: null,   isChecked: true, colorPallete: [], relatedProducts: [], selectedIssues: [], checkedTest: true, triggersDisable: false, messageContent: '', searchIcon: (<SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}} onTouchTap={this.handleNextTab}/>), tabvalue: 'phone', searchArr: [], solutions: [], pinCode: '', selectBrandField: '', selectModelField: '', selectColorField: '', colorPalleteData: [], deviceType: '', brandContent: '', openSnack: false, repairMessage: '', openEnquire: false};
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);
    this.toggleChange = this.toggleChange.bind(this);


    this.brandListObject = [];
    this.brandListNames = [];




    geolocator.config({
      language: 'en',
      google: {
        version: '3',
        key: 'AIzaSyBT8geVW0_7SWA40w-ngiVhb_ODVaqlJiU'
      }
    });
  }




toggleChange() {
    this.setState({
      isChecked: !this.state.isChecked // flip boolean value
  })
      console.log(this.state.isChecked);
      var dialist = ["Diagnosis"];
      if(this.state.isChecked == true){
        console.log("true")
          cookies.set('device-issues', dialist, {path: '/'});

         window.location = '/estimate';

      }
      else{
        console.log("false")
        cookies.set('problem-type', 'selected', {path: '/'});
      }
}




  handleEnquireMessage() {
    this.setState({
      openEnquire: true
    });
  }

  handleEnquireMenuClose() {
    this.setState({
      openEnquire: false
    });
  }

  handleSnackRequestClose() {
    this.setState({
      openSnack: false
    });
  }

  handleAddProduct(e) {
    if (relatedIds.indexOf(e.target.id) === -1) {
      relatedIds.push(e.target.id);
      relatedProds.push(e.target.parentElement.childNodes[0].innerText.split('₹')[0].trim());
      relatedPrices.push(e.target.parentElement.childNodes[0].childNodes[3].innerText.split('₹')[1].trim());
      cookies.set('related-prices', relatedPrices, {path: '/'});
      cookies.set('related-ids', relatedIds, {path: '/'});
      cookies.set('related-products', relatedProds, {path: '/'});
    }
    if (e.target.innerHTML === 'ADD') {
      e.target.innerHTML = 'REMOVE';
      e.target.parentElement.classList.add('active');
    } else {
      e.target.innerHTML = 'ADD';
      e.target.parentElement.classList.remove('active');
      if (relatedIds.indexOf(e.target.id) !== -1) {
        relatedIds.splice(relatedIds.indexOf(e.target.id), 1);
        relatedProds.splice(relatedProds.indexOf(e.target.parentElement.childNodes[0].innerText.split('₹')[0].trim()), 1);
        relatedPrices.splice(relatedPrices.indexOf(e.target.parentElement.childNodes[0].childNodes[3].innerText.split('₹')[1].trim()), 1);
        cookies.set('related-ids', relatedIds, {path: '/'});
        cookies.set('related-products', relatedProds, {path: '/'});
        cookies.set('related-prices', relatedPrices, {path: '/'});
      }
    }
  }

  handleAddOrder(e) {
    if (e.target.innerHTML === 'ADD TO ORDER') {
      e.target.innerHTML = 'REMOVE FROM ORDER';
      cookies.set('suggested-products', relatedIds, {path: '/'});
    } else {
      e.target.innerHTML = 'ADD TO ORDER';
      cookies.set('suggested-products', '', {path: '/'});
    }
  }




  componentDidMount() {
    $('.pagenotfounds').hide()
    $('.eview').hide()
    $('.mview').hide()
    $('.selectcolor').hide();
    $('.selectproblemlist').hide();

    


    cookies.set('related-products', "", {path: '/'});
    cookies.set('related-prices', relatedPrices, {path: '/'});
    cookies.set('related-ids', relatedPrices, {path: '/'});

    this.setState({
      deviceType: cookies.get('device-type'),
      selectBrandField: cookies.get('device-brand'),
      selectModelField: cookies.get('device-model'),
    });
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumWait: 10000,
      maximumAge: 0,
      desiredAccuracy: 200,
      fallbackToIP: true,
      addressLookup: true
    };


    axios.get(apilink+'/website/brands/', JSON.stringify(axiosConfig)).then(response => {
      console.log(response.data)
      this.brandListNames = response.data;
      response.data.map((data, i) => {
        brandName.push(
          (<option value={data}>{data}</option>)
        )
        this.forceUpdate();
      })
    })
    .catch(error => {
      console.log(error);
    });


    $('#brandnamelist').on('change', function(){
    $('.selectcolor').hide();
    $('.selectproblemlist').hide();


     var selected = $('#brandnamelist option:selected').val();
     const brandSelection = {
      brand: selected,
    };
    cookies.set('device-brand', selected, {path: '/'});
    axios.post(apilink+'/website/allmodel/', brandSelection).then(response => {
          $('#modelnamelist').empty()

        for(var i=0;i<response.data.length;i++){
          console.log(response.data[i])
           var deviceChecks = '<option value="'+response.data[i]+'">'+response.data[i]+'</option>'
          $('#modelnamelist').append(deviceChecks)

        }
       $('.selectpicker').selectpicker('refresh');
       })
      .catch(error => {
        console.log(error);
      });
    })


    $('#modelnamelist').on('change', function(){
      $('#problemtag').empty();
      var selected =  $(this).val();

     const brandSelection = {
      model: selected,
    };
    cookies.set('device-brand', selected, {path: '/'});
    axios.post(apilink+'/website/issues/', brandSelection).then(response => {
          $('#colorPallete').empty()

        for(var i=0;i<response.data.length;i++){
          console.log(response.data[i])
          var names=response.data[i].split(',')
           var deviceChecks = '<li class="colorlist" id="'+names[0]+'" style="display: inline-block; vertical-align: top; margin-left:10px; list-style: none;border-radius: 50%; width: 50px;height: 50px;background: '+names[1]+';"></li>';
          $('#colorPallete').append(deviceChecks)

        }
        $('.selectcolor').show();
        $('.selectproblemlist').hide();

       })
      .catch(error => {
        console.log(error);
      });

     const problemSelection = {
      model: selected,
      colour : "Black"
    };


      axios.post(apilink+'/website/issues/', problemSelection).then(response => {
                 for(var i=0;i<response.data.length;i++){
                console.log(response.data[i])

                    var names=response.data[i].split(',')

                         var deviceChecks = '<div data_amount="'+names[1]+'" id="'+names[0]+'" data-attr="'+names[1]+'" class="handleSuggested col-sm-12 col-md-4 col-lg-3"> '+
                                    '<div>'+names[0]+'<br>'+names[1]+'</div>'+
                              '</div>';
                  $('#problemtag').append(deviceChecks)

                }
                  $(".handleSuggested").on("click", function() {
                    var total =0;
                    $('.addedproblem').empty();
                    $('.addedproblemamount').empty();

                      $(this).toggleClass('selected');
                      var selectedIds = $('.selected').map(function() {
                        return this.id;
                      }).get();

                      var amountIds = $('.selected').map(function() {
                        return $(this).attr('data-attr');
                      }).get();
                      console.log(amountIds)

                
                      cookies.set('device-issues', selectedIds, {path: '/'});
                      for(var i=0;i<selectedIds.length;i++){
                        $('.addedproblem').append(selectedIds[i])
                        $('.addedproblemamount').append(amountIds[i]+'<br>')

                      }

                      for(var i=0;i<amountIds.length;i++){
                        total = parseInt(amountIds[i]) +total;
                      }
                      console.log(total)

                      cookies.set('total-estimate', total, {path: '/'});

                  });

       })
      .catch(error => {
        console.log(error);
      });


    })

    $( "#colorPallete" ).on( "click", ".colorlist" , function( event ) {
     var selected = $(this).attr('id')
     alert(selected);
     $('.selectproblemlist').show();
    })
  }


  handleBackClick() {
    window.history.back();
  }
  handleCheck(e, val) {
    console.log(e, val);
  }



  

  render() {
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor: '#f1f1f1'}}>
          <Container className="section" style={{paddingBottom: '50px', paddingTop: '40px'}}>
            <Row >
              <Col xs={1} sm={2} md={2}>
                <br/>
                <div className="hide-on-mobile iservice-back-btn-container" onTouchTap={this.handleBackClick}>
                  <p style={{margin: '0px', padding: '0px'}}><ChevronLeft style={{color: '#c2c2c2', fontSize: '16px', textAlign: 'right'}}/></p>
                  <p style={{marginTop: '0px', textAlign: 'right', fontSize: '16px', padding: '0px'}} className="iservice-back-btn">BACK</p>
                </div>
              </Col>

              <Col xs={11} sm={10} md={4}>
                Select brand name :  
                <select className="selectpicker"  id="brandnamelist" data-live-search="true">
                  {brandName}
                </select>
              </Col>


              <Col xs={11} sm={10} md={4}>

                Select model  :  
                <select className="selectpicker"  id="modelnamelist" data-live-search="true">
                </select>
              </Col>



              <Col xs={12} sm={12} md={12} className="selectcolor">
                <center>
                  Select color  : 
                  <br />
                  <ul class="center-block" id="colorPallete"></ul>

                </center>
              </Col>



              <Col xs={12} sm={12} md={12} className="selectproblemlist">
                <center >
                  Select problems  : 
                  <br />
                  <div class="center-block" id="problemtag"></div>

                </center>
              </Col>



            <Row>
            <Col xs={12} sm={4} md={3} />
            <Col xs={12} sm={4} md={3}>
                <div style={{width: '100%', textAlign: 'center'}}>
                  <FlatButton id="desk-btn-dis" backgroundColor="#3386f4" hoverColor="#3386f4" label="PROCEED" fullWidth style={{color: '#fff', margin: '20px auto'}} className="floating-btn-bot-row hide-on-mobile disabled btn-height"/>
                  <FlatButton id="desk-btn" href="/estimate" backgroundColor="#3386f4" hoverColor="#3386f4" label="PROCEED" fullWidth style={{color: '#fff', margin: '20px auto'}} className="floating-btn-bot-row hide hide-on-mobile btn-height"/>
                  <sub>I agree to all Iservice terms and condition</sub> 
                </div>
            </Col>
              </Row>
            </Row>
            <Visible xs sm>
              <Container fluid className="header header-mobile">
                <Row id="floating-btn-bot" className="floating-btn-bot-row hide">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <FlatButton href="/estimate" label="PROCEED" fullWidth className="floating-btn-bot"/>
                  </Col>
                </Row>
                <Row id="floating-btn-bot-dis" className="floating-btn-bot-row">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <FlatButton label="PROCEED" fullWidth className="floating-btn-bot disabled"/>
                  </Col>
                </Row>
              </Container>
            </Visible>
          </Container>
          <Snackbar open={this.state.openSnack} message={this.state.repairMessage} autoHideDuration={4000} onRequestClose={this.handleSnackRequestClose}/>
          
        </div>
      </MuiThemeProvider>
    );
  }
}
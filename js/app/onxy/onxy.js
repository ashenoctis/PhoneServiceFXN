import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {Container, Row, Col, Visible} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {NavLink} from "react-router-dom";

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
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CircularProgress from 'material-ui/CircularProgress';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import ActionFavorite from 'material-ui/svg-icons/image/lens';
import ActionFavoriteBorder from 'material-ui/svg-icons/image/panorama-fish-eye';
import Cookies from 'universal-cookie';
import ClevertapReact from 'clevertap-react';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';


var parts = window.location.href;
var lastSegment = parts.split('/'); 
  if(lastSegment.length>6){
        var selectedBrand =decodeURI(lastSegment[3]);
        var devicetype =decodeURI(lastSegment[4].split('-').join(' '));
        var modelnametitle = decodeURI(lastSegment[5].split('-').join(' '));
        document.title = selectedBrand +' '+ devicetype + ' '+ modelnametitle + ' Repair and service';
}
else{
  document.title = 'Repair and service';

}





var totalitems = 0;
var selectitemslist = [];
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },

  media: {
    height: 200,
  },
};

const geolocator = require('geolocator');
let products = [];


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
const brandName = [];
const modelname = [];
var enablecheckout = false;

const emailRegex = /^\S+@\S+\.\S+$/;
let validEmail;







export class Onxy extends Component {
  
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
      this.state = {
      names: [],
      newname: [],
      newname1: [],
      method: 'delivery',
      signupOpen: false,
      signInOpen: false,

    };

    this.state = {loader: null,   isChecked: true, colorPallete: [], relatedProducts: [], selectedIssues: [], checkedTest: true, checkedTest1: false, triggersDisable: false, messageContent: '', searchIcon: (<SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}} onTouchTap={this.handleNextTab}/>), tabvalue: 'phone', searchArr: [], solutions: [], pinCode: '', selectBrandField: '', selectModelField: '', selectColorField: '', colorPalleteData: [], deviceType: '', brandContent: '', openSnack: false, repairMessage: '', openEnquire: false};
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);
    this.toggleChange = this.toggleChange.bind(this);


    this.brandListObject = [];
    this.brandListNames = [];











    this.handlePageRedirect = this.handlePageRedirect.bind(this);
    this.handleAddRedirect = this.handleAddRedirect.bind(this);

    this.handlemoreoptions = this.handlemoreoptions.bind(this);

    



    
    this.handlePageRedirectSkippayment = this.handlePageRedirectSkippayment.bind(this);



    this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleOpenSignIn = this.handleOpenSignIn.bind(this);
    this.handleSigninBtn = this.handleSigninBtn.bind(this);
    this.handleEmailUpdateInput = this.handleEmailUpdateInput.bind(this);
    this.handlePasswordUpdateInput = this.handlePasswordUpdateInput.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
    this.handleCheckBlurElement = this.handleCheckBlurElement.bind(this);
    this.handleMobileUpdateInput = this.handleMobileUpdateInput.bind(this);
    this.handleSignupBtn = this.handleSignupBtn.bind(this);
    this.handleSignupClose = this.handleSignupClose.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);

    this.handleOtpBtn = this.handleOtpBtn.bind(this);
    this.handleResendOtpBtn = this.handleResendOtpBtn.bind(this);

    this.handleSignupOtpBtn = this.handleSignupOtpBtn.bind(this);



  }
  handleSignupClose() {
    this.setState({
      signInOpen: false,
      signupOpen: false
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


  handleResendOtpBtn(){
    localStorage.getItem('number');

    const dataSignup = {
      phone: localStorage.getItem('number'),
    };

    axios({
      method: 'POST',
      url: apilink+'/website/sendotp/',
      data: dataSignup
    }).then(response => {
      if (response.data.status === 'Successful') {
      }
      })
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
        $("#checkoutenable").css("display", "none");

var deviceimages = [];
var devicepart = [];

    axios.get(apilink+'/website/getonyx/').then(response => {
      issueChecks = response.data.parts.map(result => {
        var names=result.quantity;
        var part = result.part;
        var price = result.part;
        deviceimages.push(result.image)
        devicepart.push(result.part_code)

        return (
          <Col className= "dymaniccardview" lg={3} md={3} xs={12}  data-attr={part} style={{minWidth: '1%',width: '33px'}}> 
                <div className="onyxcard">
                  <img className="card-img-top" id={result.part_code} src="" alt="Card image cap" style={{width:'140px',marginTop:'10px'}} />
                  <div className="card-block">
                    <p className="card-text">
                      <h5><strong>{result.part}</strong></h5>
                      <h6>Price : {result.price}</h6>
                      <FlatButton data-attr={part} data-amount={result.price} data-part-code={result.part_code} className="addcart enablecart" backgroundColor={primaryColor} hoverColor={hoverColor} label={'Add '} style={{color: '#fff', margin: '10px auto', height: '35px',display: 'block'}} />
                      <FlatButton data-attr={part} data-part-code={result.part_code} data-amount={result.price} className="addcart disablecart" backgroundColor="#9b9b9b"   disabled={false} label={'Add '}  style={{color: '#fff', margin: '10px auto', height: '35px',display: 'none'}} />
                      <br />
                    </p>
                  </div>
                </div>
          </Col>
        );
      });
      this.forceUpdate();
        for(var i=0;i<deviceimages.length;i++){
          $('#'+devicepart[i]).attr('src',deviceimages[i])
        }
        setTimeout(function(){ 
            $('#ONYXIPHXC').css('width','120px');
         }, 1000);
       

     $(".addcart").on( "click", function() {
        

        selectitemslist.push($(this).attr('data-attr'))

        $('.addedproblemamountclose').append('<h5 style="videosoiaplyname">'+$(this).attr('data-attr')+'</h5>' + '<span class="glyphicon glyphicon-remove removeglass"></span>');
        $('.addedproblemamountclose').css('cursor','pointer');

        $('.errormssg').show();
        $(".addcart").attr("disabled", "true");
        $('#checkout').removeAttr("disabled");

        $("#checkoutenable").css("display", "block");
        $("#checkoutdisable").css("display", "none");

        $('.disablecart').css('display','block');
        $('.enablecart').css('display','none');

        $('.totalAmount').html($(this).attr('data-amount'))
        cookies.set('total-estimate', $(this).attr('data-amount'), {path: '/'});
        cookies.set('part-code', $(this).attr('data-part-code'), {path: '/'});
        cookies.set('products', $(this).attr('data-attr'), {path: '/'});


      });
    });

     
        $(".addcart").attr("disabled", "true");




    $('.pagenotfounds').hide()
    $('.eview').hide()
    $('.mview').hide()
    $('.selectcolor').hide();
    $('.selectproblemlist').hide();
    $('.estimateamount').hide();

    $('.moreoptionids').hide();
    var parts = window.location.href;
var lastSegment = parts.split('/'); 
  if(lastSegment.length>6){
        var selectedBrand =decodeURI(lastSegment[3]);
        var devicetype =decodeURI(lastSegment[4].split('-').join(' '));
        var modelnametitle = decodeURI(lastSegment[5].split('-').join(' '));
        document.title = selectedBrand +' '+  devicetype +' '+ modelnametitle + ' Repair and service';
        var content = 'Get your '+selectedBrand+ ' '+devicetype+' ' +modelnametitle+ ' repaired and serviced at cheapest price and get best quality in no time with Quick Service. We know how important your '+selectedBrand+ ' '+devicetype+' ' +modelnametitle+' device is to you. and why we aim to fix most screen, battery, charging port and headphone-jack related glitches in the shortest timeframe possible. This ranges between 30 minutes to two hours.'
        $('.contenttext').append(content)
}
else{
  document.title = 'Repair and service';
        var content = 'Get your Phone or any gadget repaired at cheapest price and get best quality in no time'
        $('.contenttext').append(content)


}

    

    


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





}


  handleBackClick() {
    window.history.back();
  }
  handleCheck(e, val) {
    console.log(e, val);
  }







  handlePageRedirect(e) {
    cookies.set('skip-pay', '0', {path: '/'});
    if (cookies.get('userId') === null || cookies.get('userId') === undefined || cookies.get('userId') === '') {
      return this.setState({
        openLoginSnack: true,
        signInOpen: true
      });
    }
    else{
        window.location = '/walkin-onyx';
    }
  }
  handleAddRedirect(e){
       selectitemslist = [];
        $('.addedproblem').empty();
        $('.addedproblemamount').empty();
        $('.addedproblemamountclose').empty();
        $('.errormssg').hide();
        $('.addcart').removeAttr("disabled")
        $("#checkoutenable").css("display", "none");
        $("#checkoutdisable").css("display", "block");

        $('.disablecart').css('display','none');
        $('.enablecart').css('display','block');
        $('.totalAmount').html('₹0')

  }



  handlemoreoptions(){
    $('.moreoptionids').show()
  }

  handlePageRedirectSkippayment(e){
    cookies.set('skip-pay', '1', {path: '/'});
    if (cookies.get('userId') === null || cookies.get('userId') === undefined || cookies.get('userId') === '') {
      return this.setState({
        openLoginSnack: true,
        signInOpen: true
      });
    }
    else{
        window.location = '/' + this.state.method;
    }
  }


  handleSnackRequestClose() {
    this.setState({
      openSnack: false,
      openLoginSnack: false
    });
  }


  handleSignup() {
    this.setState({
      signupOpen: true,
      signInOpen: false,
      invalidSignup: ''
    });
  }

  handleSignin() {
    this.setState({
      signupOpen: false,
      signInOpen: true
    });
  }



  handleOpenSignIn() {
    this.setState({
      signInOpen: true,
      signupOpen: false
    });
  }

  handleSigninMenuClose() {
    localStorage.setItem('userObject', '' );
    cookies.remove('userId');
    this.setState({
      signInOpen: false,
      signupOpen: false
    });
  }

  handleEmailUpdateInput(e, val) {
    if (val.match(emailRegex)) {
      validEmail = true;
      this.setState({
        email: val
      });
    } else {
      validEmail = false;
    }
  }

  handleMobileUpdateInput(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handlePasswordUpdateInput(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleCheckElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#FFF';
    e.target.parentElement.parentElement.style.border = '1px solid #3386f4';
  }

  handleCheckBlurElement(e) {
    e.preventDefault();
    e.target.style.backgroundColor = '#f0f3f7';
    e.target.parentElement.parentElement.style.border = '1px solid #d6edff';
  }


  handleSignupOtpBtn(){


    $('.displayOtp').css('display','none');
    $('.phonenumber').css('display','block');

     this.setState({
        invalidSignup: ''
      });


    if (this.state.phone === null || this.state.phone === '' || this.state.phone === undefined) {
      return this.setState({
        invalidSignup: 'Mobile number is missing'
      });
    }




    if (this.state.email === null || this.state.email === '' || this.state.phone === undefined) {
      return this.setState({
        invalidSignup: 'Email is missing'
      });
    }

    if (validEmail === undefined || validEmail === false) {
      return this.setState({
        invalidSignup: 'Invalid email input'
      });
    }
    if (this.state.phone.length != 10) {
      return this.setState({
        invalidSignup: ' Invalid Phone Number'
      });
    }


    console.log(this.state.phone)
    console.log(this.state.email)

    const dataSignup = {
      phone: this.state.phone,
       email: this.state.email,
    };



    axios({
      method: 'POST',
      url: apilink+'/website/signup/',
      data: dataSignup
    }).then(response => {
      console.log(response)
      if (response.data.status === 'Successful') {
        console.log("header")
        cookies.set('userId', response.data.id, {path: '/'});
        axios({
          method: 'POST',
          url: apilink+'/website/sendotp/',
          data: dataSignup
        }).then(response => {
          $('.phonenumber').css('display','none');
          $('.displayOtp').css('display','block');
            console.log("response")
        }).catch(error => {
          console.log(error);
        });
      }
      if (response.data.status === 'Failed') {
        return this.setState({
        invalidSignup: 'Account with Phone Number Already Exists'
      });
      }

      console.log("response")
    }).catch(error => {
      console.log(error);
    });
  }

  handleOtpBtn(){
    $('.displayOtp').css('display','none');
    $('.phonenumber').css('display','block');


     this.setState({
        invalid: ''
      });
    if (this.state.phone === null || this.state.phone === '' || this.state.phone === undefined) {
      return this.setState({
        invalid: 'Mobile number is missing'
      });
    }

    if (this.state.phone.length != 10) {
      return this.setState({
        invalid: ' Invalid Phone Number'
      });
    }


    const dataSignup = {
      phone: this.state.phone,
    };


    localStorage.setItem('number',this.state.phone);
    axios({
      method: 'POST',
      url: apilink+'/website/signup/',
      data: dataSignup
    }).then(response => {
      console.log(response)
      if (response.data.status === 'Successful') {
        console.log("header")
        axios({
          method: 'POST',
          url: apilink+'/website/sendotp/',
          data: dataSignup
        }).then(response => {
          $('.phonenumber').css('display','none');
          $('.displayOtp').css('display','block');
            console.log("response")
        }).catch(error => {
          console.log(error);
        });
      }
      if (response.data.status === 'Failed') {
        return this.setState({
        invalidSignup: 'Account with Phone Number Already Exists'
      });
      }

      console.log("response")
    }).catch(error => {
      console.log(error);
    });

  }

  handleSigninBtn() {


   
       if (this.state.password === null || this.state.password === '') {
        return this.setState({
          invalid: 'Password is missing'
        });
      }
      console.log(this.state.phone)
      console.log(this.state.password)


      const dataSignin = {
        username: this.state.phone,
        password: this.state.password
      };
      axios({
        method: 'POST',
        url: apilink+'/website/login/',
        data: dataSignin
      }).then(response => {
        if (response.data.status === 'Successful') {

          cookies.set('userId', response.data.id, {path: '/'});
          this.setState({
            signinOpen: false,
            openSnack: true
          });
          if (document.getElementById('signupbtn') !== null && document.getElementById('signupbtn') !== undefined && document.getElementById('signupbtn') !== '') {
            document.getElementById('signupbtn').style.display = 'none';
          }
         window.location = '/walkin-onyx';
          
        } else {
          this.setState({
            invalid: response.data.status
          });
        }
      }).catch(error => {
        console.log(error);
      });
    
  }



  handleSignupBtn() {
    if (this.state.email === null || this.state.email === '') {
      return this.setState({
        invalidSignup: 'Email is missing'
      });
    }

    if (this.state.phone === null || this.state.phone === '') {
      return this.setState({
        invalidSignup: 'Mobile number is missing'
      });
    }

    if (this.state.password === null || this.state.password === '') {
      return this.setState({
        invalidSignup: 'Password is missing'
      });
    }

    if (validEmail === undefined || validEmail === false) {
      return this.setState({
        invalid: 'Invalid email input'
      });
    }
    const createlead = {
      first_name: "",
      last_name: "",
      email: this.state.email,
      phone: this.state.phone,
      device: cookies.get('device-model')

    }

    const dataSignup = {
      email: this.state.email,
      username: this.state.phone,
      password: this.state.password
    };
    axios({
      method: 'POST',
      url: apilink+'/website/login/',
      data: dataSignup
    }).then(response => {
      axios.post(apilink+'/website/createlead/', createlead, axiosConfig).
      then(response => {
        console.log(response)
      })

      if (response.data.status === 'Successful') {
        console.log("header")
        cookies.set('userId', response.data.id, {path: '/'});
        this.setState({
          signupOpen: false,
          menuOpen: false,
          
        });
        window.location = '/' + this.state.method;

      }
      if (response.data.status === 'User Already Exists') {
        console.log("het")
        return this.setState({
        invalidSignup: 'User Already Exists'
      });
      }
    }).catch(error => {
      console.log(error);
    });
  }






    
  


  render() {
    return (
      <MuiThemeProvider>
        <div className="ContainerHeight repaircontainer application" >

           <Row>
           <Row style={{background:'black',height:'300px'}}>
             <Col xs={12} sm={12} md={6} >
                <Col xs={1} sm={1} md={2} />
                <Col xs={11} sm={11} md={10} >
                  <h2 style={{color:'white'}}><center>Onyx</center></h2>
                  <p style={{color:'white'}}><center>Manhandle your iPhone! Try out our all new Onyx Shield</center></p>
                  <br />
                  <br/>
                  <p style={{color:'white',marginBottom:'10px'}}><center>Onyx Shield is an exclusive product that provides all round protection for your iPhone without changing its appearance. 
                  The Shield is a combination of an elegant back-case and a rubberised polymer layer for your screen. </center></p>
                </Col>
              </Col>

               <Col xs={12} sm={12} md={6} >
                  <video style={{display:'block',margin:'auto',marginTop:'30px'}} width="400" controls autoPlay loop>
                              <source src="https://iservice.co.in/onyxvideo"  type="video/mp4" />
                              Your browser does not support HTML5 video.
                  </video>
              </Col>
            </Row>
           
            <Col  xs={12} sm={12} md={8} >
              <Col xs={1} sm={1} md={2} />
              <Col xs={11} sm={10} md={10}>
               <Row>
                  <Col sm={1} xs={1} lg={12}/>
                  <Col sm={11} xs={11} lg={12}>
                    <div className="newpartners-container">
                          <div className="list">
                              {issueChecks}
                          </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Col>

              <Col xs={12} md={4} lg={4} className="cartview">
              <div className="vl"></div>
              <h4>
                    <center className="namelist" style={{marginTop: '20px'}}>
                      <strong>Your Cart</strong>
                    </center>
                    </h4>
                    <div className= "brandmodel" style={{textAlign:'center'}} xs={12} md={12} lg={12}>
                     <div style={{color:'red',marginLeft:'10px'}} className="errormssg">Your can only add one item to your cart, remove to add other one.</div>
                      <div style={{display:'inline-block'}} className="addedmodel"></div>
                      </div>
                  <br />
               
                <Row>
                  <Col xs={1} md={1} lg={2} />
                  <Col xs={10} md={10} lg={8} >
                    <h5 className="estimateamount" style={{float: 'right',marginBottom: '-10px', fontSize: '12px'}}>Estimate Amount :</h5>
                  </Col>
                  <Col xs={1} md={1} lg={2} />
                  </Row>
                <div  style={{textAlign:'center'}}  xs={12} md={12} lg={12}>
         

                  <p style={{display:'inline-block',float: 'left'}} className="addedproblem"></p>
                  <p style={{display:'inline-block',fontSize:'12px'}} className="addedproblemamount"></p>
                  <p style={{display:'inline-block',fontSize:'16px'}} className="addedproblemamountclose" onClick={this.handleAddRedirect} ></p>

                </div>
              
                <Row className="rowWidth100 marginTop20">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <h3  style={{textAlign:'center'}} className="product-heading marginBottom20">
                      Total <div className="totalAmount" style={{display:'inline-block'}}>₹0</div>
                    </h3>
                  </Col>
                </Row>
                <div className="viewcartbutton">
                  <Col lg={4} md={2} sm={2} xs={2} />
                  <Col lg={8} md={10} sm={10} xs={10} >
                    <br />
                    <FlatButton  value="paymode" id= "checkoutenable"  backgroundColor={primaryColor} hoverColor={hoverColor}  className= "center-block" onClick={this.handlePageRedirect} label="Checkout and Pay"  style={{color: '#fff'}} />
                    <FlatButton  value="paymode" id= "checkoutdisable" backgroundColor="#9b9b9b"  hoverColor="#3386f4"  className= "center-block" label="Checkout and Pay" disabled={this.state.checkedTest} style={{color: '#fff'}} />
                    <br />
                    <br />
                    <br />
                  </Col>

                </div>
              </Col>
            </Row>

  


            <div className="container">
                     
                  <Row>
                  <h1>
              <center >
                <h3 className="aboutus-container">
                TERMS AND CONDITIONS 
                </h3>
              </center>
            </h1>
              
            <Col xs={12} lg={7}>
            <ol className="termsheader" style={{fontSize: '10px'}}>



              <li>
                <p className="tnc">Doorstep service is not available for this. </p>
              </li>
              <li>
                <p className="tnc">Onyx Shield once applied can be removed at the request of a customer. But the amount paid will not be refunded. </p>
              </li>
                <li>
                <p className="tnc"> For iPhone 6+, 7+, 8+ the Polymer Layer does not cover about 2.5mm on each side of the leading edges. 
                  <br />
                  The back-case forms an embankment around the phone and protects the bezel and leading edges. 
                 </p>
              </li>
                <li>
                <p className="tnc">The prices displayed above are for the combo pack. Parts of the combo cannot be sold individually at different prices. </p>
              </li>
                <li>
                <p className="tnc">This product does not come with a warranty.</p>
              </li>
                <li>
                <p className="tnc">All tests have been performed under controlled environments. We do not guarantee the physical safety of your phone. </p>
              </li>
                <li>
                <p className="tnc">A maximum of 1 combo can be booked with the same phone number. </p>
              </li>
                <li>
                <p className="tnc">Pickup and drop service is not applicable on this. 
                </p>
              </li>
               
            </ol>
            </Col>
            <Col xs={12} lg={5}>

  



            </Col >
            </Row>
              <Row>





                    <h3 >
                      <center >
                      <div className="aboutus-container contenttext">
                      </div>
                    </center>
                    </h3>
                  </Row>
                  </div>

                  <Col sm={2} md={1} />








            <Dialog
            open={this.state.signupOpen}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              repositionOnUpdate={true}
            actionButton={<IconButton key={1} tooltip="Close Menu" style={{width: '50px'}} onTouchTap={this.handleMenuClose}><CloseIcon color="#3386f4"/></IconButton>}
            appBarStyle={{display: 'none', background: 'none', boxShadow: 'none', marginBottom: '10px'}}
            className="signup-screen-bar"
            >
            <Container fluid className="header header-mobile">
              <Row>
                <Col xs={12} style={{textAlign: 'center'}}>
                  <IconButton tooltip="Close" style={{width: '50px', margin: '10px', position: 'absolute', right: '0', zIndex: '1500'}} onTouchTap={this.handleMenuClose}>
                    <CloseIcon color="#3386f4" onClick={this.handleSignupClose}/>
                  </IconButton>
                </Col>
              </Row>
              <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                  <h1 className="logo-text" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                    SIGN UP
                  </h1>
                </Col>
              </Row>

              <Row className="phonenumber">
                <Col xs={12} md={4} lg={3}>
                    Email : 
                </Col>
                <Col xs={12} md={4} lg={6}>
                  <div className="signupInputArea">
                    <TextField type="text" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText" hintStyle={{color: '#9b9b9b', zIndex: '9999', paddingLeft: '15px'}} onChange={this.handleEmailUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                  </div>
                </Col>
            
              </Row>
              <Row className="phonenumber">

                <Col xs={12} md={4} lg={3}>
                    Phone number : 
                </Col>
                <Col xs={12} md={4} lg={6}>
                  <div className="signupInputArea">
                    <TextField type="number" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                  </div>
                </Col>
              </Row>


              <Row className="phonenumber">
                <div className="signinbutton">
                  <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="Get OTP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleSignupOtpBtn}/>
                </div>
              </Row>


              <div  style={{display: 'none'}} className="displayOtp">
                <Row>
                  <Col xs={12} md={4} lg={3}>
                    Enter OTP : 
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div className="signupInputArea">
                      <TextField type="password" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSigninEnter}/>
                    </div>
                  </Col>
                </Row>


                <Row>
                    <div className="signinbutton">
                      <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="SIGN UP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px'}} onTouchTap={this.handleSignupBtn}/>
                    </div>
                </Row>
              </div>
                <p className="signInErr">{this.state.invalidSignup}</p>



              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                    <p className="signInText">Already have an account? <span className="signInTextClick" style={{color: primaryColor, cursor: 'pointer'}} onTouchTap={this.handleSignin}>Sign In</span></p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Dialog>
          <Dialog
            open={this.state.signInOpen}
              autoDetectWindowHeight={true}
              autoScrollBodyContent={true}
              repositionOnUpdate={true}


            
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
                    SIGN IN
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="phonenumber">
                <Col xs={12} md={4} lg={3}>
                    Phone number : 
                </Col>
                <Col xs={12} md={4} lg={6}>
                  <div className="signupInputArea">
                    <TextField type="number" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handleMobileUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSignupEnter}/>
                  </div>
                </Col>
              </Row>

              <div  style={{display: 'none'}} className="displayOtp">
                <Row>
                  <Col xs={12} md={4} lg={3}>
                    Enter OTP : 
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div className="signupInputArea">
                      <TextField type="password" inputStyle={{backgroundColor: '#f0f3f7', paddingLeft: '15px'}} className="signupintputText"  hintStyle={{color: '#9b9b9b', zIndex: '999', paddingLeft: '15px'}} onChange={this.handlePasswordUpdateInput} underlineShow={false} fullWidth onFocus={this.handleCheckElement} onBlur={this.handleCheckBlurElement} onKeyDown={this.handleSigninEnter}/>
                    </div>
                      <div  style={{cursor:'pointer', textAlign:'center'}} onTouchTap={this.handleResendOtpBtn}>Resend OTP</div>

                  </Col>
                </Row>
              </div>
              <p className="signInErr">{this.state.invalid}</p>



               <Row className="phonenumber">
                  <div className="signinbutton">
                    <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="Get OTP" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleOtpBtn}/>
                  </div>
                </Row>

              <div style={{display: 'none'}} className="displayOtp">
                <Row>
                    <div className="signinbutton">
                      <FlatButton backgroundColor={primaryColor} hoverColor={hoverColor} label="SIGN IN" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleSigninBtn}/>
                    </div>
                </Row>
              </div>

            </Container>
          </Dialog>
          <Snackbar open={this.state.openSnack} message="Login Successful" autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
          <Snackbar open={this.state.openLoginSnack} message="Please login to continue" autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
        </div>
      </MuiThemeProvider> 
    );
  }
}
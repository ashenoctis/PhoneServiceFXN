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







export class NewRepair extends Component {
  
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

    this.state = {loader: null,   isChecked: true, colorPallete: [], relatedProducts: [], selectedIssues: [], checkedTest: true, triggersDisable: false, messageContent: '', searchIcon: (<SearchIcon color="#9b9b9b" style={{float: 'right', margin: '10px'}} onTouchTap={this.handleNextTab}/>), tabvalue: 'phone', searchArr: [], solutions: [], pinCode: '', selectBrandField: '', selectModelField: '', selectColorField: '', colorPalleteData: [], deviceType: '', brandContent: '', openSnack: false, repairMessage: '', openEnquire: false};
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);
    this.toggleChange = this.toggleChange.bind(this);


    this.brandListObject = [];
    this.brandListNames = [];





    this.handleChangeMethod = this.handleChangeMethod.bind(this);
    this.handlePageRedirect = this.handlePageRedirect.bind(this);
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
}
else{
  document.title = 'Repair and service';

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








    axios.get(apilink+'/website/brands/', JSON.stringify(axiosConfig)).then(response => {
      console.log(response.data)
      this.brandListNames = response.data;
      response.data.map((data, i) => {
        brandName.push(
          (<option value={data}>{data}</option>)
        )
        this.forceUpdate();
      })

      if(cookies.get('device-brand')){
        $('#brandnamelist').selectpicker();
        $('#brandnamelist').selectpicker('val', cookies.get('device-brand'));
        $('#brandnamelist').selectpicker('refresh');
       
      }
      $('#brandnamelist').trigger('change');



    })
    .catch(error => {
      console.log(error);
    });






    $('#brandnamelist').on('change', function(){
        $('.addedbrand').empty()
        $('.addedmodel').empty()
        $('.addedproblem').empty()
        $('.addedproblemamount').empty()
        $('.totalAmount').html('₹0')
        $('.estimateamount').hide();
        $('.moreoptionids').hide();







      

        $('.selectcolor').hide();
        $('.selectproblemlist').hide();

       var selected = $('#brandnamelist option:selected').val();
        $('.addedbrand').append(selected + '&nbsp;')

       const brandSelection = {
        brand: selected,
      };
      cookies.set('device-brand', selected, {path: '/'});
      
        localStorage.setItem('brandforwarranty', selected );


      axios.post(apilink+'/website/allmodel/', brandSelection).then(response => {
            $('#modelnamelist').empty()

          for(var i=0;i<response.data.length;i++){
            console.log(response.data[i])
             var deviceChecks = '<option value="'+response.data[i]+'">'+response.data[i]+'</option>'
            $('#modelnamelist').append(deviceChecks)

          }
          if(response.data.length >0){
            $('.selectproblemlist').show();

          }
          else{
           $('.selectproblemlist').hide();

          }
         $('.selectpicker').selectpicker('refresh');

      if(cookies.get('device-model')){

        $('#modelnamelist').selectpicker();
        $('#modelnamelist').selectpicker('val', cookies.get('device-model'));
        $('#modelnamelist').selectpicker('refresh');
      }
      $('#modelnamelist').trigger('change');

         })
        .catch(error => {
          console.log(error);
        });
    })


    $('#modelnamelist').on('change', function(){
      $('.addedproblem').empty()
      $('.addedproblemamount').empty()
      $('.addedmodel').empty()
      $('.totalAmount').html('₹0')
      $('.estimateamount').hide();

      $('#problemtag').empty();
      var selected =  $(this).val();
      $('.addedmodel').append(selected)
        $('.moreoptionids').hide();



      const brandSelection = {
        model: selected,
      };
      cookies.set('device-model', selected, {path: '/'});
      axios.post(apilink+'/website/issues/', brandSelection).then(response => {
        $('#colorPallete').empty()

        for(var i=0;i<response.data.length;i++){
          console.log(response.data[i])
          var names=response.data[i].split(',')
           var deviceChecks = '<li class="colorlist" data_attr = "'+names[0]+'" id="'+names[0]+'" style="display: inline-block; vertical-align: top; margin-right:35px; list-style: none;border-radius: 50%; width: 50px;height: 50px;background: '+names[1]+';"><p class="colorname">'+names[0]+'</p></li>';
          $('#colorPallete').append(deviceChecks)

        }
        $('.colorlist').css('border','3px solid #ffb2d1')
        $('.colorlist').css('cursor','pointer')
        $('.selectcolor').hide();
       })
      .catch(error => {
        console.log(error);
      });




      const problemSelection = {
        model: selected,
        colour : "Black"
      };

      var res,symptoms=[];
      const problemSelections = {
        model: selected
      }


      if(cookies.get('device-brand') == 'Apple'){
      axios.post(apilink+'/website/problems/', problemSelections).then(responsed => {
        console.log(responsed)
        res = responsed;
      
        for(var i=0;i<responsed.data.length;i++){
          for(var z=0;z<res.data[i].symptoms.length;z++){
            symptoms.push(res.data[i].symptoms[z])
          }
          console.log(responsed.data[i])


             var deviceChecks = '<div class="col-sm-12 col-md-6 col-lg-6"><div data_amount="'+res.data[i].cost+'" id="'+res.data[i].problem+'" data-attr="'+res.data[i].cost+'" class="handleSuggested moreoptionava'+i+'">'+
                                  '<p class="individualname">'+res.data[i].problem+'</span><span style="margin-right:6px;" class="individualamount"> ₹'+res.data[i].cost+'</span></p>'+
                                  '<div style="margin-left:6px;font-size:12px;float:left;margin-top:-20px;color:red">Warranty : '+res.data[i].warranty+' </div>'+

                                  '<div class="btn-row-popup-menu popname popname'+i+'" style="margin-right:10px;font-size:12px;float:right;margin-top:-20px;color:#03a9f4">Know more</div>'+
                                  '<div style="display:none;max-height:10px">'+
                                    '<div class="row btn-row-popup-menu-head">'+res.data[i].problem+
                                      '<a class="btn-popover-close pull-right"> &times;</a>'+
                                    '</div>'+
                                    '<div class="btn-row-popup-menu-body">'+
                                      '<div>'+
                                          '<h4 style="color:#2B4162;font-weight:500px;">This service covers:</h4>'+
                                          '<li style="color:#2B4162;">'+res.data[i].repair+'</li>'+
                                          '<h4 style="color:#2B4162;font-weight:500px;">you need this reapir if:</h4>'+
                                          '<div class="listofsym'+i+'"></div>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';

          $('#problemtag').append(deviceChecks)
          if(i > 5){
            $('.moreoptionava'+i).toggleClass('moreoptionids');
            $('.moreoptionids').hide();

          }

          for(var z=0;z<symptoms.length;z++){
            $('.listofsym'+i).append('<li style="color:#2B4162;">'+symptoms[z]+'</li>')
          }

        }

        $('#problemtag').append('<hr class="moreoptions">')
        $('.popname').popover({
           placement: 'bottom',
           trigger: 'hover',
           html: true,
          container: "body",

           title: function() {
             return $(this).parent().find('.btn-row-popup-menu-head').html();
           },
           content: function() {
             return $(this).parent().find('.btn-row-popup-menu-body').html();
           }

         }).on('show.bs.popover', function(e) {
           if (window.activePopover) {
             $(window.activePopover).popover('hide')
           }
           window.activePopover = this;
           var currentPopover = e.target;

         }).on('hide.bs.popover', function() {
           window.activePopover = null;
        });

         // Close popover when clicking anywhere on the screen
        $(document).on('click', function(e) {
           $('[data-toggle="popover"],[data-original-title]').each(function() {
             //the 'is' for buttons that trigger popups
             //the 'has' for icons within a button that triggers a popup
             var target = $(e.target);
             if (!target.is('.popover') && !target.is('.popover *') && !target.is('.btn-row-popup-menu') || target.is('.btn-popover-close')) {
               (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false;
             }
           });
        });

        $(window).resize(function() {
           console.log(currentPopover);
           if (currentPopover.data('bs.popover').tip().hasClass('in') == true) {
             currentPopover.popover('hide');
             currentPopover.popover('show');
           }
        });



        $('.handleSuggested').css('cursor','pointer')
        $(".handleSuggested").on("click", function() {
            $('.estimateamount').hide();

          var total =0;
          var selectedIds = [];
          $('.addedproblem').empty();
          $('.addedproblemamount').empty();

            $(this).toggleClass('selectedid');
             selectedIds = $('.selectedid').map(function() {
              return this.id;
            }).get();
            console.log(selectedIds)

            var amountIds = $('.selectedid').map(function() {
              return $(this).attr('data-attr');
            }).get();

            if(amountIds.length>=1){
            $('.estimateamount').show();
              enablecheckout = true;
            }

      
            cookies.set('device-issues', selectedIds, {path: '/'});
            for(var i=0;i<selectedIds.length;i++){
              $('.addedproblem').append(selectedIds[i]+'<br>')
              $('.addedproblemamount').append(amountIds[i]+'<br>')

            }

            for(var i=0;i<amountIds.length;i++){
              total = parseInt(amountIds[i]) +total;
            }
            $('.totalAmount').html('₹' + total);
            console.log(total)
            cookies.set('total-estimate', total, {path: '/'});

        });
      })
      .catch(error => {
        console.log(error);
      });
    }


    else{
        alert("else")
        axios.post(apilink+'/website/issues/', problemSelection).then(response => {
        console.log(response)
        for(var i=0;i<response.data.length;i++){
          console.log(response.data[i])
          var names=response.data[i].split(',')

          var deviceChecks = '<div class="col-sm-12 col-md-6 col-lg-6"><div data_amount="'+names[1]+'" id="'+names[0]+'" data-attr="'+names[1]+'" class="handleSuggested moreoptionava'+i+'">'+
                                  '<p class="individualname">'+names[0]+'</span><span style="margin-right:6px;" class="individualamount"> ₹'+names[1]+'</span></p>'+
                                  '</div>';
          $('#problemtag').append(deviceChecks)
          if(i > 5){
            $('.moreoptionava'+i).toggleClass('moreoptionids');
            $('.moreoptionids').hide();
          }
        }

        $('#problemtag').append('<hr class="moreoptions">')
        $('.handleSuggested').css('cursor','pointer')
        $(".handleSuggested").on("click", function() {
            $('.estimateamount').hide();

          var total =0;
          var selectedIds = [];
          $('.addedproblem').empty();
          $('.addedproblemamount').empty();

            $(this).toggleClass('selectedid');
             selectedIds = $('.selectedid').map(function() {
              return this.id;
            }).get();
            console.log(selectedIds)

            var amountIds = $('.selectedid').map(function() {
              return $(this).attr('data-attr');
            }).get();

            if(amountIds.length>=1){
            $('.estimateamount').show();
              enablecheckout = true;
            }

      
            cookies.set('device-issues', selectedIds, {path: '/'});
            for(var i=0;i<selectedIds.length;i++){
              $('.addedproblem').append(selectedIds[i]+'<br>')
              $('.addedproblemamount').append(amountIds[i]+'<br>')

            }

            for(var i=0;i<amountIds.length;i++){
              total = parseInt(amountIds[i]) +total;
            }
            $('.totalAmount').html('₹' + total);
            console.log(total)
            cookies.set('total-estimate', total, {path: '/'});

        });
      })
      .catch(error => {
        console.log(error);
      });
    }
    })

    $( "#colorPallete" ).on( "click", ".colorlist" , function( event ) {
      $(".colorlist").removeClass("selectedcolor").addClass("unselectedcolor");
        $('.colorlist').css('border','3px solid #ffb2d1')

      $(this).removeClass("unselectedcolor").addClass("selectedcolor");


      var selected = $(this).attr('id')
      cookies.set('device-colour', selected, {path: '/'});
      $('.selectedcolor').css('border','3px solid blue')
      $('.selectproblemlist').show();
    })
  }


  handleBackClick() {
    window.history.back();
  }
  handleCheck(e, val) {
    console.log(e, val);
  }




  handleChangeMethod(e, value) {
    e.preventDefault();

    console.log(value);
    this.setState({
      method: value
    });
    if(enablecheckout){
      this.setState({
        checkedTest: false
      })
    }
    $('#skippaymentmode').css('color','#3386f4')
    $('#checkout').css('background','#3386f4')

    
 
    cookies.set('type', value, {path: '/'});
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
        window.location = '/' + this.state.method;
    }
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
          window.location = '/' + this.state.method;
          
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
        <div className="ContainerHeight repaircontainer" >
           <Row>
           <br />
           <br />


            <Col  xs={12} sm={12} md={8} >
              <Col xs={1} sm={1} md={2} />
              <Col xs={11} sm={10} md={5}>
                <h4>
                  Select brand name : 
                </h4> 
                <select className="selectpicker"  id="brandnamelist" data-live-search="true" data-width="100%">
                  {brandName}
                </select>
              </Col>
              <Col xs={1} />

              <Col xs={11} sm={10} md={5}>
              <h4>
                Select model  : 
              </h4> 
                <select className="selectpicker"  id="modelnamelist" data-live-search="true" data-width="100%">
                </select>
              </Col>


              <Col  xs={1} sm={12} md={2} />
              <Col xs={11} sm={12} md={10} className="selectproblemlist">
                <h4>
                  <div>
                    <br />
                    Select the issues you are facing? 
                  </div>
                </h4>

                <center>
                  <div className="center-block" id="problemtag">
                  </div>
                </center>

              </Col>
              <Col  xs={1} sm={12} md={2} />
              <Col xs={11} sm={12} md={10}>

              <center> 
              <br />
                <br />
                <FlatButton  value="moreoptions" id= "moreoptions" backgroundColor="#3386f4" hover="#3386f4"  onClick={this.handlemoreoptions} label="View more options" style={{color: '#fff'}} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
                
                </center>
                </Col>
            </Col>

              <Col xs={12} md={4} lg={4} className="cartview">
              <div className="vl"></div>
                    <center className="namelist">
                    Repair List
                    </center>
                    <div className= "brandmodel" style={{textAlign:'center'}} xs={12} md={12} lg={12}>
                     <div style={{display:'inline-block'}} className="addedbrand"></div>
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
         


                  <Col xs={1} md={12} lg={2} />
                  <p style={{display:'inline-block',float: 'left'}} className="addedproblem"></p>
                  <p style={{display:'inline-block'}} className="addedproblemamount"></p>
                </div>
                <div  style={{textAlign:'center'}}  xs={12} md={12} lg={12}>
                  <h3 style={{textAlign:'center',display:'inline-block'}}>Total : <div className="totalAmount" style={{display:'inline-block'}}>₹0</div></h3>
                </div>
                <Row className="rowWidth100 marginTop20">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div  style={{textAlign:'center'}} className="product-heading marginBottom20">
                      SCHEDULE
                    </div>
                    <p id="disappear-text" className="disappear-text">Please select one of the methods:</p>
                    <Col lg={1} md={12} sm={12} xs={12} />
                    <Col lg={11} md={12} sm={12} xs={12} >
                      <p className="center-block scheduleMethod">
                      <RadioButtonGroup className="center-block" name="scheduleMethod" onChange={this.handleChangeMethod}>
                        <RadioButton
                          value="delivery"
                          label="Pickup and Delivery"
                          checkedIcon={<ActionFavorite style={{color: '#F44336'}}/>}
                          uncheckedIcon={<ActionFavoriteBorder/>}
                          style={{margin: '10px'}}
                          iconStyle={{width: '15px'}}
                          disableTouchRipple
                          />
                        <RadioButton
                          value="walkin"
                          label="Walk-in"
                          checkedIcon={<ActionFavorite style={{color: '#F44336'}}/>}
                          uncheckedIcon={<ActionFavoriteBorder/>}
                          style={{margin: '10px'}}
                          iconStyle={{width: '15px'}}
                          disableTouchRipple
                          />
                      </RadioButtonGroup>
                      </p>
                    </Col>
                  </Col>
                </Row>
                <div className="viewcartbutton">
                  <Col lg={4} md={2} sm={2} xs={2} />
                  <Col lg={8} md={10} sm={10} xs={10} >
                    <sup>Note: This is an Estimate amount, in case of any changes we will get back to you. </sup>
                    <br />

                    <FlatButton  value="paymode" id= "checkout" backgroundColor="#9b9b9b"  hoverColor="#3386f4"  className= "center-block" onClick={this.handlePageRedirect} label="Checkout and Pay" disabled={this.state.checkedTest} style={{color: '#fff'}} />
                    <br />
                    <FlatButton value="skpip" disabled={this.state.checkedTest} hoverColor="" onClick={this.handlePageRedirectSkippayment} id="skippaymentmode" style={{color: '#9b9b9b',textAlign: 'center',marginLeft:'30px'}}>Skip Payment</FlatButton>
                    <br />
                    <br />
                  </Col>

                </div>
              </Col>
            </Row>


                  <Col sm={2} md={1} />

                  <Col sm={8} md={3}>
                    <Row>
                      <Col sm={12} xs={12}>
                        <p className="landing-repair-p-num">
                          1 <span className="landing-repair-works">
                              FREE PICKUP & DROP
                            </span><img src="https://image.flaticon.com/icons/png/512/15/15923.png" style={{width: '55px', float: 'right'}}/>
                        </p>
                          <p className="vertical-dashed-line-content">
                            Free Pickup & Drop anywhere in India.
                          </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={8} md={3}>
                    <Row>
                      <Col sm={12} xs={12}>
                        <p className="landing-repair-p-num">
                          2 <span className="landing-repair-works">TRANSPARENT PRICING</span><img src="http://freeflaticons.com/wp-content/uploads/2014/09/money-copy-1411381952nk84g.png" style={{width: '55px', float: 'right', marginTop: '10px'}}/>
                        </p>
                          <p className="vertical-dashed-line-content" style={{marginLeft: '5px'}}>
                            No hidden charges.You know how much to pay even before your phone gets repaired
                          </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={8} md={3}>
                    <Row>
                      <Col sm={12} xs={12}>
                        <p className="landing-repair-p-num">
                          3 <span className="landing-repair-works">GET WARRANTY*</span><img src="https://image.flaticon.com/icons/svg/25/25423.svg" style={{width: '55px', float: 'right', marginTop: '10px'}}/>
                        </p>
                          <p className="vertical-dashed-line-content" style={{marginLeft: '5px'}}>
                            Get Warrnaty on all parts you add.
                          </p>
                      </Col>
                    </Row>
                  </Col>






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
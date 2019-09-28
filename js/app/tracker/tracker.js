import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Container, Row, Col, Visible} from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Moment from 'react-moment';
import Snackbar from 'material-ui/Snackbar';

import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';


const primaryColor = '#3386f4';
const hoverColor = '#3E8CF8';
const cookies = new Cookies();




// Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;
// const pusher = new Pusher({
//   appId: '348823',
//   key: 'fac9da29a8f5c6d18e3c',
//   secret: '72484729aeaebc82faf0',
//   cluster: 'ap2'
// });

// let channel = pusher.subscribe('private-' + cookies.get('current-job-id'));

// console.log(Pusher);
// let pushernew = new Pusher({
//   appId: '348823',
//   key: 'fac9da29a8f5c6d18e3c',
//   secret: '72484729aeaebc82faf0',
//   cluster: 'ap2'
// });
// console.log(pushernew);
const styles = {
  backgroundTexture: {
    backgroundColor: '#f9f9f9',
    minWidth: '100%',
    minHeight: '430px',
    paddingBottom: '50px'
  },
  backgroundTextureMarginBottom: {
    backgroundColor: '#f9f9f9',
    minWidth: '100%',
    padding: '30px'
  },
  backgroundTextureInvoice: {
    backgroundColor: '#f9f9f9',
    minWidth: '100%'
  },
  dateInitiate: {
    color: '#b2b2b2',
    marginLeft: '30px',
    paddingBottom: '0px',
    marginBottom: '0px',
    fontSize: '12px'
  },
  dateTracker: {
    color: '#b2b2b2',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    textAlign: 'right',
    paddingTop: '15px'
  },
  estDateTracker: {
    color: '#b2b2b2',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    textAlign: 'left',
    paddingTop: '15px'
  },
  orderCompleteCircle: {
    borderRadius: '50%',
    border: '2px solid #b2b2b2',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  orderCompleteBlueCircle: {
    borderRadius: '50%',
    border: '2px solid rgb(51, 134, 244)',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  orderCompleteStand: {
    minHeight: '40px',
    width: '1px',
    border: '1px solid #e2e1e2',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px'
  },
  orderMidway: {
    maxHeight: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: '-3px'
  },
  orderPostReadyStand: {
    minHeight: '31px',
    width: '1px',
    border: '1px solid #e2e1e2',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0px',
    marginBottom: '10px'
  },
  orderMidwayCircle: {
    borderRadius: '50%',
    border: '2px solid #41c0ad',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  orderMidwayFadeCircle: {
    borderRadius: '50%',
    border: '2px solid #9b9b9b',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paddingBottom60: {
    paddingBottom: '60px'
  },
  orderStatus: {
    color: '#000000',
    marginLeft: '-40px',
    marginTop: '30px'
  },
  orderRepairStand: {
    minHeight: '90px',
    width: '1px',
    border: '1px solid #e2e1e2',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '10px'
  },
  orderTopRepairStand: {
    minHeight: '90px',
    width: '1px',
    border: '1px solid #e2e1e2',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-40px',
    marginBottom: '10px'
  },
  orderRepairCircle: {
    borderRadius: '50%',
    border: '2px solid #3386f4',
    height: '30px',
    width: '30px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paddingNil: {
    padding: '0px'
  },
  statusOrderTimeUpdate: {
    color: '#212121',
    textAlign: 'right',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    marginTop: '0px'
  },
  deviceRepairText: {
    color: '#b2b2b2',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    textAlign: 'right',
    paddingTop: '55px'
  },
  deviceRepairTime: {
    color: '#212121',
    textAlign: 'right',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    marginTop: '0px'
  },
  orderTrackerInitiated: {
    marginTop: '-15px',
    color: '#b2b2b2',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    textAlign: 'right'
  },
  orderTrackerTimeInitiated: {
    color: '#212121',
    textAlign: 'right',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginLeft: '70px',
    minWidth: '50px',
    marginTop: '0px'
  },
  orderStatusRepairDevice: {
    marginLeft: '-40px',
    marginTop: '102px',
    color: '#000000'
  },
  orderStatusProcessed: {
    marginLeft: '-40px',
    marginTop: '15px',
    color: '#000000'
  },
  orderStatusDelivery: {
    color: '#000000',
    marginLeft: '-40px',
    marginTop: '60px'
  },
  productAmount: {
    color: '#ed6a5e'
  },
  download: {
    color: '#FFFFFF !important'
  },
  marginBottom20: {
    marginBottom: '20px',
    color: '#fff',
    maxWidth: '85px !important',
  },
  payAmount: {
    marginLeft: '-20px',
    color: '#fff'
  }
};
let device = null;
let image = null;

let issues = [];
let downloadBtn = null;
let greyReadyDelivery = null;
let cancelBtn = null;
let estimateCost = null;
let paidAmount = null;
let jobNumber = null;
let finishDate = null;
let created = null;
let readyDelivery = null;
let repair = null;
let pendingAmount = null;
let receivedCourierText = null;
let receivedCourierTime = null;
let pendingAmountBtn = null;
let orderRepairedTop = null;
let orderReadyForDeliveryCirlce = null;
let orderReadyForDeliveryText = null;
let orderInProgress = null;
let estimatedDelivery = null;
let deliveredTime = null;
let WaitingForApprovalCircle = null;
let orderCompleteBlueCircle = null;
let repairTime = null;
let repairDate = null;
let readyDeliveryDate = null;
let readyDeliveryTime = null;
let estimatedDeliveryTime = null;

export class Tracker extends Component {
  constructor() {
    super();
    this.state = {
      signInOpen: false,
    };
    this.state = {cancelJob: false, currentComment: ''}
    this.handleClickInvoice = this.handleClickInvoice.bind(this);
    this.handleTextAreaBlurElement = this.handleTextAreaBlurElement.bind(this);
    this.handleTextAreaElement = this.handleTextAreaElement.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSnackRequestClose = this.handleSnackRequestClose.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleApproval = this.handleApproval.bind(this);
    this.handleCancelJob = this.handleCancelJob.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.handleSigninMenuClose = this.handleSigninMenuClose.bind(this);
    this.handleCancelJobConfirm = this.handleCancelJobConfirm.bind(this);
    this.handleapprovalJobConfirm = this.handleapprovalJobConfirm.bind(this);

    

  }

  handleAddComment() {
    console.log(this.state.currentComment);
    channel.trigger('client-my-event', { message: "hello world" });
  }

  handleSnackRequestClose() {
    this.setState({
      cancelJob: true
    });
  }

  handleKeyPress(e, val) {
    // if (e.charCode === 13) {
    //   // channel.bind('private-event', function(data) {
    //   //   console.log(data.message);
    //   // });
    // } else {

    // }
    this.setState({
      currentComment: val
    });
    try {
      document.getElementById('floating-btn-bot-dis').classList.add('hide');
      document.getElementById('floating-btn-bot').classList.remove('hide');
    } catch (err) {
      console.log(err.message);
    }
    this.forceUpdate();

    try {
      document.getElementById('desk-btn-dis').classList.add('hide');
      document.getElementById('desk-btn').classList.remove('hide');
    } catch (err) {
      console.log(err.message);
    }
    this.forceUpdate();

    try {
      document.getElementById('repair-msg-row-1').classList.add('hide');
    } catch (err) {
      console.log(err.message);
    }
  }


  handleApproval(e){

      e.preventDefault();

    const approval = {
      job: cookies.get('current-job-id'),
      state: 'Approved' 
    };

    axios({
      method: 'POST',
      url: apilink+'/website/update/',
      data: approval
    }).then(response => {
     this.setState({
      signInOpen: true,
    });
      $('.confirmcancel').css('display',' none')
      $('.confirmsubmit').css('display',' none')
      $('.buttonTitle').html('Approval')
      $('.buttonContent').html('Thanks for Approving')

    }).catch(error => {
      console.log(error);
    });


    axios({
      method: 'POST',
      url: 'https://techventure.iservice.co.in/website/update/',
      data: approval
    }).then(response => {
     this.setState({
      signInOpen: true,
    });
      $('.confirmcancel').css('display',' none')
      $('.confirmsubmit').css('display',' none')
      $('.buttonTitle').html('Approval')
      $('.buttonContent').html('Thanks for Approving')

    }).catch(error => {
      console.log(error);
    });


  }

  handleSigninMenuClose() {
    this.setState({
      signInOpen: false,
    });
  }



  handleCallback(e){

    const call = {
      job: cookies.get('current-job-id'),
      state: 'Callback' 
    };
    axios({
      method: 'POST',
      url: apilink+'/website/update/',
      data: call
    }).then(response => {
      this.setState({
        signInOpen: true,
      });

      $('.confirmcancel').css('display',' none')
      $('.confirmappoval').css('display',' none')

      $('.buttonTitle').html('Request Call Back')
      $('.buttonContent').html('Thanks, We will call you back shortly.')



    }).catch(error => {
      console.log(error);
    });
  }
  handleClickInvoice(e) {
    e.preventDefault();
    axios.post(apilink+'/website/getinvoice/', {id: cookies.get('current-job-id')}).then(result => {
      if (result.data) {
        axios.get(result.data.url).then(resp => {
        }).catch(error => {
          console.log(error);
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }
    handleCancelJobConfirm(e) {
    $('.confirmcancel').css('display',' block')
    $('.confirmsubmit').css('display',' none')
      $('.confirmappoval').css('display',' none')

      window.location = '/orders';
    }

    handleapprovalJobConfirm(e) {
      $('.confirmcancel').css('display',' none')
      $('.confirmsubmit').css('display',' none')
      $('.confirmappoval').css('display',' block')

      window.location = '/track';
    }


    

  handleCancelJob(e) {
    const cancel = {
      job: cookies.get('current-job-id'),
      state: 'Cancelled' 
    };

    axios({
      method: 'POST',
      url: apilink+'/website/update/',
      data: cancel
    }).then(response => {
      this.setState({
        signInOpen: true,
    });
      $('.confirmcancel').css('display',' block')
      $('.confirmsubmit').css('display',' none')
      $('.confirmappoval').css('display',' none')


      $('.buttonTitle').html('Cancel Job')
      $('.buttonContent').html('Your job with iService has been Cancelled')

    }).catch(error => {
      console.log(error);
    });

    axios({
      method: 'POST',
      url: 'https://techventure.iservice.co.in/website/update/',
      data: cancel
    }).then(response => {
      this.setState({
        signInOpen: true,
    });
      $('.confirmcancel').css('display',' block')
      $('.confirmsubmit').css('display',' none')
      $('.confirmappoval').css('display',' none')


      $('.buttonTitle').html('Cancel Job')
      $('.buttonContent').html('Your job with iService has been Cancelled')

    }).catch(error => {
      console.log(error);
    });
    
  }

  handleTextAreaElement(e) {
    e.preventDefault();
    e.target.parentElement.style.border = '1px solid #3386f4';
  }

  handleTextAreaBlurElement(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.style.border = '1px solid #d6edff';
    e.target.parentElement.style.border = '1px solid #d6edff';
  }

  handleEnterPress(e) {
    if (e.keyCode === 13) {
      console.log(e.keyCode);
    }
  }

  componentDidMount() {
    $('#Approval').css('display','none')
    $('#CancelJob').css('display','none')
    $('.confirmcancel').css('display',' none')
    $('.confirmappoval').css('display',' none')
    $('.confirmsubmit').css('display',' none')




    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  
    if (cookies.get('userId') === undefined || cookies.get('userId') === null || cookies.get('userId') === '') {
      return;
    }

    if (cookies.get('current-job-id') === undefined || cookies.get('current-job-id') === null || cookies.get('current-job-id') === '') {
      window.location = '/profile';
      return;
    }


    axios.post('https://techventure.iservice.co.in/website/jobdetails/', {jobId: cookies.get('current-job-id')}).then(response => {
      console.log("hi"+response)
      estimateCost = response.data.estimated_amount;
      paidAmount = response.data.paid_amount;
      jobNumber = response.data.jobId;
      finishDate = response.data.time.delivered;
      estimatedDelivery = response.data.estimated_delivery;
      readyDelivery = response.data.time.ready;
      created = response.data.time.created;
      repair = response.data.time.repair;
      pendingAmount = response.data.pending_amount;
      deliveredTime = response.data.time.delivered;
      device = response.data.device;
      status = response.data.status;
      image = response.data.image;


      cookies.set('amountPayable', pendingAmount, {path: '/'});
      let damageCounter = 0;

      if(status == 'Waiting For Approval' || status == 'In Progress') {
        $('.nextUpdate').html('Next update time');
      }

      if(status == 'Ready For Delivery') {
        $('.nextUpdate').html('Completed');
      }

      if(status == 'Delivered') {
        $('.nextUpdate').html('Finish Date');
      }

      if ( response.data.status === 'Waiting For Approval') {
          if(response.data.approval_amount == 0 ){
              $('#Approval').html('Approve')
          }
          else{
            $('#Approval').html('Approve for ' + response.data.approval_amount)
          }
          $('#Approval').css('display','block')
          $('#Approval').css('color', 'white');
          $('#Approval').css('font-size', '10px');

      }


      issues = response.data.problems.map(result => {
        return (
          <Row key={damageCounter++}>
              <h4 style={{paddingLeft:'60px'}}>
                {result}
              </h4>
          </Row>
        );
      });

      $('.flowchart').hide();

     

      if (response.data.status === 'New') {
        $(".new").addClass("done");
        $('#CancelJob').css('display','block')
      }

      if (response.data.status === 'In Progress' || response.data.status === 'Waiting For Approval') {
         $(".new").addClass("done");
         $(".underrepair").addClass("done");
         

      }

      if ( response.data.status === 'Waiting For Approval') {
       if(response.data.approval_amount == 0 ){
              $('#Approval').html('Approve')
        }
        else{
          $('#Approval').html('Approve for ' + response.data.approval_amount)
        }
        $('#Approval').css('display','block')
        $('#Approval').css('color', 'white');
      }



      if (response.data.status === 'Ready For Delivery' ) {
          $(".new").addClass("done");
         $(".underrepair").addClass("done");
         $(".readystate").addClass("done");
      }

      if (response.data.status === 'Delivered') {
        $(".new").addClass("done");
         $(".underrepair").addClass("done");
         $(".readystate").addClass("done");
         $(".delevered").addClass("done");
      }
     

      this.forceUpdate();
    }).catch(error => {
      console.log(error);
    });


    axios.post(apilink+'/website/jobdetails/', {jobId: cookies.get('current-job-id')}).then(response => {
      console.log(response)
      estimateCost = response.data.estimated_amount;
      paidAmount = response.data.paid_amount;
      jobNumber = response.data.jobId;
      finishDate = response.data.time.delivered;
      estimatedDelivery = response.data.estimated_delivery;
      readyDelivery = response.data.time.ready;
      created = response.data.time.created;
      repair = response.data.time.repair;
      pendingAmount = response.data.pending_amount;
      deliveredTime = response.data.time.delivered;
      device = response.data.device;
      status = response.data.status;
      image = response.data.image;
      if (finishDate == null) {
        var d = new Date(new Date().getTime()+(2*24*60*60*1000));
        finishDate = d
      }

      console.log(response.data.jobtype)
      cookies.set('amountPayable', pendingAmount, {path: '/'});
      let damageCounter = 0;

      if(status == 'Waiting For Approval' || status == 'In Progress') {
        $('.nextUpdate').html('Next update time');
      }

      if(status == 'Ready For Delivery') {
        $('.nextUpdate').html('Completed');
      }

      if(status == 'Delivered') {
        $('.nextUpdate').html('Finish Date');
      }

      if ( response.data.status === 'Waiting For Approval') {
          if(response.data.approval_amount == 0 ){
              $('#Approval').html('Approve')
          }
          else{
            $('#Approval').html('Approve for ' + response.data.approval_amount)
          }
          $('#Approval').css('display','block')
          $('#Approval').css('color', 'white');
          $('#Approval').css('font-size', '10px');

      }


      issues = response.data.problems.map(result => {
        return (
          <Row key={damageCounter++}>
              <h4 style={{paddingLeft:'60px'}}>
                {result}
              </h4>
          </Row>
        );
      });

      $('.flowchart').hide();

     

      if (response.data.status === 'New') {
        $(".new").addClass("done");
        $('#CancelJob').css('display','block')
      }

      if (response.data.status === 'In Progress' || response.data.status === 'Waiting For Approval') {
         $(".new").addClass("done");
         $(".underrepair").addClass("done");
         

      }

      if ( response.data.status === 'Waiting For Approval') {
       if(response.data.approval_amount == 0 ){
              $('#Approval').html('Approve')
        }
        else{
          $('#Approval').html('Approve for ' + response.data.approval_amount)
        }
        $('#Approval').css('display','block')
        $('#Approval').css('color', 'white');
      }



      if (response.data.status === 'Ready For Delivery' ) {
          $(".new").addClass("done");
         $(".underrepair").addClass("done");
         $(".readystate").addClass("done");
      }

      if (response.data.status === 'Delivered') {
        $(".new").addClass("done");
         $(".underrepair").addClass("done");
         $(".readystate").addClass("done");
         $(".delevered").addClass("done");
      }
     

      this.forceUpdate();
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <section>
          <Container fluid style={styles.backgroundTexture} style={{padding: '30px', backgroundColor: '#f9f9f9', paddingTop: '0px'}}>
            <Row>
              <br />
              <br />

              <Col sm={4} xs={12}>
                <img src={image} alt="Phone Image" width="100%" height="100%"/>
              </Col>

              <Col sm={4} xs={12}>
                <p className="tracker-heading">
                  Your Repair For 
                </p>
                <h2 style={{paddingLeft:'30px'}}>
                  {device} 
                </h2>
                 <h4 style={{paddingLeft:'30px'}}>
                  <div className="status" style={{float:'left'}}>
                    Status :  {status} 
                  </div>
                  <div className="approvalbutton" style={{float:'right'}}>
                    <FlatButton  id= "Approval" backgroundColor="#3386f4"  hoverColor="#3386f4"  className= "center-block" onClick={this.handleApproval} label="Approve" labelStyle={{ fontSize: '10px'}} style={{color: '#fff', fontSize: '10px', marginLeft: '20px'}} />
                  </div>
                </h4>



                <br />
                <br />
                <div className="orderStatus">
                  <ul className="row">
                    <li className="col new">Recived Order</li>
                    <li className="col underrepair">Device Under Repair</li>
                    <li className="col readystate">Ready for delivery</li>
                    <li className="col delevered">Delivered</li>
                  </ul>
                </div>
                <br />
                <br />
         
      
                <Row>
                    <p className="tracker-heading">
                      ISSUES
                    </p>
                  {issues}
                </Row>
                <Row>
                    <Row>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p className="tracker-heading">
                          ESTIMATE COST
                        </p>
                        <h3 style={{paddingLeft:'30px'}}>
                           {estimateCost}
                        </h3>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p className="tracker-heading">
                          PAID AMOUNT
                        </p>
                        <h3 style={{paddingLeft:'30px'}}>
                          {paidAmount}
                        </h3>
                      </Col>
                    </Row>
                    <Row className="marginTop20">
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p className="tracker-heading nextUpdate">
                          FINISH DATE
                        </p>
                        <h3 style={{paddingLeft:'30px'}}>
                          <Moment format="DD MMM">{finishDate}</Moment>
                        </h3>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p className="tracker-heading">
                          JOB NUMBER
                        </p>
                        <h3 style={{paddingLeft:'30px'}}>
                          {jobNumber}
                        </h3>
                      </Col>
                    </Row>
                  <Col sm={4} xs={12}/>
                </Row>
              </Col>
              <Col sm={4} xs={12}>
                <FlatButton  id= "CancelJob" backgroundColor="#FF0000"  hoverColor="#FF0000"  className= "center-block" onClick={this.handleCancelJob} label="Cancel Job" labelStyle={{ fontSize: '10px'}} style={{color: '#fff', fontSize: '10px', marginRight: '10px'}} />
                  <br />
                <FlatButton  id= "CallBack" backgroundColor="#3386f4"  hoverColor="#3386f4"  className= "center-block" onClick={this.handleCallback} label="Request Call Back" labelStyle={{ fontSize: '10px'}} style={{color: '#fff', fontSize: '10px'}} />
              </Col>
            </Row>

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
                  <h1 className="logo-text buttonTitle" style={{display: 'inline-block', color: '#eb6b62', fontSize: '18px', fontWeight: '400'}}>
                   
                  </h1>
                </Col>
              </Row>
            </Container>
            <Container>

             <Row className="header-row">
                <Col xs={12} style={{textAlign: 'center'}}>
                <div className="buttonContent"></div>
                </Col>
              </Row>
  

                <Row className="phonenumber">
                  <div className="signinbutton">
                    <FlatButton className="confirmcancel" backgroundColor={primaryColor} hoverColor={hoverColor} label="close" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleCancelJobConfirm}/>
                    <FlatButton className="confirmappoval" backgroundColor={primaryColor} hoverColor={hoverColor} label="close" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleapprovalJobConfirm}/>

                    <FlatButton className="confirmsubmit" backgroundColor={primaryColor} hoverColor={hoverColor} label="close" fullWidth style={{color: '#fff', marginTop: '50px', minHeight: '55px', borderRadius: '5px', cursor: 'pointer'}} onTouchTap={this.handleSigninMenuClose}/>
                  </div>
                </Row>


            </Container>
          </Dialog>



          </Container>
          {downloadBtn}
        



          <br />
          <br />



          <div className="flowchart">

           
          </div>

          <Snackbar open={this.state.cancelJob} message="Could not cancel the job. Please try later." autoHideDuration={2000} onRequestClose={this.handleSnackRequestClose}/>
        </section>
      </MuiThemeProvider>
    );
  }
}

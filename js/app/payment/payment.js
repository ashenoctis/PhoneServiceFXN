import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col} from 'react-grid-system';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/image/lens';
import ActionFavoriteBorder from 'material-ui/svg-icons/image/panorama-fish-eye';
import axios from 'axios';
import Cookies from 'universal-cookie';
import DocumentMeta from 'react-document-meta';


const receiptbg = require("../imgs/receiptbg.png");

const primaryColor = '#3386f4';
const hoverColor = '#3E8CF8';
let counter = 1;
let total = 0;

const cookies = new Cookies();

const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};







export class Payment extends Component {

  constructor() {
    super();
    this.state = {
      deviceFullDescription: cookies.get('device-brand') + ' ' + cookies.get('device-model'),
      issues: '',
      payLabel: '',
      method: 'delivery'
    };
    this.handleChangeMethod = this.handleChangeMethod.bind(this);
    this.handlePageRedirect = this.handlePageRedirect.bind(this);
    this.handleAddPayment = this.handleAddPayment.bind(this);
  }

  handleAddPayment(e) {
    if(cookies.get('skip-pay')=='1'){
      window.location = '/track';
    }
      else{
        console.log("dsfdsfsdfd")
      e.preventDefault();
      const payParams = {
        job: cookies.get('current-job-id'),
        amount: cookies.get('total-estimate'),
        mode: 'iMojo'
      };
      axios.post(apilink+'/website/addpayment/', payParams, axiosConfig).then(response => {
        console.log(response);
        console.log("payment mode")
        if (response.data.status === 'Successful') {
          cookies.set('total-paid', cookies.get('total-estimate'), {path: '/'});
          window.location = '/track';
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  handlePageRedirect(e) {
    e.preventDefault();
    window.location = '/' + this.state.method;
  }

  handleChangeMethod(e, value) {
    e.preventDefault();
    console.log(value);
    this.setState({
      method: value
    });
  }

  componentDidMount() {
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-970917228"></script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-970917228');

      gtag('event', 'conversion', {
          'send_to': 'AW-970917228/witqCPqaxIIBEOyK_M4D',
          'transaction_id': ''
      });

      



     
    $('.eview').hide()
    $('.mview').hide()
  
    console.log('device pincode cookie:' + cookies.get('pincode'));
    console.log('device type cookie:' + cookies.get('device-type'));
    console.log('device brand cookie:' + cookies.get('device-brand'));
    console.log('device model cookie:' + cookies.get('device-model'));
    console.log('device colour cookie:' + cookies.get('device-colour'));
    console.log('device issues cookie:' + cookies.get('device-issues'));
    console.log('current job id:' + cookies.get('current-job-id'));
    console.log('issue length: ' + cookies.get('device-issues').length);

    console.log(cookies.get('device-issues').join());
  }

  render() {

   const meta = {
      title: " Thanks for availing our services | iService",
      description: "Thanks for availing our services.",
    }
    return (
      <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div>
          <div id="mask">

          </div>
          <div className="receipt-section" style={{backgroundImage: "url('" + receiptbg + "')", backgroundRepeat: 'no-repeat', paddingTop: '10px', backgroundPosition: 'center top', position: 'fixed', bottom: '0', left: '50%', marginLeft: '-37.5%', width: '75%'}}>
            <Container fluid>
              <Row>
                <Col sm={4} xs={12}>
                  <br/>
                </Col>
                <Col sm={4} xs={12}>
                  <div style={{textAlign: 'center', width: '100%'}}>
                    <img src={require("../imgs/confirmed.png")} style={{width: '100px'}}/>
                  </div>
                  <h2 className="receipt-heading">
                    Your order<br/>
                    for <span>₹ {cookies.get('total-estimate')}</span> is confirmed.
                  </h2>
                  <a onHover={{}} onClick={this.handleAddPayment} className="receipt-a">
                    TRACK YOUR ORDER
                  </a>



                </Col>
                <Col sm={4} xs={12}>
                  <br/>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

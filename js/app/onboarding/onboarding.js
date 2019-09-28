import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

const fb = require("../imgs/Facebook_Color hover.png");
const insta = require("../imgs/Instagram_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");
const youtube = require("../imgs/Youtube_Color hover.png");



export class Onboarding extends Component {

    componentDidMount(){

    $('.pagenotfounds').hide()

    $('.eview').hide()
    $('.mview').hide()

  }

  
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }


  render() {
    return (
      <MuiThemeProvider>
        <div style={{textAlign: 'center'}}>
          <br />
          <br />
          <iframe src="https://docs.google.com/forms/d/1CbcI3pr5rsogPI7UVkoePpMDJCrPwxhK-283-o-NnBQ/edit " width="70%" height="1350px" scrolling="no"  frameborder="0" marginheight="0" align="middle" marginwidth="0">Loading...</iframe>
           <br />
          <br />
        </div>
      </MuiThemeProvider>
    );
  }
}

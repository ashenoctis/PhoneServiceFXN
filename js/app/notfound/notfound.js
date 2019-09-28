
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col, Visible} from 'react-grid-system';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import ActionFavorite from 'material-ui/svg-icons/image/lens';
import ActionFavoriteBorder from 'material-ui/svg-icons/image/panorama-fish-eye';
import axios from 'axios';
import Cookies from 'universal-cookie';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import ClevertapReact from 'clevertap-react';
import Dialog from 'material-ui/Dialog';

ClevertapReact.initialize("TEST-758-986-794Z");

const emailRegex = /^\S+@\S+\.\S+$/;
let validEmail;
let counter = 1;
let counterProds = 0;
let total = 0;

const cookies = new Cookies();

const axiosConfig = {
  withCredentials: true,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};






export class Notfound extends Component {
    componentDidMount() {

    $('.eview').hide()
    $('.mview').hide()
  }

  render() {
    
    return (
      <MuiThemeProvider>
        <div>
        <img src="/imgs/404.png" />
        click here for homepage 
        </div>
      </MuiThemeProvider>
    );
  }
}
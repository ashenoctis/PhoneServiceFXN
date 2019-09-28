import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {DeviceType} from './model/model.js';
import axios from 'axios';
import $ from 'jquery';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'none',
    flexDirection: 'column'
  }
};



export class deviceType extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <div className="mview" style={styles.container}>
        <Header title="Models"/>
        <DeviceType/>
        <Footer/>
      </div>
    );
  }
}

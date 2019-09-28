import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Dynamic} from './dynamicdevice/dynamicdevice.js';
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




export class dynamic extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <div style={styles.container}>
        <Header title="Brands"/>
        <Dynamic/>
        <Footer/>
      </div>
    );
  }
}

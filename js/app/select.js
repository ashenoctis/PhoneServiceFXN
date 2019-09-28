import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Select} from './selectbrand/select.js';
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



export class select extends Component {

  constructor(props) {
    super(props);
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <div className="eview" style={styles.container}>
        <Header/>
        <Select/>
        <Footer/>
      </div>
    );
  }
}

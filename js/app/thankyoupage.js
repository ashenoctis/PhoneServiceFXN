
import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Thankyoupage} from './thankyou/thankyou';
import axios from 'axios';

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



export class thankyoupage extends Component {
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <div style={styles.container}>
        <Header title="Xiaomi"/>
        <Thankyoupage/>
        <main style={styles.main}>
          <br/>
        </main>
        <Footer/>
      </div>
    );
  }
}

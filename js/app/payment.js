import React, {Component} from 'react';
import {Header} from './header';

import {Payment} from './payment/payment';
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


export class PaymentPage extends Component {
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <div style={styles.container}>
        <Header title="Payment"/>
        <Payment/>
        <main style={styles.main}>
          <br/>
        </main>
      </div>
    );
  }
}

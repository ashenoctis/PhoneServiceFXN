import React, {Component} from 'react';

import {Header} from './header';

import {Footer} from './footer';
import {Terms} from './terms/terms';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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



export class terms extends Component {
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <Header title="Terms and Conditions"/>
          <Terms/>
          <main style={styles.main}>
            <br/>
          </main>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

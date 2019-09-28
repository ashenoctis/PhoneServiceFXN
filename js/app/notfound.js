import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Notfound} from './notfound/notfound';
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



export class notfound extends Component {
  constructor() {
    super();
    axios.defaults.headers.common.Authorization = 'Basic b250aGVkb3Q6dGVzdEAxMjM=';
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className= "pagenotfounds" style={styles.container}>
          <Header title="About"/>
          <Notfound/>
          <main style={styles.main}>
            <br/>
          </main>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

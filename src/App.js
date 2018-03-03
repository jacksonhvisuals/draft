import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ViewContainer} from './components/ViewContainer';
import {RandroidToolbar} from './components/RandroidToolbar'

class App extends Component {
  render() {
    return (
      <div>
        <RandroidToolbar tyle={{zIndex: '34'}} />
        <ViewContainer style={{zIndex: '1'}}/>
      </div>
    );
  }
}

export default App;

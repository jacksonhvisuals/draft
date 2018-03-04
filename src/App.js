import React, { Component } from 'react';
import './App.css';
import {ViewContainer} from './components/ViewContainer';
import {RandroidToolbar} from './components/RandroidToolbar';
import {BodyEditor} from './components/BodyEditor';

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

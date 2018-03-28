import React, { Component } from 'react';
import './App.css';
import RandroidToolbar from './components/RandroidToolbar/RandroidToolbar';
import ViewContainer from './components/ViewContainer/ViewContainer';

class App extends Component {
  render() {
    return (
      <div>
        <RandroidToolbar style={{zIndex: '34'}} />
        <ViewContainer style={{zIndex: '1'}}/>
      </div>
    );
  }
}

export default App;

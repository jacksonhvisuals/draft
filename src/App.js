import React, { Component } from 'react';
import './App.css';
import ViewContainer from './components/ViewContainer/ViewContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ViewContainer style={{zIndex: '1'}}/>
      </div>
    );
  }
}

export default App;

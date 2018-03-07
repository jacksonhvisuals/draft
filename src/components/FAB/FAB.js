import React, { Component } from 'react';
import './FAB.css';

export class FAB extends Component {
  render() {
    return(
      <button className="mdc-fab material-icons" ariaLabel="Favorite">
        <span className="mdc-fab__icon">
          add
        </span>
      </button>
    );
  }
}

import React, { Component } from 'react';

export default class FAB extends Component {
  render() {
    return(
      <button className="mdc-fab material-icons" aria-label="Favorite" onClick={this.props.fabClickHandler}>
        <span className="mdc-fab__icon">
          add
        </span>
      </button>
    );
  }
}

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './ViewContainer.css';

export class ViewContainer extends Component {
  render() {
    return (
      <div className='viewContainer'>
        <Col className='listPane' xs={12} sm={4} md={3}>
        <button className="mdc-fab material-icons" ariaLabel="Favorite">
          <span className="mdc-fab__icon">
            add
          </span>
        </button>
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
        </Col>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FAB } from './FAB';
import './styles/ViewContainer.css';

export class ViewContainer extends Component {
  render() {
    return (
      <div className='viewContainer'>
        <Col className='listPane' xs={12} sm={4} md={3}>
          <FAB />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
        </Col>
      </div>
    );
  }
}

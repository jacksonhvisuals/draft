import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './ViewContainer.css';

export class ViewContainer extends Component {
  render() {
    return (
      <Row>
        <Col className='listPane' xs={12} sm={4} md={3}>
        // Render listPane here
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
        // Render optional dialog-view here
        </Col>
      </Row>
    );
  }
}

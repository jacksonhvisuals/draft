import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import './RandroidToolbar.css';

export class RandroidToolbar extends Component {
  render() {
    return (
      <div className='randroid-toolbar-container'>
        <Col className='listBar' xs={12} sm={4} md={3}><div className='app-title noselect'>Notes</div></Col>
        <Col className='detailBar hidden-xs' xs={0} sm={8} md={9}></Col>
      </div>
    );
  }
}

import React, {Component} from 'react';
import './Tag.css';

export class Tag extends Component {
  render() {
    if (this.props.tagName === undefined) {
      return null;
    } else {
      return(
        <div className='tag-item'>
          {this.props.tagName}
        </div>
      );
    }
  }
}

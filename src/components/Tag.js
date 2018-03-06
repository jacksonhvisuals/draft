import React, {Component} from 'react';
import './styles/Tag.css';

export class Tag extends Component {
  render() {
    return(
      <div className='tag-item'>
        {this.props.tagName}
      </div>

    );
  }
}

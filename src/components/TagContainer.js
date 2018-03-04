import React, {Component} from 'react';
import {Tag} from './Tag';
import './styles/TagContainer.css';

export class TagContainer extends Component {
  render() {
    return(
      <div className='tag-container-item'>
        <Tag />
      </div>
    );
  }
}

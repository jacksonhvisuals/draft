import React, {Component} from 'react';
import {Tag} from './Tag';
import './styles/TagContainer.css';

export class TagContainer extends Component {
  render() {
    return(
      <div className='tag-container-item'>
        {
          this.props.noteTags.map((tag) => {
            return(
              <Tag tagName={tag} />
            )
          })
        }
      </div>
    );
  }
}

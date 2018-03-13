import React, {Component} from 'react';
import {Tag} from '../Tag/Tag';
import './TagContainer.css';

export class TagContainer extends Component {
  render() {
    return(
      <div className='tag-container-item'>
        {
          this.props.noteTags.map((noteTag) => {
            return(
              <Tag tagName={noteTag.tag} id={noteTag.id} color={noteTag.color} key={noteTag.id}/>
            )
          })
        }
      </div>
    );
  }
}

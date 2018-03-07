import React, { Component } from 'react';
import {TagContainer} from '../TagContainer/TagContainer';
import './ListItem.css';

export class ListItem extends Component {

  render(props) {
    return(
      <div className='list-note-item'>
        <div className='list-note-title'>{this.props.noteTitle}</div>
        <div className='list-note-content'>{this.props.noteContent}</div>
        <div className='list-note-tags'><TagContainer noteTags={this.props.noteTags} /></div>
      </div>
    );
  }
}

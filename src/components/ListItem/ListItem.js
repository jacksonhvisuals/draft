import React, { Component } from 'react';
import TagContainer from '../TagContainer/TagContainer';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.noteClickHandler(this.props.id);
  }
  render(props) {
    return(
      <div className='list-note-item' onClick={this.clickHandler}>
        <div className='list-note-title noselect'>{this.props.noteTitle}</div>
        <div className='list-note-content noselect'>{this.props.noteContent}</div>
        <div className='list-note-tags noselect'><TagContainer noteTags={this.props.noteTags} /></div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './styles/ListItem.css';

export class ListItem extends Component {
  render() {
    return(
      <div className='list-note-item'>
        <div className='list-note-title'>Note Title</div>
        <div className='list-note-content'>This is the content of the note. I really like how it works. It even wraps, which is pretty neat.</div>
        <div className='list-note-tags'></div>
      </div>
    );
  }
}

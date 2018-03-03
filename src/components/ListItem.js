import React, { Component } from 'react';
import './styles/ListItem.css';

export class ListItem from Component {
  render() {
    return(
      <div>
        <div className='note-title'>Title</div>
        <div className='note-content'>This is the content of the note. I really like how it works.</div>
        <div className='note-tags'></div>
      </div>
    );
  }
}

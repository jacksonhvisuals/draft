import React, {Component} from 'react';
import {ListItem} from '../ListItem/ListItem';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getPlainText, getCurrentContent, getEntity} from 'draft-js';
import './ListContainer.css';

export class ListContainer extends Component {

  render(props) {
    return(
      <div className='list-container'>
        {
          this.props.notesCollection.map((note) => {
            return(
              <ListItem id={note.id} noteTitle={note.noteTitle} noteContent={note.noteContent} key={note.id} noteTags={note.noteTags}/>
            )
          })
        }
      </div>
    );
  }
}

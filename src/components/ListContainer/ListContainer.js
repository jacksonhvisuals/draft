import React, {Component} from 'react';
import {ListItem} from '../ListItem/ListItem';
import './ListContainer.css';

export class ListContainer extends Component {

  render(props) {
    return(
      <div className='list-container'>
        {
          this.props.notesCollection.map((note) => {
            return(
              <ListItem id={note.id} noteTitle={note.noteTitlePreview} noteContent={note.noteContentPreview} key={note.id} noteTags={note.noteTags}/>
            )
          })
        }
      </div>
    );
  }
}

import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';

export default class ListContainer extends Component {

  render(props) {
    if (this.props.notesCollection) {
      return(
        <div className='list-container'>
          {
            this.props.notesCollection.map((note) => {
              return(
                <ListItem id={note.id} noteTitle={note.noteTitlePreview} noteContent={note.noteContentPreview} key={note.id} noteTags={note.noteTags} noteClickHandler={this.props.noteClickHandler}/>
              )
            })
          }
        </div>
      );
    }
  }
}

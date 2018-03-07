import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FAB } from './FAB';
import {ListContainer} from './ListContainer';
import './styles/ViewContainer.css';
import {EditorContainer} from './EditorContainer';
import {RandroidToolbar} from './RandroidToolbar';

export class ViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1, timestamp: "",  noteTitle: "First note", noteContent: "This is the note content", noteTags: ["tag1", "tag2"], 
        },
        {
          id: 2, timestamp: "", noteTitle: "Second note", noteContent: "This is the note content", noteTags: ["tag1", "tag2"],
        },
      ],
    }
  }
  render() {
    return (
      <div className='viewContainer'>
        <Col className='listPane' xs={12} sm={4} md={3}>
        <RandroidToolbar tyle={{zIndex: '34'}} />

          <ListContainer notesCollection={this.state.notes}/>
          <FAB />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
        <RandroidToolbar tyle={{zIndex: '34'}} />

          <EditorContainer />
        </Col>
      </div>
    );
  }
}

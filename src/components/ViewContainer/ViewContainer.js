import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FAB } from '../FAB/FAB';
import {ListContainer} from '../ListContainer/ListContainer';
import './ViewContainer.css';
import {EditorContainer} from '../EditorContainer/EditorContainer';
import {RandroidToolbar} from '../RandroidToolbar/RandroidToolbar';
import {DetailToolbar} from '../DetailToolbar/DetailToolbar';

export class ViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          timestamp: "",
          noteTitle: "",
          noteTitlePreview: "This is the note title preview",
          noteContent: "",
          noteContentPreview: "This is the note content preview",
          noteTags: [ {tag: "fun", id: "1", color: "#987234"}, {tag: "testing", id: "2", color: "#984564"} ],
        },
        {
          id: 2,
          timestamp: "",
          noteTitle: "",
          noteTitlePreview: "This is the note title preview",
          noteContent: "",
          noteContentPreview: "This is the note content preview",
          noteTags: [ {tag: "fun", id: "1", color: "#987234"}, {tag: "testing", id: "2", color: "#984564"} ],
        },
      ],
    }
    this.titleEditorUpdate = this.titleEditorUpdate.bind(this);
    this.bodyEditorUpdate = this.bodyEditorUpdate.bind(this);
  }

  titleEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    const currentnotes = this.state.notes;
    currentnotes[0][noteid, "noteTitle"] = jsoncontentdump;
    currentnotes[0][noteid, "noteTitlePreview"] = plaintextdump;
    this.setState({currentnotes});
    console.log(JSON.stringify(currentnotes));
  }

  bodyEditorUpdate(noteid, jsoncontentdump) {
    const currentnotes = this.state.notes;
    currentnotes.noteid.noteContent = jsoncontentdump;
    console.log(jsoncontentdump);
  }

  render() {
    return (
      <div className='viewContainer'>
        <Col className='listPane' xs={12} sm={4} md={3}>
        <RandroidToolbar tyle={{zIndex: '34'}} />

          <ListContainer notesCollection={this.state.notes} />
          <FAB />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
        <DetailToolbar tyle={{zIndex: '34'}} />
          <EditorContainer titleUpdate={this.titleEditorUpdate} bodyUpdate={this.bodyEditorUpdate} />
        </Col>
      </div>
    );
  }
}

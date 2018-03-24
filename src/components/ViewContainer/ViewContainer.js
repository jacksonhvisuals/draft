import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FAB } from '../FAB/FAB';
import {ListContainer} from '../ListContainer/ListContainer';
import './ViewContainer.css';
import {EditorContainer} from '../EditorContainer/EditorContainer';
import {RandroidToolbar} from '../RandroidToolbar/RandroidToolbar';

let currentnotes;

export class ViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          "key":0,
          "id":0,
          "timestamp":"",
          "noteTitle": "{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Potential jobs\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview":"Potential jobs",
          "noteContent":"{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"YNAB, video editing, etc\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview":"YNAB, video editing, etc",
          "noteTags":[{"tag":"fun","id":"1","color":"#987234"},{"tag":"testing","id":"2","color":"#984564"}]
        },
        {
          "key":1,
          "id":1,
          "timestamp":"",
          "noteTitle":"{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Shopping list\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview":"Shopping list",
          "noteContent":"{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"Milk, eggs, etc.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview":"Milk, eggs, etc.",
          "noteTags":[{"tag":"life","id":"1","color":"#987234"}]
        }
      ],
      currentNoteId: 0,
    }
    this.titleEditorUpdate = this.titleEditorUpdate.bind(this);
    this.bodyEditorUpdate = this.bodyEditorUpdate.bind(this);
    this.currentActiveNoteSelector = this.currentActiveNoteSelector.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
    currentnotes = this.state.notes;
  }

  titleEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    currentnotes[noteid]["noteTitle"] = jsoncontentdump;
    currentnotes[noteid]["noteTitlePreview"] = plaintextdump;
  }

  bodyEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    currentnotes[noteid]["noteContent"] = jsoncontentdump;
    currentnotes[noteid]["noteContentPreview"] = plaintextdump;
  }

  componentWillUnmount() {
    this.setState({currentnotes});
  }

  currentActiveNoteSelector(noteid) {
    this.setState({currentNoteId: noteid});
  }

  createNewNote() {
    let newNote = {
      "key":2,
      "id": 2,
      "timestamp": "",
      "noteTitle": "",
      "noteTitlePreview": "New note",
      "noteContent": "",
      "noteContentPreview": "This is your new note",
      "noteTags": [{}],
    };
    currentnotes.push(newNote);
    this.setState({currentNoteId: 2});
    console.log("duh");
  }

  render() {
    return (
      <div className='viewContainer'>
      <RandroidToolbar tyle={{zIndex: '34'}} />
        <Col className='listPane' xs={12} sm={4} md={3}>
          <ListContainer notesCollection={this.state.notes} noteClickHandler={this.currentActiveNoteSelector} />
          <FAB fabClickHandler={this.createNewNote} />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
          <EditorContainer titleUpdate={this.titleEditorUpdate} bodyUpdate={this.bodyEditorUpdate} noteTitleState={this.state.notes[this.state.currentNoteId]["noteTitle"]} noteContentState={this.state.notes[this.state.currentNoteId]["noteContent"]} currentNoteId={this.state.currentNoteId}/>
        </Col>
      </div>
    );
  }
}

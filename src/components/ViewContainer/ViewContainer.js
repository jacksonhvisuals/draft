import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FAB from '../FAB/FAB';
import ListContainer from '../ListContainer/ListContainer';
import './ViewContainer.css';
import EditorContainer from '../EditorContainer/EditorContainer';

let currentnotes;

export default class ViewContainer extends Component {
  constructor(props) {
    super(props);
    let currenttime = new Date();
    this.state = {
      notes: [{
          "key": 7,
          "id": 2298347,
          "timestamp": currenttime,
          "noteTitle": "{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Potential jobs\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview": "Potential jobs",
          "noteContent": "{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"YNAB, video editing, etc\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview": "YNAB, video editing, etc",
          "noteTags": [{
            "tag": "fun",
            "id": "1",
            "color": "#987234",
            "key": "1"
          }, {
            "tag": "testing",
            "id": "2",
            "color": "#984564",
            "key": "2"
          }]
        },
        {
          "key": 3,
          "id": 71602983,
          "timestamp": currenttime,
          "noteTitle": "{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Shopping list\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview": "Shopping list",
          "noteContent": "{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"Milk, eggs, etc.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview": "Milk, eggs, etc.",
          "noteTags": [{
            "tag": "life",
            "id": "1",
            "color": "#987234",
            "key": "1"
          }]
        }],
      currentNoteId: 2298347,
    }

    // Bind local functions
    this.titleEditorUpdate = this.titleEditorUpdate.bind(this);
    this.bodyEditorUpdate = this.bodyEditorUpdate.bind(this);
    this.currentActiveNoteSelector = this.currentActiveNoteSelector.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.getNoteTitleState = this.getNoteTitleState.bind(this);
    this.getNoteContentState = this.getNoteContentState.bind(this);
    this.getNoteId = this.getNoteId.bind(this);

    currentnotes = this.state.notes;
  }

  titleEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    if (Array.isArray(this.state.notes) && this.state.notes.length > 0) {
      currentnotes[this.selectNote(noteid)]["noteTitle"] = jsoncontentdump;
      currentnotes[this.selectNote(noteid)]["noteTitlePreview"] = plaintextdump;
    }
  }

  bodyEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    if (Array.isArray(this.state.notes) && this.state.notes.length > 0) {
      currentnotes[this.selectNote(noteid)]["noteContent"] = jsoncontentdump;
      currentnotes[this.selectNote(noteid)]["noteContentPreview"] = plaintextdump;
    }
  }

  selectNote(noteid) {
    var element = null;
    Object.keys(currentnotes).forEach(function(key) {
        if(currentnotes[key].id === noteid){
            element = key;
            return;
        }
    });
    return element;
  }

  deleteNote(noteid) {
    currentnotes.pop(this.selectNote(noteid));
  }

  createNewNote() {
    let timestamp = new Date();
    let newid = Math.random() * (1876251987 - 51987) + 51987;
    let newNote = {
      "key": newid,
      "id": newid,
      "timestamp": timestamp,
      "noteTitle": "",
      "noteTitlePreview": "New note",
      "noteContent": "",
      "noteContentPreview": "This is your new note.",
      "noteTags": [{"tag":"tag","id":"1","color":"#987234","key":"1"}],
    };
    currentnotes.push(newNote);
    this.setState({currentNoteId: newid});
  }

  currentActiveNoteSelector(noteid) {
    this.setState({currentNoteId: noteid});
  }

  getNoteTitleState() {
    if (!Array.isArray(this.state.notes) || !this.state.notes.length) {
      return undefined;
    } else {
      return this.state.notes[this.selectNote(this.state.currentNoteId)]["noteTitle"];
    }
  }

  getNoteContentState() {
    if (!Array.isArray(this.state.notes) || !this.state.notes.length) {
      return undefined;
    } else {
      return this.state.notes[this.selectNote(this.state.currentNoteId)]["noteContent"];
    }
  }

  getNoteId() {
    if (!this.state.currentNoteId) {
      return undefined;
    } else {
      return this.state.currentNoteId;
    }
  }

  componentWillUpdate() {
    var element = null;
    Object.keys(currentnotes).forEach(function(key) {
        if(currentnotes[key].noteContentPreview === "" && (currentnotes[key].noteTitlePreview === "New note")){
            element = key;
            // this.deleteNote(key);
            return;
        }
    });
    if (element !== null) {
      this.deleteNote(element);
    }
  }

  render() {
    return (
      <div className='viewContainer'>
        <Col className='listPane' xs={12} sm={4} md={3}>
          <div className='listPaneContainer'>
            <ListContainer notesCollection={this.state.notes} noteClickHandler={this.currentActiveNoteSelector} />
          </div>
          <FAB fabClickHandler={this.createNewNote} />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
          <EditorContainer titleUpdate={this.titleEditorUpdate} bodyUpdate={this.bodyEditorUpdate} noteTitleState={this.getNoteTitleState()} noteContentState={this.getNoteContentState()} currentNoteId={this.getNoteId()}/>
        </Col>
      </div>
    );
  }
}

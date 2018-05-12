import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FAB from '../FAB/FAB';
import ListContainer from '../ListContainer/ListContainer';
import EditorContainer from '../EditorContainer/EditorContainer';
import RandroidToolbar from '../RandroidToolbar/RandroidToolbar';
import '../themes/randroid.css';
import './ViewContainer.css';

let currentnotes;
let currentNoteId;

export default class ViewContainer extends Component {
  constructor(props) {
    super(props);
    let currenttime = new Date();
    this.state = {
      notes: [{
          "key": 7,
          "id": 2298347,
          "timestamp": currenttime,
          "noteTitle": "{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"This is Draft\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview": "This is Draft",
          "noteContent": "{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"A minimal notes app for the web.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview": "A minimal notes app for the web.",
          "noteTags": [{
            "tag": "TESTING",
            "id": "1",
            "key": "1"
          }]
        }],
      previousNoteId: 2298347,
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
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    currentnotes = this.state.notes;
    currentNoteId = this.state.currentNoteId;
  }

  setCurrentNoteId(newid) {
    let currentId = this.state.currentNoteId;
    this.setState({previousNoteId: currentId});
    this.setState({currentNoteId:newid});
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
    var previousNoteId = this.state.previousNoteId;
    this.setState({currentNoteId: previousNoteId});

    this.setState({notes: currentnotes});
    if (this.state.notes.length === 0) {
      console.log(this.state.notes);
    }
  }

  deleteNoteHandler() {
    this.deleteNote(this.state.currentNoteId);

  }

  createNewNote() {
    let timestamp = new Date();
    let newid = Math.floor(Math.random() * (1876251987 - 51987) + 51987);
    let newNote = {
      "key": newid,
      "id": newid,
      "timestamp": timestamp,
      "noteTitle": "",
      "noteTitlePreview": "New note",
      "noteContent": "",
      "noteContentPreview": "This is your new note.",
      "noteTags": [{"tag":"tag","id":"1","key":"1"}],
    };
    // var previousId = this.state.previousNoteId;
    let newnoteopen;
    Object.keys(currentnotes).forEach(function(key) {
        if(currentnotes[key].noteContentPreview === "" && currentnotes[key].noteTitlePreview === "New note"){
            newnoteopen = true;
            console.log("noteopen");
            return;
        } else {
          console.log("notenotopen");
          newnoteopen = false;
        }
    });
    if (!newnoteopen) {
      currentnotes.push(newNote);
      this.setState({currentNoteId: newid});
      console.log("newNoteId: " + newid);
    }
  }

  currentActiveNoteSelector(noteid) {
    this.setState({currentNoteId: noteid});
    if(this.checkForEmptyNote() !== undefined && this.checkForEmptyNote() !== false && currentnotes[this.checkForEmptyNote()].id !== noteid) {
        this.setState({currentNoteId: this.state.previousNoteId});
        console.log("deleting note in position: " + this.checkForEmptyNote());
        this.deleteNote(this.checkForEmptyNote());
    }
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

  checkForEmptyNote() {
    let element = null;
    // let previousId = this.state.previousNoteId;
    Object.keys(currentnotes).forEach(function(key) {
        if(currentnotes[key].noteContentPreview === "" && currentnotes[key].noteTitlePreview === "New note" && currentnotes[key].id !== currentNoteId){
            element = key;
            return;
        }
    });
    if (element !== null) {
      return element;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className='viewContainer'>
        <RandroidToolbar deleteHandler={this.deleteNoteHandler}/>
        <Col className='listPane' xs={12} sm={4} md={3}>
          <div className='listPaneContainer'>
            <ListContainer notesCollection={this.state.notes} noteClickHandler={this.currentActiveNoteSelector} />
          </div>
          <FAB fabClickHandler={this.createNewNote} />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
          <EditorContainer notesArray={this.state.notes} titleUpdate={this.titleEditorUpdate} bodyUpdate={this.bodyEditorUpdate} noteTitleState={this.getNoteTitleState()} noteContentState={this.getNoteContentState()} currentNoteId={this.getNoteId()}/>
        </Col>
      </div>
    );
  }
}

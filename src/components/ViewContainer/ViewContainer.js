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
    let currenttime = new Date();
    this.state = {
      notes: [
        {
          "key":7,
          "id":2,
          "timestamp":currenttime,
          "noteTitle": "{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Potential jobs\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview":"Potential jobs",
          "noteContent":"{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"YNAB, video editing, etc\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview":"YNAB, video editing, etc",
          "noteTags":[{"tag":"fun","id":"1","color":"#987234", "key":"1"},{"tag":"testing","id":"2","color":"#984564","key":"2"}]
        },
        {
          "key":3,
          "id":7,
          "timestamp":currenttime,
          "noteTitle":"{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Shopping list\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview":"Shopping list",
          "noteContent":"{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"Milk, eggs, etc.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview":"Milk, eggs, etc.",
          "noteTags":[{"tag":"life","id":"1","color":"#987234","key":"1"}]
        }
      ],
      currentNoteId: 2,
    }
    this.titleEditorUpdate = this.titleEditorUpdate.bind(this);
    this.bodyEditorUpdate = this.bodyEditorUpdate.bind(this);
    this.currentActiveNoteSelector = this.currentActiveNoteSelector.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    currentnotes = this.state.notes;
  }

  titleEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    currentnotes[this.selectNote(noteid)]["noteTitle"] = jsoncontentdump;
    currentnotes[this.selectNote(noteid)]["noteTitlePreview"] = plaintextdump;
  }

  bodyEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    currentnotes[this.selectNote(noteid)]["noteContent"] = jsoncontentdump;
    currentnotes[this.selectNote(noteid)]["noteContentPreview"] = plaintextdump;
  }

  componentWillUnmount() {
    this.setState({currentnotes});
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

  currentActiveNoteSelector(noteid) {
    this.setState({currentNoteId: noteid});
  }

  createNewNote() {
    var timestamp = new Date();
    let newNote = {
      "key":8,
      "id": 34,
      "timestamp": timestamp,
      "noteTitle": "",
      "noteTitlePreview": "New note",
      "noteContent": "",
      "noteContentPreview": "This is your new note.",
      "noteTags": [{"tag":"tag","id":"1","color":"#987234","key":"1"}],
    };
    currentnotes.push(newNote);
    console.log(timestamp);
    this.setState({currentNoteId: 2});
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
          <EditorContainer titleUpdate={this.titleEditorUpdate} bodyUpdate={this.bodyEditorUpdate} noteTitleState={this.state.notes[this.selectNote(this.state.currentNoteId)]["noteTitle"]} noteContentState={this.state.notes[this.selectNote(this.state.currentNoteId)]["noteContent"]} currentNoteId={this.state.currentNoteId}/>
        </Col>
      </div>
    );
  }
}

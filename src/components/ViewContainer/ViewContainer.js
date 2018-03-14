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
          "id":0,
          "timestamp":"",
          "noteTitle": "{\"blocks\":[{\"key\":\"41lj2\",\"text\":\"Potential jobs\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteTitlePreview":"Potential jobs",
          "noteContent":"{\"blocks\":[{\"key\":\"2hq50\",\"text\":\"YNAB, video editing, etc\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "noteContentPreview":"YNAB, video editing, etc",
          "noteTags":[{"tag":"fun","id":"1","color":"#987234"},{"tag":"testing","id":"2","color":"#984564"}]
        },
        {
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
  }

  titleEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    const currentnotes = this.state.notes;
    currentnotes[0][noteid, "noteTitle"] = jsoncontentdump;
    currentnotes[0][noteid, "noteTitlePreview"] = plaintextdump;
    this.setState({currentnotes});
  }

  bodyEditorUpdate(noteid, jsoncontentdump, plaintextdump) {
    const currentnotes = this.state.notes;
    currentnotes[0][noteid, "noteContent"] = jsoncontentdump;
    currentnotes[0][noteid, "noteContentPreview"] = plaintextdump;
    this.setState({currentnotes});
  }

  currentActiveNoteSelector(noteid) {
    this.setState({currentNoteId: noteid});
  }

  render() {
    return (
      <div className='viewContainer'>
        <Col className='listPane' xs={12} sm={4} md={3}>
        <RandroidToolbar tyle={{zIndex: '34'}} />
          <ListContainer notesCollection={this.state.notes} noteClickHandler={this.currentActiveNoteSelector} />
          <FAB />
        </Col>
        <Col className='detailPane hidden-xs' xs={0} sm={8} md={9}>
        <DetailToolbar tyle={{zIndex: '34'}} />
          <EditorContainer titleUpdate={this.titleEditorUpdate} bodyUpdate={this.bodyEditorUpdate} noteTitleState={this.state.notes[this.state.currentNoteId]["noteTitle"]} noteContentState={this.state.notes[this.state.currentNoteId]["noteContent"]}/>
        </Col>
      </div>
    );
  }
}

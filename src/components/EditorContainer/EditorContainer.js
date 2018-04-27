import React, {Component} from 'react';
import BodyEditor from '../BodyEditor/BodyEditor';
import TitleEditor from '../TitleEditor/TitleEditor';
import './EditorContainer.css';

export default class EditorContainer extends Component {
  render() {
    return(
      <div className='editor-container-element'>
        <TitleEditor className="title-editor-element" onTitleUpdate={this.props.titleUpdate} currentEditorState={this.props.noteTitleState} currentNoteId={this.props.currentNoteId} />
        <BodyEditor className="body-editor-element" onBodyUpdate={this.props.bodyUpdate} currentEditorState={this.props.noteContentState} currentNoteId={this.props.currentNoteId} />
      </div>
    );
  }
}

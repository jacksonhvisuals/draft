import React, {Component} from 'react';
import BodyEditor from '../BodyEditor/BodyEditor';
import TitleEditor from '../TitleEditor/TitleEditor';
import './EditorContainer.css';

export default class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {shouldChildrenRerender: true};

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notesArray.length === 0) {
      this.setState({shouldChildrenRerender: true});
    }
  }

  render() {
    return(
      <div className='editor-container-element'>
        <TitleEditor className="title-editor-element" onTitleUpdate={this.props.titleUpdate} currentEditorState={this.props.noteTitleState} currentNoteId={this.props.currentNoteId} emptyNoteTrigger={this.state.shouldChildrenRerender}/>
        <BodyEditor className="body-editor-element" onBodyUpdate={this.props.bodyUpdate} currentEditorState={this.props.noteContentState} currentNoteId={this.props.currentNoteId} emptyNoteTrigger={this.state.shouldChildrenRerender}/>
      </div>
    );
  }
}

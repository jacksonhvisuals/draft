import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';
import './styles/TitleEditor.css';
import 'draft-js/dist/Draft.css';


export class TitleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div className="title-editor-wrapper">
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

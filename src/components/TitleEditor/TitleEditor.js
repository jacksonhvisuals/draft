import React, {Component} from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import './TitleEditor.css';
import 'draft-js/dist/Draft.css';

export class TitleEditor extends Component {

  constructor(props) {
    super(props);
    this.state = { };

    const contentTitle = this.props.currentEditorState;

    if (contentTitle) {
      this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(contentTitle)));
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    const contentState = editorState.getCurrentContent();
    this.props.onTitleUpdate(1, JSON.stringify(convertToRaw(contentState)), editorState.getCurrentContent().getPlainText());
    // console.log(JSON.stringify(convertToRaw(contentState)));
    this.setState({
      editorState,
    });
  }

  render() {
    return (
      <div className="title-editor-wrapper">
        <Editor placeholder="Note title..." editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

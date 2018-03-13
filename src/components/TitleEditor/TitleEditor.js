import React, {Component} from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw, getPlainText} from 'draft-js';
import './TitleEditor.css';
import 'draft-js/dist/Draft.css';


export class TitleEditor extends Component {

  constructor(props) {
    super(props);
    this.state = { };

    const content = window.localStorage.getItem('content');

    if (content) {
      this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
    this.onChange = this.onChange.bind(this);
    this.saveContent = this.saveContent.bind(this);
  }

  saveContent(content) {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  onChange(editorState) {
    const contentState = editorState.getCurrentContent();
    this.props.onTitleUpdate(1, JSON.stringify(convertToRaw(contentState)), editorState.getCurrentContent().getPlainText());
    this.saveContent(contentState);
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

import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import './BodyEditor.css';

export class BodyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    const content = this.props.currentEditorState;

    if (content) {
        this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
      } else {
        this.state.editorState = EditorState.createEmpty();
      }
      this.onChange = this.onChange.bind(this);
    }

  shouldComponentUpdate(nextProps) {
    if (nextProps.currentEditorState !== this.props.currentEditorState) {
      console.log(nextProps.currentEditorState);
      return true;
    }
    return false;
  }

  componentWillReceiveProps() {
    const content = this.props.currentEditorState;

    if (content) {
        this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
      } else {
        this.state.editorState = EditorState.createEmpty();
      }
  }


  onChange(editorState) {
    const contentState = editorState.getCurrentContent();
    this.props.onBodyUpdate(1, JSON.stringify(convertToRaw(contentState)), editorState.getCurrentContent().getPlainText());
    this.setState({
      editorState,
    });
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    return (
      <div className="body-editor-wrapper">
        <Editor placeholder="Enter your note here..." editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} />
      </div>
    );
  }
}

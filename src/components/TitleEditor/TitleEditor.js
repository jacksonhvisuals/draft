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

  shouldComponentUpdate(nextProps) {
    if (nextProps.currentNoteId !== this.props.currentNoteId) {
      return true;
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    const content = nextProps.currentEditorState;
    if (content) {
      this.setState({editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content)))});
      } else {
        this.setState({editorState: EditorState.createEmpty()});
      }
  }

  onChange(editorState) {
    const contentState = editorState.getCurrentContent();
    this.props.onTitleUpdate(this.props.currentNoteId, JSON.stringify(convertToRaw(contentState)), editorState.getCurrentContent().getPlainText());
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

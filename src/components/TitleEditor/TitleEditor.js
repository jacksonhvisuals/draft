import React, {Component} from 'react';
import {Editor, EditorState, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default class TitleEditor extends Component {

  constructor(props) {
    super(props);
    this.state = { };

    const contentTitle = this.props.currentEditorState;

    if (contentTitle) {
        this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(contentTitle)));
    } else if (contentTitle === "") {
        this.state.editorState = EditorState.createEmpty();
    } else {
        this.state.editorState = EditorState.createEmpty();
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const content = nextProps.currentEditorState;
    if (nextProps.currentNoteId !== this.props.currentNoteId && content !== this.state.editorState && content !== "") {
      this.setState({editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content)))});
    } else if (content === "") {
      this.setState({editorState: EditorState.createEmpty()});
    }
  }

  onChange(editorState) {
    let contentState = editorState.getCurrentContent();
    this.setState({
      editorState,
    }, () => {this.props.onTitleUpdate(this.props.currentNoteId, JSON.stringify(convertToRaw(contentState)), contentState.getPlainText());});
  }

  render() {
    return (
      <div className="title-editor-wrapper">
        <Editor placeholder="Note title..." editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

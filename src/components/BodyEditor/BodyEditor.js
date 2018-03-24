import React, {Component} from 'react';
import {EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import './BodyEditor.css';
import '../../../node_modules/draft-js-emoji-plugin/lib/plugin.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

export class BodyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    const content = this.props.currentEditorState;

    if (content) {
        this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else if (content === "") {
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
    }, () => {this.props.onBodyUpdate(this.props.currentNoteId, JSON.stringify(convertToRaw(contentState)), contentState.getPlainText());});
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
        <Editor placeholder="Enter your note here..." editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} plugins={[emojiPlugin]} />
        <EmojiSuggestions />
      </div>
    );
  }
}

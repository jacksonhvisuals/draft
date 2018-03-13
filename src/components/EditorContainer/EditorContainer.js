import React, {Component} from 'react';
import '../EditorContainer/EditorContainer.css';
import {BodyEditor} from '../BodyEditor/BodyEditor';
import {TitleEditor} from '../TitleEditor/TitleEditor';

export class EditorContainer extends Component {

  render() {
    return(
      <div className='editor-container-element'>
        <TitleEditor className="title-editor-element" onTitleUpdate={this.props.titleUpdate} />
        <BodyEditor className="body-editor-element" onBodyUpdate={this.props.bodyUpdate} />
      </div>
    );
  }
}

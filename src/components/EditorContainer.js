import React, {Component} from 'react';
import './styles/EditorContainer.css';
import {BodyEditor} from './BodyEditor';
import {TitleEditor} from './TitleEditor';

export class EditorContainer extends Component {
  render() {
    return(
      <div className='editor-container-element'>
        <TitleEditor className="title-editor-element" />
        <BodyEditor className="body-editor-element" />
      </div>
    );
  }
}

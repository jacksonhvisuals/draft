import React, {Component} from 'react';
import './styles/EditorContainer.css';
import {BodyEditor} from './BodyEditor';

export class EditorContainer extends Component {
  render() {
    return(
      <div className='editor-container-element'>
        <BodyEditor />
      </div>
    );
  }
}

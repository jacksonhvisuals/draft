import React, {Component} from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
  render() {
    return(
      <div className='search-box-wrapper'>
        <div className='search-box-container'>
            <i className="material-icons search-icon">search</i>
            <div className='search-text'>Search</div>
        </div>
      </div>

    );
  }
}

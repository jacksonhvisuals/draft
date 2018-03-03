import React, {Component} from 'react';
import {ListItem} from './ListItem';
import './styles/ListContainer.css';

export class ListContainer extends Component {
  render() {
    return(
      <div className='list-container'>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

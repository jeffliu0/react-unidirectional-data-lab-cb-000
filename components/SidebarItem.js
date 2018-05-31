'use strict'

import React from 'react';
import classNames from 'classnames';

<<<<<<< HEAD
// Find first non-empty line and use as title.
const getTitle = file =>
  file.split('\n').find(line => line.length);

const SidebarItem = ({ file = '', isSelected, onClick }) => (
  <li className={classNames('sidebar__item', {
    'sidebar__item--selected': isSelected
  })}>
    <a href='#' onClick={onClick} className='sidebar__link'>
      {getTitle(file) || <em>Untitled</em>}
    </a>
  </li>
);

export default SidebarItem;
=======
export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const{file, isSelected, onClick} = this.props
    return (
      <li className = {isSelected ? "sidebar__item--selected":"sidebar__item"} onSelect={isSelected}>
        <a href='#' className="sidebar__link" onClick={onClick}>
          { file === ""? 'Untitled': getTitle(file)}
        </a>
      </li>
    );
  }
}
>>>>>>> 783c18b0ab0a2fdd6a7b931ca366ecad60642965

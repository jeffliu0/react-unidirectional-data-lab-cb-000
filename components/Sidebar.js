'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
<<<<<<< HEAD
    ev.preventDefault();
=======
    ev.preventDefault()
>>>>>>> 783c18b0ab0a2fdd6a7b931ca366ecad60642965
    this.props.onSelect(index)
  }

  render() {
    const { files, selectedFileIndex } = this.props;

    return (
      <ul className="sidebar">
        {
<<<<<<< HEAD
          files.map((item, i) => (
            <SidebarItem
              isSelected={selectedFileIndex === i}
              key={i}
              file={item}
              onClick={this.handleClick.bind(null, i)}
            />
          ))
        }

=======
          files.map((item,i) =>
           <SidebarItem file={item} key= {i} isSelected = {selectedFileIndex===i} onClick={this.handleClick.bind(null,i)} /> )
        }
>>>>>>> 783c18b0ab0a2fdd6a7b931ca366ecad60642965
      </ul>
    );
  }
}

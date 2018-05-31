
'use strict'

import React from 'react';
import Toolbar from './Toolbar';

<<<<<<< HEAD
const FileView = ({
  file,
  onChange,
  onAdd,
  onRemove
}) => (
  <div className="file-view">
    <Toolbar
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <textarea
      className="file-view__text"
      placeholder="Type some text here..."
      value={file}
      onChange={onChange}
    />
  </div>
);

export default FileView;
=======
export default class FileView extends React.Component {
  render() {
    const{file, onAdd, onChange, onRemove} = this.props
    return (
      <div className = "file-view">
        <Toolbar onAdd={onAdd} onRemove={onRemove} />
        <textarea value={file} onChange={onChange}>
        </textarea>
      </div>
    );
  }
}
>>>>>>> 783c18b0ab0a2fdd6a7b931ca366ecad60642965

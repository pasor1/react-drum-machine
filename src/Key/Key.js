import React from 'react';
import './Key.css'

const Key = (props) => {
  return (
    <div data-key={props.keyChar} className="key">
      <kbd>{props.keyName}</kbd>
      <span className="sound">{props.soundName}</span>
      <audio src={props.soundFile}></audio>
    </div>
  )
}

export default Key;
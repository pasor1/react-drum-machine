import React from 'react';
import './App.css';
import Key from './Key/Key';

const soundMap = [
  {
    key: 'a',
    keyName: 'A',
    soundName: 'clap',
    soundFile: 'assets/sounds/clap.wav'
  },
  {
    key: 's',
    keyName: 'S',
    soundName: 'hihat',
    soundFile: 'assets/sounds/kick.wav'
  },
  {
    key: 'd',
    keyName: 'D',
    soundName: 'kick',
    soundFile: 'assets/sounds/kick.wav'
  },
  {
    key: 'f',
    keyName: 'F',
    soundName: 'openhat',
    soundFile: 'assets/sounds/openhat.wav'
  },
  {
    key: 'g',
    keyName: 'G',
    soundName: 'boom',
    soundFile: 'assets/sounds/boom.wav'
  },
  {
    key: 'h',
    keyName: 'H',
    soundName: 'ride',
    soundFile: 'assets/sounds/ride.wav'
  },
  {
    key: 'j',
    keyName: 'J',
    soundName: 'snare',
    soundFile: 'assets/sounds/snare.wav'
  },
  {
    key: 'k',
    keyName: 'K',
    soundName: 'tom',
    soundFile: 'assets/sounds/tom.wav'
  },
  {
    key: ' ',
    keyName: 'SPACE',
    soundName: 'whooo',
    soundFile: 'assets/sounds/whoo.wav'
  },
]

const play = (key) => {
  // visual effect
  const drumKeyBox = document.querySelector(`div[data-key="${key}"]`);
  if (!drumKeyBox) return;
  drumKeyBox.classList.add('playing');
  // play sound
  const drumPlayer = drumKeyBox.querySelector('audio');
  drumPlayer.currentTime = 0;
  drumPlayer.play();
}

const stop = (key) => {
  // visual effect
  const drumKeyBox = document.querySelector(`div[data-key="${key}"]`);
  if (!drumKeyBox) return;
  drumKeyBox.classList.remove('playing');
}

// keyboard events
window.addEventListener('keydown', event => play(event.key));
window.addEventListener('keyup', event => stop(event.key));
class App extends React.Component {
  state = {
    mouseEventDisabled: false
  }

  startPlayHandler = (char, e) => {
    // prevent event call twice on touch devices that uses onTouchStart and onMouseDown at the same time
    if (e.type === 'touchstart') { this.setState({ mouseEventDisabled: true }) }
    if (e.type !== 'mousedown' || this.state.mouseEventDisabled === false) {
      play(char);
    }
  }

  stopPlayHandler = (char, e) => {
    if (e.type !== 'mouseup' || this.state.mouseEventDisabled === false) {
      stop(char);
    }
  }

  render = () => {
    return (
      <div className="App" >
        <div className="cover-container">
          <div className="keys">
            {
              soundMap.map(item => {
                return (
                  <Key
                    key={item.key}
                    keyChar={item.key}
                    keyName={item.keyName}
                    soundName={item.soundName}
                    soundFile={item.soundFile}
                    onTouchStart={(e) => this.startPlayHandler(item.key, e)}
                    onTouchEnd={(e) => this.stopPlayHandler(item.key, e)}
                    onMouseDown={(e) => this.startPlayHandler(item.key, e)}
                    onMouseUp={(e) => this.stopPlayHandler(item.key, e)}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;

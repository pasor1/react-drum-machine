import './App.css';
import Key from './Key/Key';

function play(key) {
  // visual effect
  const drumKeyBox = document.querySelector(`div[data-key="${key}"]`);
  if (!drumKeyBox) return;
  drumKeyBox.classList.add('playing');
  // play sound
  const drumPlayer = drumKeyBox.querySelector('audio');
  drumPlayer.currentTime = 0;
  drumPlayer.play();
}

function stop(key) {
  // visual effect
  const drumKeyBox = document.querySelector(`div[data-key="${key}"]`);
  if (!drumKeyBox) return;
  drumKeyBox.classList.remove('playing');
}

// keyboard events
window.addEventListener('keydown', event => play(event.key));
window.addEventListener('keyup', event => stop(event.key));

// mouse and touch events
const allKeys = document.querySelectorAll('.key');
allKeys.forEach(element => {
  element.addEventListener('touchstart', event => {
    event.preventDefault();
    play(event.currentTarget.getAttribute('data-key'))
  });
  element.addEventListener('mousedown', event => play(event.currentTarget.getAttribute('data-key')));
  element.addEventListener('touchend', event => stop(event.currentTarget.getAttribute('data-key')));
  element.addEventListener('mouseup', event => stop(event.currentTarget.getAttribute('data-key')));
})

const App = () => {
  return (
    <div className="App">
      <div className="cover-container">
        <div className="keys">
          <Key keyChar="a" keyName="A" soundName="clap" soundFile="assets/sounds/clap.wav" />
          <Key keyChar="s" keyName="S" soundName="hihat" soundFile="assets/sounds/hihat.wav" />
          <Key keyChar="d" keyName="D" soundName="kick" soundFile="assets/sounds/kick.wav" />
          <Key keyChar="f" keyName="F" soundName="openhat" soundFile="assets/sounds/openhat.wav" />
          <Key keyChar="g" keyName="G" soundName="boom" soundFile="assets/sounds/boom.wav" />
          <Key keyChar="h" keyName="H" soundName="ride" soundFile="assets/sounds/ride.wav" />
          <Key keyChar="j" keyName="J" soundName="snare" soundFile="assets/sounds/snare.wav" />
          <Key keyChar="k" keyName="K" soundName="tom" soundFile="assets/sounds/tom.wav" />
          <Key keyChar=" " keyName="SPACE" soundName="whoo" soundFile="assets/sounds/whoo.wav" />
        </div>
      </div>
    </div>
  );
}

export default App;

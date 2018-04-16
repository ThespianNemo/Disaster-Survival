import React, { Component } from 'react';
import './App.css';
import scenes from './scenes.json';
import Sound from 'react-sound';
import CitySounds from './Audio/City-of-Dread_Looping.mp3'

class App extends Component {
  constructor() {
    super();

    this.state = {
      scene_num: 0
    }
    
    this.audio = new Audio(CitySounds);
  }

  componentDidMount = () => {
    this.audio.play();
  }

  nextScene = (s) => {
    if ([40,41,42,43].indexOf(s) > -1){
      this.audio.pause();
    }else if(s == 0 || s == 1){
      this.audio.play();
    }
    //changes scene_num in state to whatever gets passed in
    this.setState({ scene_num: s });
  }

  render() {
    {/*url (string): The url of the sound to play.
    playStatus (Sound.status.{PLAYING,STOPPED,PAUSED}): The current sound playing status. Change it in successive renders to play, stop, pause and resume the sound.*/}
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Disaster Survival!</h1>
          {/* <Sound url="./Audio/City-of-Dread_Looping.mp3" playStatus="PLAYING" />; */}
        </header>

        {/*Contains the disaster history>*/}
        <div id="App-container-fluid">
          <p>{scenes[this.state.scene_num].text}</p>
        </div>

        <div id="App-container">
          <div className="col-container">
            <div className="col-md-{6}" className="col">
              <section className="game-section">
                <img className="circle" src={scenes[this.state.scene_num].image} alt="historical portrayals" width="400" height="400" />
              </section>
            </div>

            <div className="col-md-{6}" className="col">
              <section className="q-section">
                <div id="question">
                  <p>{scenes[this.state.scene_num].text2}</p>
                  {scenes[this.state.scene_num].options.map((op, i) =>
                    <span key={i}>
                      <a className="waves-effect waves-light btn red" onClick={() => this.nextScene(op.send_to)}>{op.text}</a>
                    </span>
                  )}
                  <br />
                  <br />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
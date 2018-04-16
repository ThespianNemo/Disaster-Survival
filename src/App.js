import React, { Component } from 'react';
import './App.css';
import scenes from './scenes.json';
import Sound from 'react-sound';
import CitySounds from './Audio/City-of-Dread_Looping.mp3'
import Happy from './Audio/Happy-Endings.mp3'

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
    if(s == 0 || s == 1){
      this.audio.pause();
      this.audio = new Audio(CitySounds);
      this.audio.play();
    } else if ([41,43].indexOf(s) > -1){
      this.audio.pause();
    } 
    
    if(s == 41 || s == 43){
      this.audio = new Audio(Happy);
      this.audio.play();
    }
    //changes scene_num in state to whatever gets passed in
    this.setState({ scene_num: s });
  }

  render() {
    const divStyle = {
      backgroundImage: `url('/images/dominik-kiss-341291-unsplash.jpg')`,
      height: "100vh",
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left top",
      backgroundSize: "cover"
    };
      
    return (
      <div className="App" style={divStyle}>

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Disaster Survival!</h1>
        </header>

        {/*Contains the disaster history>*/}
        <div id="App-container-fluid">
          <p>{scenes[this.state.scene_num].text}</p>
        </div>

        <div id="App-container">
          <div className="col-container">
            <div className="col-md-{6}" className="col">
              <section className="game-section">
                <img className="circle" src={scenes[this.state.scene_num].image} alt="historical portrayals" width="450" height="450" />
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
      </div>
    )
  }
}

export default App;
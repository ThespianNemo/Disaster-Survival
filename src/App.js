import React, { Component } from 'react';
import './App.css';
import scenes from './scenes.json';
import Sound from 'react-sound';

class App extends Component {
  constructor() {
    super();

    this.state = {
      scene_num: 0
    }
  }

  nextScene = (s) => {
    //changes scene_num in state to whatever gets passed in
    this.setState({ scene_num: s });
  }

  render() {
    return (

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
import React, { Component } from 'react';
import NumberPad from './NumberPad';
import PinTracker from './PinTracker';
import Scoreboard from './Scoreboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      attempt1: -1,
      attempt2: -1,
      totalPinsKnockedDown: 0,
      score: 0,
      currentFrame: 1,
      display: 'Choose number of pins for first attempt',
      scoreObj: {
        1: ['-', '-'],
        2: ['-', '-'],
        3: ['-', '-'],
        4: ['-', '-'],
        5: ['-', '-'],
        6: ['-', '-'],
        7: ['-', '-'],
        8: ['-', '-'],
        9: ['-', '-'],
        10: ['-', '-']
      }
    };
  }

  updateAttempts(attempt, val) {
    if (attempt === 1) {
      this.setState({ attempt1: val });
    } else if (attempt === 2 && this.state.attempt1 > -1 && this.state.attempt2 === -1) {
      this.setState({ attempt2: val });
    }
  }

  updateTotalPins(num) {
    let total = this.state.totalPinsKnockedDown;
    if (num + total <= 10) {
      this.setState({ totalPinsKnockedDown: num + total });
    }
  }

  updateDisplay(message) {
    this.setState({ display: message });
  }

  render() {
    return (
      <>
        <h1 className="heading">Bowling Scoreboard</h1>
        <NumberPad
          nums={this.state.pins}
          attempt1={this.state.attempt1}
          attempt2={this.state.attempt2}
          totalPinsKnockedDown={this.state.totalPinsKnockedDown}
          updateAttempts={this.updateAttempts.bind(this)}
          updateTotalPins={this.updateTotalPins.bind(this)}
          updateDisplay={this.updateDisplay.bind(this)}
        />
        <h3>{this.state.display}</h3>
        <Scoreboard frames={this.state.frames} scoreObj={this.state.scoreObj} />
        <PinTracker score={this.state.score} />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    this.state = {
       selColorIdx: 0,
       guesses: [this.getNewGuess(),this.getNewGuess()],
       code: this.genCode()
    }
  }

  getNewGuess() {
    // return a guess object
    return {
      // each guess has a code array and a nested score object
      //init array to null for no chosen color for those positions yet
      //score object hold perfect and almost properties init to 0 that renders pegs
      //comment until done testing  
      //code: [null,null,null,null],
        code: [3,2,1,0],
        score: {
          perfect: 0,
          almost: 0
        }
    };
  }

  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
   }

  render() {
    return (
      <div className="App">
        Selected color:{colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header>
         <div className="flex-h">
          <GameBoard 
            colors={colors}
            guesses={this.state.guesses}
          />
            <div>
              <ColorPicker 
                colors={colors}
                selColorIdx={this.state.selColorIdx}
              />
              <GameTimer />
              <NewGameButton />
            </div>
         </div>
        <footer className="component">footer</footer>
      </div>
    );
  }
}

export default App;

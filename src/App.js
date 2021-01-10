import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {

  state = this.initGame();

  /*------ Helper Methods/App Logic------*/
 initGame() {
   return {
  selColorIdx: 0,
  guesses: [this.getNewGuess()],
  code: this.genCode()
 };
}

  getNewGuess() {
    // return a guess object
    return {
      // each guess has a code array and a nested score object
      //init array to null for no chosen color for those positions yet
      //score object hold perfect and almost properties init to 0 that renders pegs
      //comment until done testing  
      code: [null,null,null,null],
        score: {
          perfect: 0,
          almost: 0
        }
    };
  }

  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
   }

   getWinTries(){
     //if winner, return num guesses, otherwise 0 (no winner)
     let lastGuessIdx = this.state.guesses.length - 1;
     return this.state.guesses[lastGuessIdx].score.perfect === 4 ? lastGuessIdx + 1 : 0
   }

/*-------Event Handler Methods---------*/

handleColorSelection = (colorIdx) => {
  this.setState({
    selColorIdx:colorIdx
  });
};

/*-------Life Cycle Methods---------*/
  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header className="App-header">R E A C T &nbsp;&nbsp;&nbsp; M A S T E R M I N D</header>
         <div className="flex-h align-flex-end">
          <GameBoard 
            colors={colors}
            guesses={this.state.guesses}
          />
            <div className='App-controls'>
              <ColorPicker 
                colors={colors}
                selColorIdx={this.state.selColorIdx}
                handleColorSelection={this.handleColorSelection}
              />
              <GameTimer />
              <NewGameButton />
            </div>
         </div>
        <footer className='App-footer'>{(winTries ? `You won in ${winTries} Guesses!` : `Good Luck!`)}</footer>
      </div>
    );
  }
}

export default App;

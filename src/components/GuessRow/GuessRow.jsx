import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import Scorebutton from '../ScoreButton/ScoreButton';

const GuessRow = (props) => (
    <div className='flex-h'>
        <div style={{color: props.currentGuess ? 'black' : 'lightgray'}}>
            {props.rowIdx + 1}
        </div>
        <GuessPegs 
            //to access the actual color value instead of the index
            colors={props.colors}
            //pegs dependent upon what color the player guesses, and is being stored in code prop
            //points to players input guess stored in getNewGuess
            code={props.guess.code}
        />
        {
            props.currentGuess ?
            <Scorebutton /> :
            <GuessScore 
                score={props.guess.score}
            />
        }
    </div>
);

export default GuessRow;
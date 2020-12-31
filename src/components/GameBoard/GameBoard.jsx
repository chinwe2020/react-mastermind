import React from 'react';
import GuessRow from '../GuessRow/GuessRow.jsx';

const GameBoard = (props) => (
    <div>
        {props.guesses.map((guess, idx) =>
            <GuessRow 
                guess={guess}
                colors={props.colors}
                rowIdx={idx}
                currentGuess= {idx === props.guesses.length - 1}
                /* internal prop */
                key={idx}
            />
        )}
    </div>
);

export default GameBoard;
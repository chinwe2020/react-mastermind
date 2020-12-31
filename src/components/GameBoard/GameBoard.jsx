import React from 'react';
import GuessRow from '../GuessRow/GuessRow.jsx';

const GameBoard = (props) => (
    <div className='component-vert'>
        GameBoard
        <GuessRow />
        <GuessRow />
    </div>
);

export default GameBoard;
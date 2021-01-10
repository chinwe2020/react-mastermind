import React from 'react';

const NewGameButton = (props) => (
    <button onClick={props.handleNewGame} className='btn btn-default'>
        New Game
    </button>
);

export default NewGameButton;
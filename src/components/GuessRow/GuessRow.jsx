import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => (
    <div className='flex-h'>
        GuessRow #
        <GuessPegs />
        <GuessScore />
    </div>
);

export default GuessRow;
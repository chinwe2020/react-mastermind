import React from 'react';
import './GuessScore.css';

const GuessScore = ({score}) => {
    //p = correct color + position (a correct guess)
    //a = correct color but wrong position
    //i = incorrect guess
    const scores = ('P'.repeat(score.perfect) + 'A'.repeat(score.almost) + 
        'I'.repeat(4 - score.perfect - score.almost)).split('');

    const baseStyle = {
        width: 10,
        height: 10,
        margin: 1,
        border: '2px solid',
        borderStyle: 'solid',
        borderRadius: '50%'
    };

    const pegStyles = {
        'P': {
            borderColor: 'black',
            backgroundColor: 'black'
        },
        'A': {
            borderColor: 'black',
            backgroundColor: 'white'
        },
        'I': {
            borderColor: 'white',
            backgroundColor: 'lightgrey'
        }
    }

    return (
        //an array of 4 things, map over and creating divs
        <div className='GuessScore'>
            {scores.map((score, idx) => <div key={idx} style={{...baseStyle, ...pegStyles[score]}}></div>)}
        </div>
    );
}

export default GuessScore;
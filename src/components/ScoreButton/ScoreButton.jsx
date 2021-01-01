import React from 'react';
import styles from './ScoreButton.module.css';

function Scorebutton(props){
    return(
        <button className={`${styles.button} btn btn-default`}>✔</button>
    );
}

export default Scorebutton;
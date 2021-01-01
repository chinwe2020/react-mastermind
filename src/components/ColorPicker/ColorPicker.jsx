import React from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker(props) {
    return(
        <div className={styles.ColorPicker}>
            {props.colors.map((color, idx) =>
                <button 
                    key={color} 
                    className={styles.button}
                    style={{
                        backgroundColor: props.selColorIdx === idx ? 'white' : 'white',
                        borderColor: color
                        }}
                    />
                
                )}
        </div>
    );
}

export default ColorPicker; 
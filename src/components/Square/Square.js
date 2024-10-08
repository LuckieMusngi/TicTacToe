import React, { useState } from 'react';
import styles from './Square.module.css';

export default function Square() {
    const [player, setPlayer] = useState('');
    const [active, setActive] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        if (inputValue != '') {
          setInputValue(e.target.value);
        } else {
          alert('Input Name');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayer(inputValue);
    };

    return (
        <div className={styles.container}>
            <p>{player}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    value={inputValue} 
                    placeholder='Something' 
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// Remove the `Square();` call at the end

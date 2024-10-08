import React, { useState } from 'react';
import styles from './Tile.module.css';

export default function Tile({inputPlayer='', currentPlayer, handlePlayTurn}) {
    // State to manage if the tile is active (clickable)
    const [active, setActive] = useState(true);

    const text = "";

    // Function to handle button press
    const handlePress = () => {
        // Toggle the active state
        setActive(!active);
        text = currentPlayer;
        handlePlayTurn();
    };

    return (
        <div className={[styles.container, styles.center].join(' ')}>
            {active ? 
                // Button to change state when active
                <button onClick={handlePress}>
                    {/* Empty button for clicking */}
                </button>
                :
                // Display inputPlayer value when not active
                <p className={styles.text}>{text}</p>
            }
        </div>
    )
}
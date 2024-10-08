import React, { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  // State to manage the input value for Player One
  const [inputValueOne, setInputValueOne] = useState("Player One");
  // State to manage the input value for Player Two
  const [inputValueTwo, setInputValueTwo] = useState("Player Two");
  // State to manage if the players have been set
  const [playersSet, setPlayerSet] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handlePlayTurn = (e) => {
    // Changes currentPlayer
    if (currentPlayer === 1) {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  // Handle change for Player One's input
  const handleChangeOne = (e) => {
    setInputValueOne(e.target.value);
  };

  // Handle change for Player Two's input
  const handleChangeTwo = (e) => {
    setInputValueTwo(e.target.value);
  };

  // Handle form submission for Player One
  const handleSubmit = (e) => {
    if (inputValueOne !== "" && inputValueTwo !== "") {
      setPlayerSet(true);
    }
    e.preventDefault();
    console.log(`Player One: ${inputValueOne}, PlayerTwo: ${inputValueTwo}`);
  };

  const inputPlayers = () => {
    return (
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.playerInputsContainer}>
            <input
              onChange={handleChangeOne}
              value={inputValueOne}
              className={styles.playerInput}
              placeholder="Enter Player Name"
            />
            <input
              onChange={handleChangeTwo}
              value={inputValueTwo}
              className={styles.playerInput}
              placeholder="Enter Player Name"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    );
  };

  const showCurrentPlayer = () => {
    return (
      <div className={styles.showPlayers}>
        <div className={styles.players}>X</div>
        <div className={styles.players}>O</div>
      </div>
    );
  };

  const showPlayers = () => {
    return (
      <div className={styles.showPlayerContainer}>
        <div className={styles.xPlayer}>
          <p>{inputValueOne}</p>
        </div>
        <div className={styles.oPlayer}>
          <p>{inputValueTwo}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={[styles.container]}>
      <div className={styles.inputContainer}>
        {playersSet ? showPlayers() : inputPlayers()}
      </div>

      <div className={styles.card}>
        <div className={styles.showCurrentPlayer}>{showCurrentPlayer()}</div>
        <div className={styles.boardContainer}>
          <p>Board</p>
        </div>
      </div>
    </div>
  );
}

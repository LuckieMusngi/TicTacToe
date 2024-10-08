import React, { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [inputValueOne, setInputValueOne] = useState("Player One");
  const [inputValueTwo, setInputValueTwo] = useState("Player Two");
  const [playersSet, setPlayerSet] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handlePlayTurn = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleChangeOne = (e) => {
    setInputValueOne(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setInputValueTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValueOne !== "" && inputValueTwo !== "") {
      setPlayerSet(true);
    }
    e.preventDefault();
    console.log(`Player One: ${inputValueOne}, Player Two: ${inputValueTwo}`);
  };

  const inputPlayers = () => (
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

  const showCurrentPlayer = () => (
    <div className={styles.showPlayers}>
      <div className={`${styles.players} ${currentPlayer === "X" ? styles.activePlayer : ""}`}>X</div>
      <div className={`${styles.players} ${currentPlayer === "O" ? styles.activePlayer : ""}`}>O</div>
    </div>
  );

  const showPlayers = () => (
    <div className={styles.showPlayerContainer}>
      <div className={`${styles.xPlayer} ${currentPlayer === "X" ? styles.activePlayer : ""}`}>
        <p>{inputValueOne}</p>
      </div>
      <div className={`${styles.oPlayer} ${currentPlayer === "O" ? styles.activePlayer : ""}`}>
        <p>{inputValueTwo}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
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

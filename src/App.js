import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import board from "./components/Board/board";

export default function App() {
  const [inputValueOne, setInputValueOne] = useState("Player One");
  const [inputValueTwo, setInputValueTwo] = useState("Player Two");
  const [playersSet, setPlayerSet] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [timer, setTimer] = useState(15);
  const b = new board();

  useEffect(() => {
    let interval;
    if (playersSet && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      // Logic for handling timer end
      handlePlayTurn();
    }
    return () => clearInterval(interval);
  }, [playersSet, timer]);

  const handlePlayTurn = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setTimer(15); // Reset the timer
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
      <div
        className={`${styles.players} ${
          currentPlayer === "X" ? styles.activePlayer : ""
        }`}
      >
        X
      </div>
      <div
        className={`${styles.players} ${
          currentPlayer === "O" ? styles.activePlayer : ""
        }`}
      >
        O
      </div>
    </div>
  );

  const showPlayers = () => (
    <div className={styles.showPlayerContainer}>
      <div className={styles.playerContainer}>
        <div
          className={`${styles.xPlayer} ${
            currentPlayer === "X" ? styles.activePlayer : ""
          }`}
        >
          <p>{inputValueOne}</p>
        </div>
        <div
          className={`${styles.oPlayer} ${
            currentPlayer === "O" ? styles.activePlayer : ""
          }`}
        >
          <p>{inputValueTwo}</p>
        </div>
      </div>

      <div className={styles.timerContainer}>
        <div
          className={styles.timer}
          style={{
            background: `linear-gradient(to right, black ${
              (timer / 15) * 100
            }%, white ${(timer / 15) * 100}%)`,
          }}
        >
        </div>
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
        <div className={styles.boardContainer}>{b.boardGUI()}</div>
      </div>
    </div>
  );
}

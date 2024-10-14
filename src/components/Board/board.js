import style from "./board.module.css";

export default class board {
  constructor() {
    // this.board is ["", "", "",
    //                "", "", "",
    //                "", "", ""]
    // note that there is no nesting
    this.boardArr = new Array(9).fill(":)");
  }

  getRow(index) {
    const rowIndex = index * 3;
    return new Array(
      this.boardArr[rowIndex],
      this.boardArr[rowIndex + 1],
      this.boardArr[rowIndex + 2]
    );
  }

  playMove(player, i) {
    if (player !== "X" && player !== "O") {
    }

    if (this.boardArr[i] !== " ") {
      //* ERROR
      console.log("index is already occupied");
      return;
    }
    this.boardArr[i] = player;
  }

  // returns 0 if no winner, 1 if player 1 wins and 2 if player 2 is winning
  getWinner() {
    if (this.hasWon("X")) {
      return 1;
    }
    if (this.hasWon("O")) {
      return 2;
    }
    return 0;
  }

  hasWon(curPlayer) {
    // the index trios in which a player can win
    // a player wins if they have pieces in all 3 indexes of one of these arrays
    const winCombs = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winCombs) {
      let found = true;
      for (const i of combination) {
        if (this.boardArr[i] !== curPlayer) {
          found = false;
        }
      }
      if (found) {
        return true;
      }
    }

    return false;
  }

  toString() {
    return this.boardArr.toString();
  }

  boardGUI() {
    return (
      <table className={style.board}>
        <thead>
          <tr>
            <th>{this.boardArr[0]}</th>
            <th>{this.boardArr[1]}</th>
            <th>{this.boardArr[2]}</th>
          </tr>
          <tr>
            <th>{this.boardArr[3]}</th>
            <th>{this.boardArr[4]}</th>
            <th>{this.boardArr[5]}</th>
          </tr>
          <tr>
            <th>{this.boardArr[6]}</th>
            <th>{this.boardArr[7]}</th>
            <th>{this.boardArr[8]}</th>
          </tr>
        </thead>
      </table>
    );
  }

  // otherBoardGUI() {
  //   return (
  //     <div className={style.guiContainer}>
  //       <div className={style.row}>
  //         {this.row.map((tile) => (
  //           <div className={style.tile} key={tile}>{tile}</div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
}

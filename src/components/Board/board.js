class board {
  constructor() {
    // this.board is ["", "", "",
    //                "", "", "",
    //                "", "", ""]
    this.board = new Array(9).fill(" ");
  }

  showRow(index) {
    //! doesn't work since its a 1d array now
    return this.board[index];
  }

  playMove(player, index) {
    if (this.board[i] != " ") {
        //* ERROR
        console.log("")
    }
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
    const winningIndexes = [
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

    for (const combination of winningIndexes) {
        let found = true;
        for (const i of combination) {
            if (this.board[i] != curPlayer) {
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
    return "just think about it";
  }

  getBoard() {
    return this.board;
  }
}

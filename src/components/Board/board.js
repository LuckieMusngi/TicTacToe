class board {
  constructor() {
    // this.board is ["", "", "",
    //                "", "", "",
    //                "", "", ""]
    this.board = new Array(9).fill(" ");
  }

  getRow(index) {
    const rowIndex = index * 3;
    return new Array(this.board[rowIndex], this.board[rowIndex + 1], this.board[rowIndex + 2]);
  }

  playMove(player, i) {
    if (player !== "X" && player !== "O") {

    } 

    if (this.board[i] !== " ") {
        //* ERROR
        console.log("index is already occupied");
        return;
    }
    this.board[i] = player;
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
            if (this.board[i] !== curPlayer) {
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
    return this.board.toString();
  }

  getBoard() {
    return this.board;
  }

  getBoardHTML() {

  }
}

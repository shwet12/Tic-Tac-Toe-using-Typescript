
export default class Game {
    turn: string;
    board: Array<string | null>
    player1: string
    player2: string
    player: string
    constructor(player1: string, player2: string) {
        this.turn = 'X';
        this.board = new Array(9).fill(null);
        this.player1 = player1;
        this.player2 = player2;
        this.player = player1;

    }

    nextTurn() {
        this.turn = this.turn === 'X' ? 'O' : 'X';
        console.log('nexture', this.player);
        this.player = this.player === this.player1 ? this.player2 : this.player1;
    }

    fillBoard(i: number) {
        console.log('shwet', this.board);
        if (!this.gameInProgress) {
            return;
        }
        if (!this.board[i]) {
            this.board[i] = this.turn;
            if (!this.findWinner()) {
                this.nextTurn();
            }

        }

    }

    findWinner(): Array<number> | null {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let combination = null;
        winningCombinations.forEach((value) => {
            const [x, y, z] = value;
            if (this.board[x] && this.board[x] === this.board[y] && this.board[x] === this.board[z]) {
                combination = value;
            }
        })
        return combination;
    }

    gameInProgress() {
        return !this.findWinner() && this.board.includes(null);
    }
}
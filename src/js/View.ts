import Game from "./Game";


export default class View {
    root: HTMLElement | null;
    restartBtn: HTMLElement | null
    onRestart: () => void;



    constructor(root: HTMLElement | null, game: Game, onRestart: () => void) {
        this.root = root;
        if (this.root) {
            this.root.innerHTML = `
            <div class="header">
            <div class="header__turn">
            </div>
            <div class="header__status">
            </div>
            <button type="button" class="header__restart">
            <i class="material-icons">refresh</i>
            </button>
            </div>
            <div class="board">
            <div class="board__tile" data-index="0">0</div>
            <div class="board__tile" data-index="1">0</div>
            <div class="board__tile" data-index="2">0</div>
            <div class="board__tile" data-index="3">0</div>
            <div class="board__tile" data-index="4">0</div>
            <div class="board__tile" data-index="5">0</div>
            <div class="board__tile" data-index="6">0</div>
            <div class="board__tile" data-index="7">0</div>
            <div class="board__tile" data-index="8">0</div>
            </div>
            `
            this.restartBtn = this.root.querySelector(".header__restart");
            this.root.querySelectorAll(".board__tile").forEach((tile: any) => {
                tile.addEventListener("click", () => {
                    game.fillBoard(tile.dataset.index);
                    this.update(game);
                });
            });
            // @ts-ignore: Object is possibly 'null'.
            this.restartBtn.addEventListener("click", () => {
                // this.update(new Game(game.player1, 'ravi'));
                onRestart()
            });
            this.update(game);
        }


    }

    update(game: Game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateTurn(game: Game) {
        this.root.querySelector(".header__turn").textContent = `${game.player}'s turn`;
    }

    updateStatus(game: Game) {
        let status = "In Progress";

        if (game.findWinner()) {
            status = `${game.player} is the Winner!`;
        } else if (!game.gameInProgress()) {
            status = "It's a tie!";
        }

        this.root.querySelector(".header__status").textContent = status;
    }

    updateBoard(game: Game) {
        const winningCombination = game.findWinner();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.board__tile[data-index="${i}"]`);

            tile.classList.remove("board__tile--winner");
            tile.textContent = game.board[i];

            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("board__tile--winner");
            }
        }
    }

}
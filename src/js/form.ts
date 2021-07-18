import Game from "./Game";


export default class Form {
    root: HTMLElement | null;
    gameForm: HTMLElement | null;
    player1: HTMLInputElement | null;
    player2: HTMLInputElement | null;
    formSubmitted: (a: string, b: string) => void;




    constructor(root: HTMLElement | null, formSubmitted: (a: string, b: string) => void) {
        this.root = root;
        if (this.root) {
            this.root.innerHTML = `
            <form id="game-form">
            <div class="form-group">
                <label for="player1">Player 1</label>
                <input type="text" id='player1' class='form-control'>
            </div>
            <div class="form-group">
                <label for="player2">Player 2</label>
                <input type="text" id='player2' class='form-control'>
            </div>
            <input type="submit" value='Start Game' class='btn btn-primary btn-block'>
        </form>`

        }
        this.gameForm = document.querySelector('#game-form');
        this.player1 = document.querySelector('#player1');
        this.player2 = document.querySelector('#player2');

        this.gameForm.addEventListener('submit', (ev) => {
            ev.preventDefault();
            formSubmitted(this.player1.value, this.player2.value)

        })
    }
}
import './css/style.css'
import View from './js/View';
import Game from './js/Game';
import Form from './js/form';


let game;

const onRestart = function (): void {
    let form = new Form(document.getElementById('root'), onSubmit);
}
const onSubmit = function (player1: string, player2: string): void {
    game = new Game(player1, player2);
    new View(document.getElementById('root'), game, onRestart);
}
let form = new Form(document.getElementById('root'), onSubmit);


// const onReset = game.


console.log(game);
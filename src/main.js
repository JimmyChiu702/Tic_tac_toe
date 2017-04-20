import Component from  './component.js';
import Banner from './banner.js';
import Grid from './grid.js';
import Reset from './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.banner = new Banner(root.querySelector('#banner'));

        this.grid = new Grid(root.querySelector('#grid'));
        this.grid.on('win', this.handleWin.bind(this));
        this.grid.on('changeTurn', this.handleChangeTurn.bind(this));

        this.reset = new Reset(root.querySelector('#reset'));
        this.reset.on('reset', this.handleRestClick.bind(this));

        this.bigRole = root.querySelector("#bigRole");
    }

    handleWin(firer, winner) {
        this.banner.win(winner);
        this.win(winner);
    }

    handleChangeTurn(firer, turn) {
        this.banner.changeTurn(turn);
    }

    handleRestClick() {
        this.grid.reset();
        this.banner.reset();
        this.root.style.backgroundColor = "rgb(240, 240, 240)";
        this.bigRole.textContent = " ";
    }

    win(winner){
        if(winner==0){
            this.bigRole.textContent = "X";
            this.root.style.backgroundColor = "rgba(240, 11, 100, 0.5)"
        }else if(winner==1){
            this.bigRole.textContent = "O";
            this.root.style.backgroundColor = "rgba(35, 227, 240, 0.5)";
        }else if(winner==2)this.root.style.backgroundColor = "rgba(255, 165,0, 0.5)";
    }
}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};

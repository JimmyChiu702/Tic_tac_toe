import Component from  './component.js';

import Cell from './cell.js';

import './grid.css';

export default class Grid extends Component {
    static getRootClass() {
        return '.grid';
    }

    constructor(root) {
        super(root);

        this.gameOver = false;
        this.turn = "X";
        this.put = 0;
        this.firstTurn = "X";
        this.cells = [];
        const els = root.querySelectorAll(Cell.getRootClass());
        for (let el of els) {
            const cell = new Cell(el);
            cell.on('click', this.handleCellClick.bind(this));
            this.cells.push(cell);
        }
    }

    reset() {
        this.gameOver = false;
        this.firstTurn = (this.firstTurn=="X")?"O":"X";
        this.turn = this.firstTurn;
        this.put = 0;
        this.fire('changeTurn', this.turn);
        for (let cell of this.cells)
            cell.reset();

    }

    handleCellClick(firer) {
        if(this.gameOver)
            return;
        if(!firer.isOccupied()){
            this.put++;
            firer.occupyCell(this.turn);
            firer.text(this.turn);
            this.check();
            this.changeTurn();
        }
    }

    check(){
        if(this.checkLine(0,1,2))this.win(this.cells[0].isMatch());
        if(this.checkLine(3,4,5))this.win(this.cells[3].isMatch());
        if(this.checkLine(6,7,8))this.win(this.cells[6].isMatch());
        if(this.checkLine(0,3,6))this.win(this.cells[0].isMatch());
        if(this.checkLine(1,4,7))this.win(this.cells[1].isMatch());
        if(this.checkLine(2,5,8))this.win(this.cells[2].isMatch());
        if(this.checkLine(0,4,8))this.win(this.cells[0].isMatch());
        if(this.checkLine(2,4,6))this.win(this.cells[2].isMatch());
        if(this.put==9&&this.gameOver==false)this.win(2);
    }

    checkLine(a, b, c) {
        if((this.cells[a].isMatch()===this.cells[b].isMatch())&&(this.cells[a].isMatch()===this.cells[c].isMatch())&&this.cells[a].isMatch()<2){
            for(let i=0; i<this.cells.length; i++){
                this.cells[i].op(i!=a&&i!=b&&i!=c);
            }
            return true;
        }else
            return false;
    }

    win(winner){
        this.gameOver = true;
        this.fire('win', winner);
    }

    changeTurn() {
        if(!this.gameOver){
            if(this.turn=="O")
                this.turn = "X";
            else
                this.turn = "O";
            this.fire('changeTurn', this.turn);
        }
    }
}

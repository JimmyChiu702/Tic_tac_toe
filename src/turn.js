import Component from  './component.js';

import './turn.css';

export default class Turn extends Component {
    static getRootClass() {
        return '.turn';
    }

    constructor(root) {
        super(root);

        this.turnDisplay = root.querySelector("#turn span");
        this.turnTextDisplay = root.querySelector("#turn font");
        this.turn = 1;
        this.reset();
    }

    reset() {
        console.log(this.turn+"fsd");
        this.turn = (this.turn==0)?1:0;
        console.log(this.turn+"5646");
        this.turnDisplay.textContent = (this.turn==0)?"X":"O";
        this.turnTextDisplay.textContent = "  " + "Turn";
    }

    win(winner) {
        if(winner==2){
            this.turnDisplay.textContent = "";
            this.turnTextDisplay.textContent = "DRAW";
        } else{
            if(winner==0)
                this.turnDisplay.textContent = "X";
            else
                this.turnDisplay.textContent = "O";
            this.turnTextDisplay.textContent = "  " + "WIN!";
        }
    }

    change(turn) {
        this.turnDisplay.textContent = turn;
    }
}

import Component from  './component.js';

import './cell.css';

export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }

    constructor(root) {
        super(root);

        root.addEventListener("click", this.handleDomClick.bind(this));
        this.content = 0;   // 0->X, 1->O, 3->non
        this.reset();
    }

    reset() {
        this.content = 2;
        this.root.textContent = " ";
        this.root.style.fontSize = "2rem";
        this.root.style.borderColor = "black";
        this.root.style.opacity = '1';
    }

    handleDomClick(e) {
        this.fire('click');
    }

    occupyCell(turn){
        if(turn=='X')
            this.content = 0;
        else
            this.content = 1;
    }

    isOccupied(){
        if(this.content==2)
            return false;
        else
            return true;
    }

    isMatch(){
        return this.content;
    }

    text(turn) {
        this.root.textContent = turn;
    }

    op(x){
        if(x==false){
            this.root.style.fontSize = "3rem";
            this.root.style.borderColor = "rgba(0, 0, 0, 0.1)";
        }else
            this.root.style.opacity = '0.1';
    }
}

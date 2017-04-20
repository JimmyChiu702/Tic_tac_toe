import Component from  './component.js';

import './role.css';

export default class Role extends Component {
    static getRootClass() {
        return '.role';
    }

    constructor(root) {
        super(root);

        this.x = 0;
        this.o = 0;

        this.xpntDisplay = root.querySelector("#xpnt");
        this.opntDisplay = root.querySelector("#opnt");
        this.xpntDisplay.textContent = "0";
        this.opntDisplay.textContent = "0";
        this.reset();
    }

    reset() {
        
    }

    win(winner){
        if(winner==0){
            this.x++;
            this.xpntDisplay.textContent = this.x.toString();
        } else if(winner==1) {
            this.o++;
            this.opntDisplay.textContent = this.o.toString();
        }
    }
}

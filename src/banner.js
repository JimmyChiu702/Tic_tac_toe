import Component from  './component.js';

import Role from "./role.js";
import Turn from "./turn.js";

import './banner.css';

export default class Banner extends Component {
    static getRootClass() {
        return '.banner';
    }

    constructor(root, color) {
        super(root);

        this.role = new Role(root);

        this.turn = new Turn(root.querySelector('#turn'));
    }

    reset() {
        this.role.reset();
        this.turn.reset();
    }

    win(winner) {
        this.role.win(winner);
        this.turn.win(winner);
    }

    changeTurn(turn) {
        this.turn.change(turn);
    }
}

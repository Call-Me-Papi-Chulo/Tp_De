import { Cup } from "./Cup";
import { Player } from "./Player";

export class Dice {

    public valeur: number = 0;

    constructor() {
        
    }

    lancer(): void {
        this.valeur = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }

}
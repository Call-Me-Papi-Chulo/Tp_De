import { Dice } from "./Dice";
import { Player } from "./Player";

export class Cup {

    public valeur: number = 0;
    public dice: Dice[] = [];

    constructor(){
    }

    lancer(...players: Player[]): void {
        players.map(player => {
            const newDice = new Dice();
            newDice.lancer();
            this.dice.push(newDice);
            player.score += newDice.valeur;
        });
    }

    afficherScore(): void {

        console.log(`[${this.dice.map(de => de.valeur)}]`);
        
    }

}
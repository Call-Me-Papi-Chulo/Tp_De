import { Cup } from "./Cup";
import { Player } from "./Player";

export class Game {

    public nbTours: number = 0;
    public cup!: Cup;
    public player: Player[] = [];

    constructor() {

    }

    public initialiserPartie(...joueurs: Player[]): void {
        this.player = joueurs;
        joueurs.map(player => {
            const newCup = new Cup();
            newCup.lancer(...joueurs);
            newCup.afficherScore();
        });
    }

    public lancerPartie(): void {

    }

    afficherGagnant(): void {
        let pResultMeme : Player[] = [];
        const result = Math.max.apply(Math, this.player.map(o => {
            return o.score;
            }
        ));

        this.player.map(p => {
            if (p.score === result){
                pResultMeme.push(p);
                console.log(`le gagnant est ${p.nom} avec le score de : ${result}`);
                p.score = 0;
                if (pResultMeme.length >= 2){
                    this.initialiserPartie(...pResultMeme);
                    this.afficherGagnant();
                }
            }
        });
    }



}
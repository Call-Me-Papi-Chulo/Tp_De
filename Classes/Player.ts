import { Cup } from "./Cup";

export class Player {

    public nom: string;
    public score: number = 0;

    constructor(nom: string){
        this.nom = nom;
    }

    jouer(goblet: Cup): void {

        goblet.lancer();

    }

    afficherScore(): void {

    }

}
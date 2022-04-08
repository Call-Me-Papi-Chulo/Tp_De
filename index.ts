import { Cup } from "./Classes/Cup";
import { Game } from "./Classes/Game";
import { Player } from "./Classes/Player";


const Joueur1 : Player = new Player('Arthur');
const Joueur2 : Player = new Player('Benjamin');
const Joueur3 : Player = new Player('Romain');

// const cup : Cup = new Cup();
// cup.lancer(Joueur1, Joueur2);
// cup.afficherScore();

const game1 = new Game();

game1.initialiserPartie(Joueur1, Joueur2, Joueur3);
game1.afficherGagnant();
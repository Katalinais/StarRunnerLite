import { GameFacade } from "./core/GameFacade.js";
import { KeyboardInputAdapter } from "./input/KeyboardInputAdapter.js";
import { HttpScoreService } from "./services/HttpScoreService.js";

kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  clearColor: [0, 0, 0, 1],
});

// --- Sprites ---
loadSprite("bean", "https://kaboomjs.com/sprites/dino.png");
loadSprite("coin", "https://kaboomjs.com/sprites/coin.png");
loadSprite("spike", "https://kaboomjs.com/sprites/spike.png");
loadSprite("block", "https://kaboomjs.com/sprites/grass.png");

// --- Constantes ---
const LANES = [width() / 2 - 120, width() / 2, width() / 2 + 120];

// --- Fondo carriles ---
const laneColors = [rgb(50, 50, 70), rgb(60, 60, 90), rgb(50, 50, 70)];
for (let i = 0; i < LANES.length; i++) {
  add([
    rect(width() / 3, height()),
    pos((width() / 3) * i, 0),
    color(laneColors[i]),
    anchor("topleft"),
    z(0),
  ]);
}

// --- Dependencias ---
const input = new KeyboardInputAdapter();
const scoreService = new HttpScoreService("/scores");

// --- Game Facade ---
const game = new GameFacade(LANES, scoreService, input);
game.start();

import { GameFacade } from "./src/core/GameFacade.js";
import { KeyboardInputAdapter } from "./src/input/KeyboardInputAdapter.js";
import { HttpScoreService } from "./src/services/HttpScoreService.js";


kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  clearColor: [0, 0, 0, 1],
});


loadSprite("bean", "https://kaboomjs.com/sprites/dino.png");
loadSprite("coin", "https://kaboomjs.com/sprites/coin.png");
loadSprite("spike", "https://kaboomjs.com/sprites/spike.png");
loadSprite("block", "https://kaboomjs.com/sprites/grass.png");


const LANES = [width() / 2 - 120, width() / 2, width() / 2 + 120];


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


const input = new KeyboardInputAdapter();
const scoreService = new HttpScoreService("/scores");

const game = new GameFacade(LANES, scoreService, input);
game.start();

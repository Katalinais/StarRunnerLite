import { ScoreUI } from "../ui/ScoreUI.js";
import { PlayerController } from "../player/PlayerController.js";
import { Spawner } from "./Spawner.js";
import { GameOverUI } from "../ui/GameOverUI.js";

export class GameFacade {
  constructor(lanes, scoreService, input) {
    this.lanes = lanes;
    this.scoreService = scoreService;
    this.input = input;
  }

  start() {
    this.scoreUI = new ScoreUI();
    this.player = new PlayerController(this.lanes, this.input, this.scoreUI);
    this.spawner = new Spawner(this.lanes);
    this.gameOverUI = new GameOverUI(this.scoreService);
  }

  restart() {
    go("main");
  }

  async saveScore(name, score) {
    await this.scoreService.saveScore({ name, score });
  }
}

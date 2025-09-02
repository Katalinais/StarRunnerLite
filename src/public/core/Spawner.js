export class Spawner {
  constructor(lanes) {
    this.lanes = lanes;

    loop(1.5, () => {
      const r = Math.random();

      if (r < 0.5) {
        this.spawnSmallObstacle();
      } else if (r < 0.7) {
        this.spawnBigObstacle();
      } else {
        this.spawnCoin();
      }
    });
  }

  // Obstáculo pequeño → solo ocupa un carril
  spawnSmallObstacle() {
    const lane = choose(this.lanes);

    add([
      sprite("block"),
      pos(lane, -40),
      area(),
      anchor("center"),
      move(DOWN, 200),
      scale(1),
      "obstacle-small",
      { lane },
      z(5),
    ]);
  }

  // Obstáculo grande → ocupa todos los carriles (bloque completo)
  spawnBigObstacle() {
    this.lanes.forEach((lane) => {
      add([
        sprite("spike"),
        pos(lane, -40),
        area(),
        anchor("center"),
        move(DOWN, 200),
        scale(1.5),
        "obstacle-big",
        { lane },
        z(5),
      ]);
    });
  }

  spawnCoin() {
    const lane = choose(this.lanes);

    add([
      sprite("coin"),
      pos(lane, -40),
      area(),
      anchor("center"),
      move(DOWN, 200),
      scale(1.2),
      "coin",
      { lane },
      z(5),
    ]);
  }
}

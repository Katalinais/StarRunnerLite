export class PlayerController {
  constructor(lanes, input) {
    this.lanes = lanes;

    this.player = add([
      sprite("bean"),
      pos(this.lanes[1], height() - 150),
      area(),
      anchor("center"),
      scale(1.2),
      z(10),
    ]);

    this.player.lane = 1;
    this.player.isJumping = false;

    this.setupInput(input);
    this.setupCollisions();
  }

  setupInput(input) {
    input.onLeft(() => this.moveLeft());
    input.onRight(() => this.moveRight());
    input.onJump(() => this.jump());
  }

  moveLeft() {
    if (this.player.lane > 0) {
      this.player.lane--;
      this.player.pos.x = this.lanes[this.player.lane];
      this.player.scale.x = -1.2;
    }
  }

  moveRight() {
    if (this.player.lane < this.lanes.length - 1) {
      this.player.lane++;
      this.player.pos.x = this.lanes[this.player.lane];
      this.player.scale.x = 1.2;
    }
  }

  jump() {
    if (!this.player.isJumping) {
      this.player.isJumping = true;
      this.player.scale.y *= -1;

      tween(this.player.pos.y, this.player.pos.y - 100, 0.3,
        (val) => { this.player.pos.y = val; },
        easings.easeOutQuad
      ).then(() => {
        tween(this.player.pos.y, height() - 150, 0.3,
          (val) => { this.player.pos.y = val; },
          easings.easeInQuad
        ).then(() => {
          this.player.scale.y *= -1;
          this.player.isJumping = false;
        });
      });
    }
  }

  setupCollisions() {
    this.player.onCollide("obstacle-small", () => {
      if (!this.player.isJumping) {
        go("gameover");
      }
    });

    this.player.onCollide("obstacle-big", () => {
      if (!this.player.isJumping) {
        go("gameover");
      }
    });
  }
}
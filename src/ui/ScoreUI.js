export class ScoreUI {
  constructor() {
    this.value = 0;
    this.label = add([
      text(`Score: 0`),
      pos(24, 24),
      { value: 0 },
    ]);
  }

  add(points) {
    this.value += points;
    this.label.text = `Score: ${this.value}`;
  }

  reset() {
    this.value = 0;
    this.label.text = "Score: 0";
  }
}

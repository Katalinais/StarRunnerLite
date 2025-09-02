export class GameOverUI {
  constructor(scoreService) {
    scene("gameover", (finalScore) => {
      add([
        rect(width(), height()),
        color(50, 50, 80),
        pos(0, 0),
        anchor("topleft"),
      ]);

      add([
        text("GAME OVER", { size: 48 }),
        pos(width() / 2, height() / 2 - 100),
        anchor("center"),
        color(255, 80, 80),
      ]);

      add([
        text(`Score: ${finalScore}`, { size: 32 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        color(255, 215, 0),
      ]);

      add([
        text("Press ENTER to Restart", { size: 24 }),
        pos(width() / 2, height() / 2 + 80),
        anchor("center"),
        color(220, 220, 220),
      ]);

      scoreService.getTopScores().then((scores) => {
        add([
          text("TOP 10", { size: 28 }),
          pos(50, 50),
          anchor("topleft"),
        ]);

        scores.forEach((s, i) => {
          add([
            text(`${i + 1}. ${s.name} - ${s.score}`, { size: 20 }),
            pos(50, 90 + i * 30),
            anchor("topleft"),
          ]);
        });
      });

      onKeyPress("enter", async () => {
        const name = prompt("Tu nombre:");
        await scoreService.saveScore({ name, score: finalScore });
        location.reload();
      });
    });
  }
}

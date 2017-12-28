export default class Scoreboard extends Phaser.Group {
  constructor(game) {
    super(game);

    const gameover = this.create(this.game.width / 2, 100, `game over`);
    gameover.anchor.setTo(0.5, 0.5);

    this.scoreboard = this.create(this.game.width / 2, 200, `scoreboard`);
    this.scoreboard.anchor.setTo(0.5, 0.5);

    this.scoreText = this.game.add.bitmapText(this.scoreboard.width, 180, `oswald`, ``, 18);
    this.add(this.scoreText);

    // add our start button with a callback
    this.startButton = this.game.add.button(this.game.width / 2, 300, `startButton`, this.startClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);

    this.add(this.startButton);

    this.y = this.game.height;
    this.x = 0;
  }
  startClick() {
    this.game.state.start(`Play`);
  }
  show(score) {
    this.scoreText.setText(score.toString());
    this.game.add.tween(this).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);
  }
}

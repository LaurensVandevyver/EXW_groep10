export default class Play2 extends Phaser.State {

  init() {
    this.score = 0;
  }

  create() {
    this.createBackground();
    this.createLogo();
    this.createScore();
    this.createTargets();
    this.startGeneratingTargets();

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createBackground() {
    this.brown = this.add.tileSprite(0, 0, this.game.width, this.game.height, `brown`);
    this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, `background`);
  }

  createLogo() {
    this.logo = this.add.sprite(10, 10, `smalllogo`);
  }

  createScore()  {
    this.scoreField = this.add.text(10, 170, `Score: 00`, {font: `20px Helvetica`, fill: `#333333`, fontWeight: `bold`});
  }

  createTomato() {
    this.tomato = this.add.sprite(this.input.activePointer.position.x, this.input.activePointer.position.y, `splash`);
    this.tomato.anchor.setTo(0.5, 0.5);
    this.physics.arcade.enable(this.tomato);
  }

  createTargets() {
    this.targets = this.add.group();
    this.targets.enableBody = true;
    this.targets.createMultiple(50, `target`);
    this.targets.setAll(`body.immovable`, true);
    this.targets.setAll(`checkWorldBounds`, true);
    this.targets.setAll(`outOfBoundsKill`, true);
  }

  createTarget() {
    const target = this.targets.getFirstDead();
    const xPos = Math.floor((Math.random() * this.game.width - 125) + 1);
    const yPos = Math.floor((Math.random() * this.game.height - 125) + 1);
    target.reset(xPos, yPos);
  }

  startGeneratingTargets() {
    this.targetGenerator = this.time.events.loop(Phaser.Timer.SECOND * 2, this.createTarget, this);
    this.targetGenerator.timer.start();
  }

  clickHandler() {
    if (this.input.activePointer.isDown) {
      this.createTomato();
    }
  }

  targetHit(target, tomato) {
    target.kill();
    tomato.kill();
    this.score++;
    this.scoreField.text = `Score: ${this.score}`;
  }

  checkCollision() {
    this.physics.arcade.overlap(this.tomato, this.targets, this.targetHit, null, this);
  }

  update() {
    this.clickHandler();
    this.checkCollision();
  }
}

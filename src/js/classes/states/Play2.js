import Scoreboard from '../objects/Scoreboard';

export default class Play2 extends Phaser.State {

  init() {
    this.score = 0;
    this.t = 6000;
  }

  create() {
    this.createBackground();
    this.createLogo();
    this.createScore();
    this.createTargets();
    this.createTime();
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
    this.scoreField = this.add.text(10, 200, `Score: 0`, {font: `40px Oswald`, fill: `#333333`, fontWeight: `bold`});
  }

  createTime() {
    this.timeField = this.add.text(10, 140, `Tijd: 60`, {font: `40px Oswald`, fill: `#333333`, fontWeight: `bold`});
  }

  createTomato() {
    this.tomato = this.add.sprite(this.input.activePointer.position.x, this.input.activePointer.position.y, `splash`);
    this.tomato.anchor.setTo(0.5, 0.5);
    //this.tomato.alpha --;
    this.physics.arcade.enable(this.tomato);
    //this.tomato.body.gravity.y = 200;
    this.tomatoDeleter = this.time.events.loop(Phaser.Timer.SECOND * 2, this.deleteTomato, this);
  }

  deleteTomato() {
    this.tomato.alpha --;
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
    if (this.t !== 0) {
      if (this.input.activePointer.isDown) {
        this.createTomato();
      }
    }
  }

  targetHit(target, tomato) {
    //this.time.events.add(1000, this.deleteTarget(tomato, target), this);
    target.kill();
    tomato.kill();
    this.score++;
    this.scoreField.text = `Score: ${this.score}`;
  }

  deleteTarget(target) {
    target.kill();
    console.log(`oops verwijderen`);
  }

  checkCollision() {
    this.physics.arcade.overlap(this.tomato, this.targets, this.targetHit, null, this);
    this.physics.arcade.overlap(this.targets, this.scoreField, this.deleteTarget, null, this);
    this.physics.arcade.overlap(this.targets, this.timeField, this.deleteTarget, null, this);
    this.physics.arcade.overlap(this.targets, this.logo, this.deleteTarget, null, this);
    //this.physics.arcade.overlap(this.tomato, this.logo, this.deleteTomatoo, null, this);
  }

  checkTime() {
    this.t --;
    this.timeField.text = `Tijd: ${Math.floor(this.t / 100)}`;
    if (this.t === 0) {
      this.gameOver();
    }
  }

  update() {
    this.clickHandler();
    this.checkCollision();
    this.checkTime();
  }

  gameOver() {
    console.log(`tis gedaan ze`);
    this.targetGenerator.timer.stop();
    this.scoreboard = new Scoreboard(this.game);
    this.add.existing(this.scoreboard);
    this.scoreboard.show(this.score);
  }
}

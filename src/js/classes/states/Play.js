import Target from '../objects/Target';

export default class Play extends Phaser.State {
  init() {
    this.startTime = this.time.now;
    console.log(this.startTime);
  }
  create() {
    this.createBackground();
    this.createLogo();
    this.createTargets();
    //this.startGeneratingTargets();
    this.cursors = this.input.keyboard.createCursorKeys();
    //this.createTimer();
  }

  createBackground() {
    this.brown = this.add.tileSprite(0, 0, this.game.width, this.game.height, `brown`);
    // this.background = this.add.sprite(0, 0, `background`);
    this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, `background`);
  }

  createLogo() {
    this.logo = this.add.sprite(10, 10, `smalllogo`);
  }

  createTargets() {
    this.targets = this.add.group();
    this.targets.enableBody = true;
    this.targets.createMultiple (50, `target`);
    this.targets.setAll(`body.immovable`, true);
    this.targets.setAll(`checkWorldBounds`, true);
    this.targets.setAll(`outOfBoundsKill`, true);
    this.targetTimer = this.time.events.loop(2000, this.createTarget, this);
    //console.log(this.targets);
  }

  createTarget() {
    const target = this.targets.getFirstDead();
    const xPos = Math.floor((Math.random() * this.game.width - 125) + 1);
    const yPos = Math.floor((Math.random() * this.game.height - 125) + 1);
    target.reset(xPos, yPos);
    console.log(target);
    this.targetDeleter = this.time.events.loop(Phaser.Timer.SECOND * 2, this.deleteTarget, this);
  }

  startGeneratingTargets() {
    this.targetGenerator = this.time.events.loop(Phaser.Timer.SECOND * 2, this.createTarget, this);
    this.targetGenerator.timer.start();
  }

  endGame() {
    console.log(`the game has ended`);
  }

  createTimer() {
    let seconds = 60;
    const timeBoard = document.getElementsByClassName(`time`);
    //console.log(timeBoard);
    seconds --;
    //console.log(seconds);
    timeBoard.innerHtml = seconds;
  }

  throw() {
    if (this.input.activePointer.isDown) {
      if (this.mouseClicked) {
        this.time.events.add(1500, this.prevent, this);
      } else {
        this.createTomato();
      }
    }
  }

  prevent() {
    console.log(`hoi`);
  }

  createTomato() {
    console.log(`tomato created`);
    this.tomato = this.add.sprite(this.input.activePointer.position.x, this.input.activePointer.position.y, `splash`);
    this.tomato.enableBody = true;
    this.tomato.anchor.setTo(0.5, 0.5);
    this.tomato.immovable = true;
    this.tomato.checkWorldBounds = true;
    this.tomato.outOfBoundsKill = true;
  }

  update() {
    // this.createTimer();
    // const time = Math.round(this.game.time.totalElapsedSeconds());
    // const maxTime = 60;
    // const countDown = maxTime - time;
    // //console.log(countDown);
    // const alltext = this.add.text(this.world.centerX - 80, this.world.centerY, countDown);
    // alltext.anchor.setTo(.5, .5);
    //
    // if (countDown === 0) {
    //   this.endGame();
    // }
    this.throw();
    this.checkCollision();
    //console.log(this.tomato);
  }

  checkCollision() {
    this.physics.arcade.overlap(this.tomato, this.targets, this.hitTarget, null, this);
  }

  hitTarget() {
    console.log(`hit`);
    //this.score++;
  }

}

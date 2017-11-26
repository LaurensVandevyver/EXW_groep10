import Button from '../objects/Button';
import Target from '../objects/Target';

export default class Menu extends Phaser.State {
  create() {
    this.createBackground();
    this.createLogo();
    this.createInvite();
    this.createWoman();
    this.startGeneratingTargets();
    //this.createButton();
  }

  createBackground() {
    this.brown = this.add.tileSprite(0, 0, this.game.width, this.game.height, `brown`);
    // this.background = this.add.sprite(0, 0, `background`);
    this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, `background`);
  }

  createLogo() {
    this.logo = this.add.sprite(10, 10, `smalllogo`);
  }

  createWoman() {
    this.woman = this.add.sprite(this.game.width - 280, this.game.height - 530, `woman`);
  }

  createInvite() {
    const playButton = new Button(this.game, this.world.centerX, this.world.height - 100, this.buttonClicked, this, `blue`, `Kom dichter om te starten`);
    playButton.anchor.setTo(0.5, 0.5);
    this.add.existing(playButton);
  }

  buttonClicked() {
    this.state.start(`Intro`);
  }


  createTarget() {
    const target = new Target(this.game, this.platforms);
    target.reset(target.width, this.world.centerY);
  }

  startGeneratingTargets() {
    this.targetGenerator = this.time.events.loop(Phaser.Timer.SECOND * 2, this.createTarget, this);
    this.targetGenerator.timer.start();
  }

}

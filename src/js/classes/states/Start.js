import Button from '../objects/button';

export default class Menu extends Phaser.State {
  create() {
    this.createBackground();
    this.createLogo();
    this.createInvite();
    //this.createButton();
  }

  createBackground() {
    this.brown = this.add.tileSprite(0, 0, this.game.width, this.game.height, `brown`);
    this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, `background`);
  }

  createLogo() {
    this.logo = this.add.sprite(this.game.width / 2, this.game.height / 2, `logo`);
    this.logo.anchor.setTo(.5, .5);
  }

  createInvite() {
    const playButton = new Button(this.game, this.world.centerX, this.world.height - 100, this.buttonClicked, this, `blue`, `Kom dichter om te starten`);
    playButton.anchor.setTo(0.5, 0.5);
    this.add.existing(playButton);
  }

  buttonClicked() {
    this.state.start(`Intro`);
  }

}

import Button from '../objects/Button';

export default class Menu extends Phaser.State {
  create() {
    this.createBackground();
    this.createLogo();
    this.createInvite();
    this.createUitleg();
    //this.createText();
    //this.createWoman();
  }

  createBackground() {
    this.brown = this.add.tileSprite(0, 0, this.game.width, this.game.height, `brown`);
    // this.background = this.add.sprite(0, 0, `background`);
    this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, `background`);
  }

  createLogo() {
    this.logo = this.add.sprite(10, 10, `smalllogo`);
  }

  createUitleg() {
    this.gooi = this.add.sprite((this.game.width / 2) - 429, this.game.height / 2, `gooi`);
    this.gooi.anchor.setTo(1, 0.5);

    this.raak = this.add.sprite(this.game.width / 2, (this.game.height / 2) + 30, `raak`);
    this.raak.anchor.setTo(0.5, 0.5);

    this.score = this.add.sprite((this.game.width / 2) + 349, (this.game.height / 2) + 30, `score`);
    this.score.anchor.setTo(0, 0.5);
  }

  createInvite() {
    const playButton = new Button(this.game, this.world.centerX, this.world.height - 100, this.buttonClicked, this, `blue`, `Zwaai om te starten`);
    playButton.anchor.setTo(0.5, 0.5);
    this.add.existing(playButton);
  }

  buttonClicked() {
    this.state.start(`Play`);
  }

}

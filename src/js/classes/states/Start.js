export default class Menu extends Phaser.State {
  create() {
    this.createBackground();
    this.createLogo();
    //this.createButton();
  }

  createBackground() {
    this.brown = this.add.tileSprite(0, 0, this.game.width, this.game.height, `brown`);
    this.background = this.add.sprite(0, 0, `background`);
  }

  createLogo() {
    this.logo = this.add.sprite(this.game.width / 2, this.game.height / 2, `logo`);
    this.logo.anchor.setTo(.5, .5);
  }

}

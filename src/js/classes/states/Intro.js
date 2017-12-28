import Button from '../objects/Button';

export default class Menu extends Phaser.State {
  create() {
    this.createBackground();
    this.createLogo();
    this.createInvite();
    this.createText();
    this.createWoman();
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

  createText() {
    //const text = `- phaser -\n with a sprinkle of \n pixi dust.`;
    const ballon = this.add.sprite(this.world.centerX, this.world.centerY, `textballon`);
    ballon.anchor.setTo(.5, .5);
    const text =
      `      Hallo daar!
      Of zoals wij het zeggen “¡Hola”.
      Vandaag is het de dag van La Tomatina!
      Zwaai om mee te doen!`;
    const style = {font: `20px Oswald`, fill: `#000000`, align: `left`, borderRadius: `5px`, wordWrapWidth: ballon.width};

    const alltext = this.add.text(this.world.centerX - 80, this.world.centerY, text, style);
    alltext.anchor.setTo(.5, .5);
  }

  createInvite() {
    this.game.time.events.add(Phaser.Timer.SECOND  * 5, this.buttonClicked, this);
  }

  buttonClicked() {
    this.state.start(`Uitleg`);
  }

}

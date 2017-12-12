export default class Preload extends Phaser.State {
  preload() {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, `preloader`);
    this.asset.animations.add(`preloading`);
    this.asset.animations.play(`preloading`, 30, true);
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.image(`background`, `assets/img/bg.png`);
    this.load.image(`brown`, `assets/img/brown.png`);
    this.load.image(`logo`, `assets/img/logo.png`);
    this.load.image(`smalllogo`, `assets/img/smalllogo.png`);
    this.load.image(`woman`, `assets/img/woman.png`);
    this.load.image(`textballon`, `assets/img/ballon.png`);
    this.load.image(`button`, `assets/img/button.png`);
    this.load.image(`gooi`, `assets/img/gooi.png`);
    this.load.image(`raak`, `assets/img/raak.png`);
    this.load.image(`score`, `assets/img/score.png`);
    this.load.image(`target`, `assets/img/target.png`);
    this.load.image(`splash`, `assets/img/splash.png`);
    // this.load.atlasJSONHash('components', 'assets/components.png', 'assets/components.json');
    // this.load.atlasJSONHash('player', 'assets/player.png', 'assets/player.json');
    // this.load.atlasJSONHash('tiles', 'assets/tiles.png', 'assets/tiles.json');

    // this.load.audio(`coin`, `assets/coin.mp3`);
    // this.load.audio(`explosion`, `assets/explosion.wav`);
    // this.load.audio(`jump`, `assets/jump.wav`);
  }
  create() {
    this.state.start(`Start`);
  }
}

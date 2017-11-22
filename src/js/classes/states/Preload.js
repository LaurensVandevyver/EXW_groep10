export default class Preload extends Phaser.State {
  preload() {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, `preloader`);
    this.asset.animations.add(`preloading`);
    this.asset.animations.play(`preloading`, 30, true);
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.image(`background`, `assets/img/bg.png`);
    this.load.image(`brown`, `assets/img/brown.png`);
    this.load.image(`logo`, `assets/img/logo.png`);
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

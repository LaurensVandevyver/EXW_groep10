import Target from '../objects/Target';

export default class Play extends Phaser.State {
  create() {
    this.createBackground();
    this.createLogo();
    this.startGeneratingTargets();
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
    this.targets.createMultiple (30, `target`);
    this.targets.setAll(`body.immovable`, true);
    this.targets.setAll(`checkWorldBounds`, true);
    this.targets.setAll(`outOfBoundsKill`, true);
    const target = new Target(this.game, this.platforms);
    target.reset(target.width, this.world.centerY);
  }

  createTarget() {
    const target = this.targets.getFirstDead();
    target.reset(this.game.width, this.game.height - 420 - this.rnd.integerInRange(0, 2) * 70);
    target.body.velocity.x = - 200;
  }

  startGeneratingTargets() {
    this.targetGenerator = this.time.events.loop(Phaser.Timer.SECOND / 2, this.createTarget, this);
    this.targetGenerator.timer.start();
  }


}

export default class Target extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    this.setAll(`body.velocity.x`, - 200);
    console.log(`target created`);
  }

  // update() {
  //   if(!this.leftTile.inWorld && !this.rightTile.inWorld) {
  //     this.exists = false;
  //   }
  // }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.setAll(`body.velocity.x`, - 200);
    this.exists = true;
  }
}

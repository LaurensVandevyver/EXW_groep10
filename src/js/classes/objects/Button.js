export default class Button extends Phaser.Button {
  constructor(game, x, y, callback, callbackContext, colorName, label) {
    super(game, x, y, `components`, callback, callbackContext);
    this.labelField = new Phaser.Text(game, 0, 0, ``, {
      font: `25px Oswald`,
      fill: `#000000`
    });
    this.labelField.anchor.setTo(0.5, 0.5);
    this.addChild(this.labelField);
    this.label = label;
  }
  set label(value) {
    this.labelField.text = value;
  }
  get label() {
    return this.labelField.text;
  }
}

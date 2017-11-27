import Boot from './states/Boot';
import Preload from './states/Preload';
import Start from './states/Start';
import Intro from './states/Intro';
import Uitleg from './states/Uitleg';
import Play from './states/Play';

export default class Game extends Phaser.Game {
  constructor() {
    super(`100%`, `100%`, Phaser.AUTO);
    this.state.add(`Boot`, Boot);
    this.state.add(`Preload`, Preload);
    this.state.add(`Start`, Start);
    this.state.add(`Intro`, Intro);
    this.state.add(`Uitleg`, Uitleg);
    this.state.add(`Play`, Play);
    this.state.start(`Boot`);
  }
}

import * as PIXI from 'pixi.js';
import * as PIXISound from 'pixi-sound';

window.PIXI = PIXI;
window.PIXISound = PIXISound;
window.window.PIXI.sound = PIXISound.default;

const snakeApplication = new window.PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  transparent: false,
  resolution: 1,
});

window.PIXI.Ticker.maxFPS = 1;
snakeApplication.ticker.maxFPS = 1;

document.body.appendChild(snakeApplication.view);

const graphics = new PIXI.Graphics();

let x = 0;
const y = 0;
const moveByPx = 10;

snakeApplication.ticker.add(() => {
  x += moveByPx;
  graphics.clear();
  graphics.beginFill(0xADFF2F);
  graphics.drawRect(x, y, 10, 10);
});

snakeApplication.stage.addChild(graphics);

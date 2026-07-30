import Phaser from "phaser";
import { PreloadScene } from "./scenes/preloadScene";
import { GameScene } from "./scenes/gameScene";
import { EndScene } from "./scenes/endScene";
import { GAME } from "./constants/constants";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.NO_CENTER,
    height: GAME.HEIGHT,
    width: GAME.WIDTH,
    expandParent: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: [PreloadScene, GameScene, EndScene],
};

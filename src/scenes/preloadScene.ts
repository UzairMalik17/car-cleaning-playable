import Phaser from "phaser";
import { CARS_BASE64, HAND_BASE64, DIRT_BASE64 } from "../assets/assets";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene" });
  }

  preload() {
    this.add
      .text(360, 640, "Loading Game...", {
        fontSize: "28px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.loadAssets();
  }

  create() {
    this.scene.start("GameScene");
  }

  private loadAssets() {
    this.load.image("dirt", DIRT_BASE64);

    CARS_BASE64.forEach((carBase64, index) => {
      this.load.image(`car${index + 1}`, carBase64);
    });

    const buttonGraphics = this.make.graphics({
      x: 0,
      y: 0,
    });
    buttonGraphics.fillStyle(0x2ecc71, 1);
    buttonGraphics.fillRoundedRect(0, 0, 240, 80, 16);
    buttonGraphics.generateTexture("button", 240, 80);
    buttonGraphics.destroy();

    const dustGraphic = this.make.graphics({ x: 0, y: 0 });
    dustGraphic.fillStyle(0xcccccc, 1);
    dustGraphic.fillCircle(4, 4, 4);
    dustGraphic.generateTexture("dust_particle", 8, 8);
    dustGraphic.destroy();

    this.load.image("hand", HAND_BASE64);
  }
}

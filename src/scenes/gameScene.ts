import Phaser from "phaser";
import { DirtSpot } from "../components/dirtSpot";
import { CAR, GAME } from "../constants/constants";

export class GameScene extends Phaser.Scene {
  private spotsRemaining: number = 4;
  private timeLeft: number = 15;
  private timerText!: Phaser.GameObjects.Text;
  private timerEvent!: Phaser.Time.TimerEvent;
  private handGuide!: Phaser.GameObjects.Sprite;

  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    this.cameras.main.setBackgroundColor(GAME.COLOR);
    this.spotsRemaining = 4;
    this.timeLeft = 15;

    const carKeys = ["car1", "car2", "car3"];
    const selectedCarKey = Phaser.Math.RND.pick(carKeys);

    const car = this.add.image(CAR.X, CAR.Y, selectedCarKey).setOrigin(0.5);
    car.setDisplaySize(550, 350);
    car.setDepth(0);

    this.add
      .text(360, 100, "TAP ALL DIRT SPOTS TO CLEAN!", {
        fontSize: "28px",
        color: "#ffffff",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    this.timerText = this.add
      .text(360, 160, `TIME: ${this.timeLeft}s`, {
        fontSize: "24px",
        color: "#f1c40f",
      })
      .setOrigin(0.5);

    const positions: { x: number; y: number }[] = [];
    const MIN_DISTANCE = 80;

    while (positions.length < this.spotsRemaining) {
      const randomX = Phaser.Math.Between(CAR.MIN_X, CAR.MAX_X);
      const randomY = Phaser.Math.Between(CAR.MIN_Y, CAR.MAX_Y);

      const isTooClose = positions.some(
        (pos) => Math.hypot(pos.x - randomX, pos.y - randomY) < MIN_DISTANCE,
      );

      if (isTooClose) continue;

      positions.push({ x: randomX, y: randomY });
      new DirtSpot(this, randomX, randomY, () => this.handleSpotCleaned());
    }

    this.handGuide = this.add.sprite(
      positions[0].x + 30,
      positions[0].y + 30,
      "hand",
    );
    this.handGuide.setDisplaySize(40, 40);
    this.tweens.add({
      targets: this.handGuide,
      y: positions[0].y + 50,
      duration: 500,
      yoyo: true,
      repeat: -1,
    });

    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: this.tickTimer,
      callbackScope: this,
      loop: true,
    });
  }

  private handleSpotCleaned() {
    if (this.handGuide && this.handGuide.active) {
      this.handGuide.destroy();
    }

    this.spotsRemaining--;

    if (this.spotsRemaining <= 0) {
      this.timerEvent.destroy();
      this.cameras.main.shake(150, 0.004);
      this.time.delayedCall(200, () => {
        this.scene.start("EndScene", { result: "WIN" });
      });
    }
  }

  private tickTimer() {
    this.timeLeft--;
    this.timerText.setText(`TIME: ${this.timeLeft}s`);

    if (this.timeLeft <= 0) {
      this.timerEvent.destroy();
      this.cameras.main.shake(150, 0.004);
      this.scene.start("EndScene", { result: "LOSE" });
    }
  }
}

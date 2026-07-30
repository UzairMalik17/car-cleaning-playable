import Phaser from "phaser";

export class DirtSpot extends Phaser.GameObjects.Sprite {
  private isCleaned: boolean = false;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    onCleanCallback: () => void,
  ) {
    super(scene, x, y, "dirt");

    this.setDisplaySize(60, 60);
    this.setInteractive({ useHandCursor: true });
    scene.add.existing(this);

    this.on("pointerdown", () => {
      if (this.isCleaned) return;

      this.isCleaned = true;
      this.off("pointerdown");
      this.disableInteractive();

      const emitter = this.scene.add.particles(
        this.x,
        this.y,
        "dust_particle",
        {
          speed: { min: 50, max: 150 },
          scale: { start: 1, end: 0 },
          alpha: { start: 1, end: 0 },
          lifespan: 300,
          blendMode: "ADD",
        },
      );

      emitter.explode(8);

      this.scene.time.delayedCall(350, () => {
        emitter.destroy();
      });

      onCleanCallback();

      this.scene.tweens.add({
        targets: this,
        scale: 0,
        alpha: 0,
        duration: 200,
        onComplete: () => {
          this.destroy();
        },
      });
    });
  }
}

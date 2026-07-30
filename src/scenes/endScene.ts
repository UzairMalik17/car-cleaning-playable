import Phaser from "phaser";

export class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: "EndScene" });
  }

  create(data: { result: "WIN" | "LOSE" }) {
    const isWin = data.result === "WIN";

    const titleText = isWin ? "ALL CLEAN! PERFECT!" : "TIME'S UP!";
    const titleColor = isWin ? "#2ecc71" : "#e74c3c";

    this.add
      .text(360, 480, titleText, {
        fontSize: "40px",
        color: titleColor,
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    const button = this.add
      .sprite(360, 680, "button")
      .setInteractive({ useHandCursor: true });

    const buttonText = isWin ? "PLAY AGAIN" : "TRY AGAIN";
    this.add
      .text(360, 680, buttonText, {
        fontSize: "22px",
        color: "#ffffff",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    button.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}

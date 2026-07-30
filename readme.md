# Car Cleaning Playable Ad

## Description

Car Cleaning Playable Ad is a simple interactive 2D game built with **Phaser 3**. The objective is to clean all the dirt spots from a randomly selected car before the timer runs out.

### Features

- Built with **Phaser 3** and **TypeScript**
- Responsive layout that scales across different screen sizes
- Randomly selected car and dirt spot placement for replayability
- Clear objective with win and game over states
- Interactive tutorial hand indicator for first-time players
- Embedded Base64 assets
- Clean and modular project structure

---

## Controls

- **Desktop:** Click on each dirt spot to clean the car.
- **Mobile:** Tap on each dirt spot.

Clean every dirt spot before the timer reaches zero to win.

---

## Project Structure

```text
src/
├── assets/
├── components/
├── constants/
├── scenes/
├── config.ts
└── main.ts
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the URL displayed in the terminal (typically `http://localhost:5173`).

---

## Build for Production

```bash
npm run build
```

The production build will be generated in the `dist` folder.

---

## Technologies Used

- Phaser 3
- TypeScript
- Vite

---

## Assumptions

- The playable is designed to be completed within a short session, similar to mobile playable advertisements.
- Mouse clicks and touch input provide equivalent gameplay.
- The focus of the project is demonstrating Phaser fundamentals, code organization, and responsiveness rather than creating a feature-rich game.

---

## Trade-offs

- The gameplay was intentionally kept simple to prioritize clean architecture, readability, and maintainability within the assessment timeframe.
- Physics-based interactions and advanced visual effects were omitted because they were not necessary for the core gameplay.
- Only essential game mechanics were implemented to keep the playable lightweight and suitable for HTML5 deployment.

---

## Future Improvements

If given more time, I would consider adding:

- Sound effects and background music
- Particle effects and additional visual polish
- Difficulty progression with multiple levels
- Animated UI transitions
- More varied car models and cleaning challenges
- High score tracking and replay statistics
- Additional touch feedback and accessibility improvements

---

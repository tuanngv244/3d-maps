import { GameState } from "@/App";

// Collect star
const collectStar = (starId: string, mapName: string) => {
  if (!GameState.collectedStars.has(starId)) {
    GameState.collectedStars.add(starId);
    GameState.score += 20;
    GameState.starCollected += 1;
    GameState.mapStars[mapName].collected += 1;

    // Check if all stars collected
    if (GameState.starCollected >= GameState.totalStar) {
      GameState.gameStatus = "winner";
    }
  }
};

// Reset game state
const resetGame = () => {
  GameState.score = 0;
  GameState.starCollected = 0;
  GameState.gameStatus = "playing";
  GameState.collectedStars.clear();
  Object.keys(GameState.mapStars).forEach((map) => {
    GameState.mapStars[map].collected = 0;
  });
};

export const coreFuns = {
  resetGame,
  collectStar,
};

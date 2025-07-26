import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { useSnapshot } from "valtio";
import { GameState } from "@/App";
import { Progress } from "@/components/ui/8bit/progress";
import { EGameStatus } from "@/models/general";

type Props = {};

const ScoreBoard: FC<Props> = ({}) => {
  const { score, health, inventory, gameStatus, starCollected, totalStar } =
    useSnapshot(GameState);

  const progressPercentage = (starCollected / totalStar) * 100;

  console.log("View 💕-> ", progressPercentage);

  return (
    <Card
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
      className="w-[230px] h-[145px] bg-white shadow-lg p-0 gap-1"
    >
      <CardHeader className="p-2 gap-0">
        <CardTitle className="text-[0.625rem]">
          {" "}
          {gameStatus === EGameStatus.Winner
            ? "🎉 WINNER! 🎉"
            : "Star Collection Game"}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-3">
          <p className="text-[0.525rem]">Score: {score}</p>
          <div className="text-[0.525rem] flex items-center flex-row gap-2">
            Health:
            <Progress
              className="w-full"
              value={progressPercentage}
              variant="retro"
            />
            {progressPercentage?.toFixed(0)}%
          </div>
          <p className="text-[0.525rem]">Inventory: {inventory.length}</p>
          <p className="text-[0.525rem]">
            Progress: {starCollected} / {totalStar}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreBoard;

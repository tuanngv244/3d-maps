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

type Props = {};

const ScoreBoard: FC<Props> = ({}) => {
  const { score, health, inventory, starCollected, totalStar } =
    useSnapshot(GameState);

  return (
    <Card
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
      className="w-[230px] h-[145px] bg-white shadow-lg p-0 gap-1"
    >
      <CardHeader className="p-2 gap-0">
        <CardTitle className="text-[0.625rem]">Game Controls</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-3">
          <p className="text-[0.525rem]">Score: {score}</p>
          <p className="text-[0.525rem] flex items-center flex-row gap-2">
            Health:
            <Progress className="w-full" value={health} variant="retro" />
          </p>
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

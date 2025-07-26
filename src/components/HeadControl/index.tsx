import { FC } from "react";
import Minimap from "../Minimap";
import ScoreBoard from "../ScoreBoard";

type Props = {};

const HeadControl: FC<Props> = ({}) => {
  return (
    <div className="fixed bottom-0 left-4 top-4 w-fit h-fit flex flex-row items-start gap-4">
      <Minimap />
      <ScoreBoard />
    </div>
  );
};

export default HeadControl;

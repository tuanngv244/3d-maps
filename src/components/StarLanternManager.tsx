import { useMemo } from "react";
import { StarLantern } from "./StarLantern";

export function StarLanternManager({ points, position, map }) {
  const lanterns = useMemo(() => {
    const count = Math.floor(Math.random() * 3) + 3; // Random 3-5 lanterns
    const positions: any[] = [];

    for (let i = 0; i < count; i++) {
      positions.push({
        id: i,
        position: [
          //   Math.random() * (mapBounds.x[1] - mapBounds.x[0]) + mapBounds.x[0], // Random X
          position[0],
          position[1],
          position[2],
        ],
      });
    }

    return positions;
  }, [position, map]);

  console.log("View 💕-> ", lanterns);

  return (
    <>
      {lanterns.map((lantern, index) => (
        <StarLantern
          key={lantern.id}
          scale={0.18}
          position-x={-2 + (Math.random() - 0.5) * 10}
          position-y={-0.8}
          animation={null}
        />
      ))}
    </>
  );
}

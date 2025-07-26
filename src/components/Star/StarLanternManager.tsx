import { useMemo } from "react";
import StarLantern from "./StarLantern";

type Props = {
  position: number[];
  map: string;
};

const StarLanternManager = ({ position, map }: Props) => {
  const lanterns = useMemo(() => {
    const count = Math.floor(Math.random() * 3) + 3; // Random 3-5 lanterns
    const positions: any[] = [];

    // Define map-specific boundaries for strong random positioning
    const mapBounds: Record<string, { x: number[]; z: number[] }> = {
      castle_on_hills: { x: [-12, 0], z: [-6, 6] },
      animal_crossing_map: { x: [-25, -5], z: [0, 20] },
      de_dust_2_with_real_light: { x: [-8, -2], z: [8, 18] },
      medieval_fantasy_book: { x: [-8, 0], z: [-10, -2] },
      vietnamese_village__drone_3d_scan: { x: [-6, 2], z: [5, 15] },
    };

    const bounds = mapBounds[map] || { x: [-10, 10], z: [-10, 10] };

    for (let i = 0; i < count; i++) {
      positions.push({
        id: i,
        position: [
          // Strong random X within map boundaries
          Math.random() * (bounds.x[1] - bounds.x[0]) + bounds.x[0],
          position[1] + Math.random() * 2, // Slight Y variation
          // Strong random Z within map boundaries
          Math.random() * (bounds.z[1] - bounds.z[0]) + bounds.z[0],
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
          position={lantern.position}
          animation={null}
        />
      ))}
    </>
  );
};

export default StarLanternManager;

import { useMemo } from "react";
import StarLantern from "./StarLantern";

type Props = {
  position: number[];
  map: string;
};

const StarLanternManager = ({ position, map }: Props) => {
  const lanterns = useMemo(() => {
    const count = 4; // Fixed 4 stars per map for consistency
    const positions: any[] = [];

    // Define map-specific boundaries for star positioning
    const mapBounds: Record<string, { x: number[]; z: number[]; y: number }> = {
      castle_on_hills: { x: [-8, -2], z: [-3, 3], y: 1.5 },
      animal_crossing_map: { x: [-15, -8], z: [5, 15], y: 1.5 },
      de_dust_2_with_real_light: { x: [-6, -1], z: [10, 16], y: 1.5 },
      medieval_fantasy_book: { x: [-6, -1], z: [-8, -3], y: 1.5 },
      vietnamese_village__drone_3d_scan: { x: [-3, 1], z: [8, 12], y: 1.5 },
    };

    const bounds = mapBounds[map] || { x: [-5, 5], z: [-5, 5], y: 1.5 };

    // Generate fixed positions for consistent star placement
    const fixedPositions = [
      {
        x: bounds.x[0] + (bounds.x[1] - bounds.x[0]) * 0.2,
        z: bounds.z[0] + (bounds.z[1] - bounds.z[0]) * 0.2,
        y: bounds.y,
      },
      {
        x: bounds.x[0] + (bounds.x[1] - bounds.x[0]) * 0.8,
        z: bounds.z[0] + (bounds.z[1] - bounds.z[0]) * 0.2,
        y: bounds.y,
      },
      {
        x: bounds.x[0] + (bounds.x[1] - bounds.x[0]) * 0.2,
        z: bounds.z[0] + (bounds.z[1] - bounds.z[0]) * 0.8,
        y: bounds.y,
      },
      {
        x: bounds.x[0] + (bounds.x[1] - bounds.x[0]) * 0.8,
        z: bounds.z[0] + (bounds.z[1] - bounds.z[0]) * 0.8,
        y: bounds.y,
      },
    ];

    // Use the fixed positions instead of random ones
    for (let i = 0; i < count; i++) {
      const pos = fixedPositions[i];
      positions.push({
        id: `${map}_star_${i}`,
        position: [
          pos.x, // Use calculated fixed X position
          pos.y, // Use proper Y height (same level as character)
          pos.z, // Use calculated fixed Z position
        ],
      });
    }
    const testPositions = [
      { id: `${map}_star_0`, position: [0, -2, 0] }, // Center
      { id: `${map}_star_1`, position: [-2, -2, -2] }, // Front left
      { id: `${map}_star_2`, position: [2, -2, -2] }, // Front right
      { id: `${map}_star_3`, position: [0, -2, 3] }, // Back
    ];

    return testPositions;
  }, [map]); // Remove position dependency to avoid regeneration

  console.log(
    `🌟 ${map} stars:`,
    lanterns.map((l) => l.position)
  );

  return (
    <>
      {lanterns.map((lantern, index) => (
        <StarLantern
          key={lantern.id}
          starId={lantern.id}
          mapName={map}
          scale={0.3} // Slightly larger for visibility
          position={lantern.position}
          animation={null}
        />
      ))}
    </>
  );
};

export default StarLanternManager;

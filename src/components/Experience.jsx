import { Environment, OrthographicCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { useSnapshot } from "valtio";
import { GameState } from "../App";
import { CharacterController } from "./CharacterController";
import { Map } from "./Map";
import { StarLanternManager } from "./StarLanternManager";

export const maps = {
  castle_on_hills: {
    scale: 3,
    position: [-6, -7, 0],
    randomPoint: 5,
  },
  animal_crossing_map: {
    scale: 20,
    position: [-15, -1, 10],
    randomPoint: 5,
  },
  de_dust_2_with_real_light: {
    scale: 0.3,
    position: [-5, -3, 13],
    randomPoint: 3,
  },
  medieval_fantasy_book: {
    scale: 0.4,
    position: [-4, 0, -6],
    randomPoint: 3,
  },
  vietnamese_village__drone_3d_scan: {
    scale: 0.5,
    position: [-2, -20, 10],
    randomPoint: 4,
  },
};
export const Experience = () => {
  const shadowCameraRef = useRef();
  useControls("Map", {
    map: {
      value: "animal_crossing_map",
      options: Object.keys(maps),
      onChange: (value) => {
        GameState.map = value;
      },
    },
  });

  const { map } = useSnapshot(GameState);

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics key={map}>
        <Map
          scale={maps[map].scale}
          position={maps[map].position}
          model={`models/${map}.glb`}
        />
        <StarLanternManager
          key={map} // Re-generate lanterns when map changes
          points={maps[map].randomPoint}
          position={maps[map].position}
        />
        <CharacterController />
      </Physics>
    </>
  );
};

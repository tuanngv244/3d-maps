import { Environment, OrthographicCamera } from "@react-three/drei";
// @ts-ignore
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { useSnapshot } from "valtio";
import { GameState } from "../App";
import MainCharacter from "./MainCharacter";
import { Map } from "./Map";
import StarLanternManager from "./Star/StarLanternManager";
import { MAP_CONFIGS } from "@/constants/general";

export const Experience = () => {
  const shadowCameraRef = useRef<any>(null);
  useControls("Map", {
    map: {
      value: "animal_crossing_map",
      options: Object.keys(MAP_CONFIGS),
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
          scale={MAP_CONFIGS[map]?.scale}
          position={MAP_CONFIGS[map]?.position}
          model={`models/${map}.glb`}
        />
        <StarLanternManager
          key={map} // Re-generate lanterns when map changes
          position={MAP_CONFIGS[map]?.position}
          map={map}
        />
        <MainCharacter />
      </Physics>
    </>
  );
};

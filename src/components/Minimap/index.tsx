import { View } from "@react-three/drei";
import { FC } from "react";
import Frame from "./Frame";

type Props = {};

const Minimap: FC<Props> = (props) => {
  return (
    <div
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <View
        style={{
          width: "150px",
          height: "150px",
        }}
      >
        <Frame />
      </View>
    </div>
  );
};

export default Minimap;

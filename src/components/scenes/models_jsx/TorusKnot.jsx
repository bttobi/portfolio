import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const TorusKnot = (props) => {
  const blockDispRef = useRef();

  useFrame(() => {
    blockDispRef?.current?.rotateY(0.002);
  });

  return (
    <group>
      <mesh
        ref={blockDispRef}
        {...props}
        dispose={null}
        scale={1.2}
        position={[0, 0, 0]}
      >
        <torusKnotBufferGeometry />
        <meshToonMaterial color={"#3c8134"} />
      </mesh>
    </group>
  );
};

export default TorusKnot;

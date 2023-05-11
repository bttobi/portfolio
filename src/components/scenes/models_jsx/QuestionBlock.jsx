import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "/models/QuestionBlock/QuestionBlock-transformed.glb"
  );

  const blockDispRef = useRef();

  useFrame(() => {
    blockDispRef?.current?.rotateY(0.002);
  });

  return (
    <group
      ref={blockDispRef}
      {...props}
      dispose={null}
      scale={0.003}
      position={[0, -1.3, 0]}
    >
      <group position={[-35.12, 760.38, -5.42]} scale={[-1, 1, 372.57]}>
        <group position={[219.91, 0, 0.48]}>
          <mesh
            geometry={nodes["Box005_09_-_Default_0"].geometry}
            material={materials["09_-_Default"]}
          />
          <mesh
            geometry={nodes["Box005_03_-_Default_0"].geometry}
            material={materials["03_-_Default"]}
          />
          <mesh
            geometry={nodes["Box005_02_-_Default_0"].geometry}
            material={materials["02_-_Default"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/QuestionBlock//QuestionBlock-transformed.glb");

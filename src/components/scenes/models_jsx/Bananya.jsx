import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Bananya(props) {
  const { nodes, materials } = useGLTF(
    "/models/bananya/bananya_birbo-transformed.glb",
  );

  const bananyaDispRef = useRef();

  useFrame(() => {
    bananyaDispRef?.current?.rotateY(0.002);
  });

  return (
    <group ref={bananyaDispRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material_6}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.material_6}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/bananya/bananya_birbo-transformed.glb");

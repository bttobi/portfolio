import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function CatDispenser(props) {
  const { nodes, materials } = useGLTF('/models/CatDispenser/cat_dispenser-transformed.glb');

  const catDispRef = useRef();

  useFrame(()=>{
    catDispRef?.current?.rotateY(0.002);
  });

  return (
    <group ref={catDispRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.08} position={[0,0.1,0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.aiStandardSurface5SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.aiStandardSurface1SG} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.aiStandardSurface1SG} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.aiStandardSurface1SG} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.aiStandardSurface1SG} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.aiStandardSurface2SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/CatDispenser/cat_dispenser-transformed.glb')

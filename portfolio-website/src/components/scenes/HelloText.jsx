import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function HelloText(props) {
  const { nodes, materials } = useGLTF('/models/HelloModel/HelloText-transformed.glb');
  const textRef = useRef();

  useFrame(()=>{
    textRef?.current?.rotateY(0.002);
  });

  return (
    <group ref={textRef} {...props} dispose={null}>
      <group position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh geometry={nodes['3D_Text_-_H'].geometry} material={materials['Romeo 1']} position={[-58.88, 7.5, 0.8]} />
        <mesh geometry={nodes['3D_Text_-_e'].geometry} material={materials['Romeo 1']} position={[-27.96, 7.5, 0.8]} />
        <mesh geometry={nodes['3D_Text_-_l'].geometry} material={materials['Romeo 1']} position={[-3.66, 7.5, 0.8]} />
        <mesh geometry={nodes['3D_Text_-_l_1'].geometry} material={materials['Romeo 1']} position={[8.98, 7.5, 0.8]} />
        <mesh geometry={nodes['3D_Text_-_o'].geometry} material={materials['Romeo 1']} position={[21.63, 7.5, 0.8]} />
        <mesh geometry={nodes['3D_Text_-_!'].geometry} material={materials['Romeo 1']} position={[46.83, 7.5, 0.8]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/HelloModel/HelloText-transformed.glb')

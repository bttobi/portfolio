import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

export default function Mercury(props) {
  const { nodes, materials } = useGLTF('./models/mercury/scene-transformed.glb');
  const mercuryRef = useRef();

  useFrame(()=>{
    mercuryRef?.current?.rotateX(0.002)
    mercuryRef?.current?.rotateY(0.002)
  })

  return (
    <group {...props} dispose={null}>
      <motion.mesh ref={mercuryRef} geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('./models/mercury/scene-transformed.glb')

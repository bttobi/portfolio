import React, { Suspense, useEffect, useRef } from 'react';
import { OrbitControls, Text3D, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Hello } from './Hello';

const PlanetScene = () => {
  const textRef = useRef();

  return (
  <Suspense fallback={null}>
    <Canvas className="mr-16 ml-8" style={{width: "50%", height: "100%"}}>
      <ambientLight intensity={0.8}/>
      <pointLight color="white" position={[10, 10, 10]} />
      <OrbitControls enableZoom={false}/>
      <Hello />
    </Canvas>
  </Suspense>
  )
}

export default PlanetScene
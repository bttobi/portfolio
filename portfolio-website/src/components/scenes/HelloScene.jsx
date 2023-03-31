import React, { Suspense, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import HelloText from './models/HelloText';

const HelloScene = () => {
  return (
  <Suspense fallback={null}>
    <Canvas className="flex" style={{width: "50%", height: "100vh"}}>
      <ambientLight intensity={0.5}/>
      <pointLight intensity={2} position={[10,0,10]} />
      <OrbitControls enableZoom={false}/>
      <HelloText />
    </Canvas>
  </Suspense>
  )
}

export default HelloScene
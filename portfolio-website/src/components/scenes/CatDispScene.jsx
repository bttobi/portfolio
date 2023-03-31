import React, { Suspense, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CatDispenser from './models/CatDispenser';

const CatDispScene = () => {
  return (
  <Suspense fallback={null}>
    <Canvas className="flex" style={{width: "100%", height: "100%"}}>
      <ambientLight intensity={0.5}/>
      <pointLight intensity={2} position={[10,0,10]} />
      <OrbitControls enableZoom={false}/>
      <CatDispenser />
    </Canvas>
  </Suspense>
  )
}

export default CatDispScene;
import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CatDispenser from './models_jsx/CatDispenser';
import Loading from '../assets/Loading';

const CatDispScene = () => {
  return (
  <Suspense fallback={<Loading/>}>
    <Canvas className="flex" style={{width: "100%", height: "100%"}}>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <CatDispenser />
    </Canvas>
  </Suspense>
  )
}

export default CatDispScene;
import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loading from '../assets/Loading';
import Bananya from './models_jsx/Bananya';

const CatDispScene = () => {
  return (
  <Suspense fallback={<Loading/>}>
    <Canvas>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={1}/>
      <Bananya />
    </Canvas>
  </Suspense>
  )
}

export default CatDispScene;
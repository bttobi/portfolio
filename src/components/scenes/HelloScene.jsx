import React, { Suspense } from 'react';
import { OrbitControls, Preload, BakeShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import HelloText from './models_jsx/HelloText';
import Loading from '../assets/Loading';

const HelloScene = () => {
  return (
  <div className="lg:order-2 order-1 w-full lg:w-1/2 lg:h-96 md:h-72 h-48 mt-32 lg:m-0">
    <Suspense fallback={<Loading />}>
      <Canvas>
        <ambientLight intensity={0.5}/>
        <pointLight intensity={2} position={[10,0,10]} />
        <OrbitControls enableZoom={false}/>
        <HelloText />
        <Preload all />
        <BakeShadows />
      </Canvas>
    </Suspense>
  </div>
  )
}

export default HelloScene
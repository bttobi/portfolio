import React, { Suspense, useEffect, useRef } from 'react';
import { OrbitControls, Stars, Text3D } from '@react-three/drei';
import Mercury from '../models/Mercury';
import {motion} from 'framer-motion-3d';
import { Canvas } from '@react-three/fiber';

const PlanetScene = () => {
  const textRef = useRef();

  return (
  <Suspense fallback={null}>
    <Canvas className="mr-16 ml-8" style={{width: "50%", height: "100%"}}>
      <ambientLight intensity={0.8}/>
      <pointLight color="white" position={[10, 10, 10]} />
      <OrbitControls />
      <Text3D ref={textRef} position={[-1.5,0,0]} font={"./Red%20Hat%20Display_Italic.json"}>
        Hello!
      </Text3D>
    </Canvas>
  </Suspense>
  )
}

export default PlanetScene
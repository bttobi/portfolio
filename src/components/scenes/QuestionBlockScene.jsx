import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loading from '../assets/Loading';
import QuestionBlock from './models_jsx/QuestionBlock';;

const QuestionBlockScene = () => {
  return (
  <Suspense fallback={<Loading/>}>
    <Canvas className="flex" style={{width: "100%", height: "100%"}}>
      <OrbitControls enableZoom={false}/>
      <pointLight intensity={1} position={[10,5,10]} />
      <ambientLight intensity={0.5}/>
      <QuestionBlock />
    </Canvas>
  </Suspense>
  )
}

export default QuestionBlockScene;
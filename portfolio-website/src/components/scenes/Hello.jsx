import React, {useEffect, useRef} from 'react';
import {motion} from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';

export const Hello = () => {
  const textRef = useRef();
  
  useEffect(()=>{
    textRef?.current?.geometry.translate(-3, 0, 0);
  }
  ,[])

  useFrame(()=>{
    textRef?.current?.rotateY(0.003);
  })

  return (
    <Text3D ref={textRef} size={2} position={[0,-1,0]} font={"./Red%20Hat%20Display_Italic.json"}>
      Hello!
    </Text3D>
  )
}

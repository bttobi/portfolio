import React, { Suspense, useEffect } from "react";
import { OrbitControls, Preload, BakeShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HelloText from "./models_jsx/HelloText";
import Loading from "../assets/Loading";

const HelloScene = () => {
  return (
    <div className="order-1 mt-16 h-48 w-full cursor-pointer md:h-72 lg:order-2 lg:m-0 lg:h-96 lg:w-1/2">
      <Suspense fallback={<Loading />}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight intensity={2} position={[10, 0, 10]} />
          <OrbitControls enableZoom={false} />
          <HelloText />
          <Preload all />
          <BakeShadows />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HelloScene;

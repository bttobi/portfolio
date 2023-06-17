import React, { Suspense } from "react";
import { OrbitControls, Preload, BakeShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TorusKnot from "./models_jsx/TorusKnot";
import Loading from "../assets/Loading";

const TorusKnotScene = () => {
  return (
    <div className="lg:order-2 order-1 w-full lg:w-1/2 lg:h-96 md:h-72 h-48 mt-16 lg:m-0 cursor-pointer">
      <Suspense fallback={<Loading />}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight intensity={2} position={[10, 0, 10]} />
          <OrbitControls enableZoom={false} />
          <TorusKnot />
          <Preload all />
          <BakeShadows />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default TorusKnotScene;

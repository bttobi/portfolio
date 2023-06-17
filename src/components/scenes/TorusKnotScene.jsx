import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TorusKnot from "./models_jsx/TorusKnot";
import Loading from "../assets/Loading";

const TorusKnotScene = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight intensity={2} position={[10, 0, 10]} />
        <TorusKnot />
      </Canvas>
    </Suspense>
  );
};

export default TorusKnotScene;

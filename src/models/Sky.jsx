import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

function Sky({ isRotating }) {
  const skyRef = useRef();
  const { scene, animations } = useGLTF(skyScene);
  useFrame((_, delta) => {
    // skyRef.current.rotation.y += 0.08 * delta;
    if (isRotating) {
      skyRef.current.rotation.y += 0.2 * delta;
    }
  });
  return (
    <>
      <mesh>
        <primitive object={scene} ref={skyRef} />
      </mesh>
    </>
  );
}

export default Sky;

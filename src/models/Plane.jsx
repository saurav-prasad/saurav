import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import isMobile from "../functions/isMobile";

function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const  {actions}  = useAnimations(animations, ref);
  //   useEffect(() => {
  //     if (isRotating) {
  //       actions["Take 001"].play();
  //       console.log(actions);
  //     } else {
  //       actions["Take 001"].stop();
  //     }
  //   }, [actions, isRotating]);
  useFrame((_, delta) => {
    if (isRotating) {
      actions["Take 001"].play();
    } else if (!isRotating) {
      !isMobile() && actions["Take 001"].stop();
    }
  });
  return (
    <>
      <mesh {...props} ref={ref}>
        <primitive object={scene} />
      </mesh>
    </>
  );
}

export default Plane;

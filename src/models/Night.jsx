import { useGLTF } from "@react-three/drei";
import milkyway from "../assets/3d/milkyway.glb";
import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export function Test({ isRotating }) {
  const { nodes, materials } = useGLTF(milkyway);
  const skyRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const { gl, viewport } = useThree();

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      skyRef.current.rotation.y += delta * 0.002 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useFrame((_, delta) => {
    skyRef.current.rotation.y -= 0.017 * delta;
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [gl, handlePointerDown, handlePointerMove]);

  return (
    <group ref={skyRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PanoSphere_lambert1_0.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default Test;

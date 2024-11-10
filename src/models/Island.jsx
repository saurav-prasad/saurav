import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import islandScene from "../assets/3d/island.glb";
import { useFrame, useThree } from "@react-three/fiber";
import isMobile from "../functions/isMobile";

function Island({ isRotating, setIsRotating, setCurrentStage, ...props }) {
  const { nodes, materials } = useGLTF(islandScene);
  const { gl, viewport } = useThree();
  const islandRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  let dampingFactor = 0.955;
  if (isMobile()) {
    dampingFactor = 0.7;
  }
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUP = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      rotationSpeed.current = delta * 0.01 * Math.PI;
      if (isMobile()) {
        islandRef.current.rotation.y += delta * 0.0035 * Math.PI;
      } else {
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      }
      lastX.current = clientX;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.009 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else {
      if (e.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y -= 0.009 * Math.PI;
        rotationSpeed.current = -0.0125;
      }
    }
  };

  const handleKeyUp = (e) => {
    setIsRotating(false);
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    }
    const rotation = islandRef.current.rotation.y;
    /**
     * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
     * The goal is to ensure that the rotation value remains within a specific range to
     * prevent potential issues with very large or negative rotation values.
     *  Here's a step-by-step explanation of what this code does:
     *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
     *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
     *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
     *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
     *     This is done to ensure that the value remains positive and within the range of
     *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
     *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
     *     modulo operation to the value obtained in step 2. This step guarantees that the value
     *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
     *     circle in radians.
     */
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 5.4 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.8 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.3 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.2 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    !isMobile() && canvas.addEventListener("pointerdown", handlePointerDown);
    !isMobile() && canvas.addEventListener("pointerup", handlePointerUP);
    !isMobile() && canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchmove", handlePointerMove);
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handleKeyUp);
    return () => {
      !isMobile() &&
        canvas.removeEventListener("pointerdown", handlePointerDown);
      !isMobile() && canvas.removeEventListener("pointerup", handlePointerUP);
      !isMobile() &&
        canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchstart", handleKeyDown);
      canvas.removeEventListener("touchend", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUP]);

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island;

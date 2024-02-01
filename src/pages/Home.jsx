/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Island from "../models/island";
import Bird from "../models/Bird";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Loader from "../components/Loader";

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState();
  const adjustPlaneForScreenSize = () => {
    console.log("object");
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth > 768) {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -3, -2];
    } else {
      screenScale = [3.5, 3.5, 3.5];
      screenPosition = [0, -4, -6];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    console.log("object");
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth > 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -42];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <>
      <section className="w-full h-screen relative">
        {/* <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center">
          Popup
        </div> */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <ambientLight intensity={0.8} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Sky isRotating={isRotating} />
            <Bird />
            <Island
              scale={islandScale}
              position={islandPosition}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              rotation={[0, 20, 0]}
              scale={planeScale}
              position={planePosition}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
}

export default Home;

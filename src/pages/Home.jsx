/* eslint-disable react/no-unknown-property */
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Bird from "../models/Bird";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import Island from "../models/Island";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Night from "../models/Night";
import { useDispatch, useSelector } from "react-redux";
import { lightMode, nightMode } from "../redux/features/themeSlice";
import moonon from "../assets/icons/moonon.png";
import moonoff from "../assets/icons/moonoff.png";

function Home({setIsPlayingMusic,isPlayingMusic}) {
  const { darkMode } = useSelector((state) => state.themeSlice);
  const dispatch = useDispatch();

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState();
  // const audioRef = useRef(new Audio(sakura));
  // audioRef.current.volume = 0.4;
  // audioRef.current.loop = true;
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }
  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth > 768) {
      screenScale = [3, 3, 3];
      screenPosition = [0, -2.5, -2];
    } else {
      screenScale = [3.5, 3.5, 3.5];
      screenPosition = [0, -3.5, -6];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
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
        <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            {darkMode ? (
              <>
                <directionalLight position={[1, 1, 1]} intensity={-0.3} />
                <spotLight
                  // position={[-9, 0.1, 1.5]}
                  position={[-15, 0.1, 1.5]}
                  intensity={30}
                  color="#ffffff"
                  // color="#ff0000"
                  angle={Math.PI / 4}
                  distance={100.0}
                  decay={0.6}
                  penumbra={0.2}
                />
              </>
            ) : (
              <>
                <directionalLight position={[1, 1, 1]} intensity={0.85} />
                <ambientLight intensity={1} />
                <hemisphereLight
                  skyColor="#b1e1ff"
                  groundColor="#000000"
                  intensity={1.1}
                />
              </>
            )}
            {darkMode ? (
              <Night isRotating={isRotating} />
            ) : (
              <Sky isRotating={isRotating} />
            )}
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
        <div
          onClick={() => {
            setIsPlayingMusic(!isPlayingMusic);
          }}
          className="fixed bottom-2 left-2 cursor-pointer"
        >
          <img
            className="w-10 h-10 transition-all object-contain"
            src={!isPlayingMusic ? soundoff : soundon}
            alt=""
          />
        </div>
        <div
          onClick={() => {
            dispatch(darkMode ? lightMode() : nightMode());
          }}
          className="bg-[#5d50f5] p-3 rounded-full fixed bottom-2 right-2 cursor-pointer"
        >
          <img
            className="w-5 h-5 transition-all object-contain invert"
            src={!darkMode ? moonoff : moonon}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Home;

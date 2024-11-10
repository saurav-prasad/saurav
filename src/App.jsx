import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { useEffect, useRef, useState } from "react";
import sakura from './assets/sakura.mp3'
function App() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <main className="bgGradient min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setIsPlayingMusic={setIsPlayingMusic} isPlayingMusic={isPlayingMusic} />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

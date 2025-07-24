import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import { Outlet, Route, Routes, useLocation } from "react-router";

const AboutMe = React.lazy(() => import("./pages/AboutMe/AboutMe"));
const Works = React.lazy(() => import("./pages/Works/Works"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <>
      <div className={`flex flex-col m-auto max-w-7xl h-screen `}>
        <Navbar />
        <div
          className={`mt-5 ${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransitionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}
        >
          <Routes location={displayLocation}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <HomePage /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;

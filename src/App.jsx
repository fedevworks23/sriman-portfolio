import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const darkMode = useRef();

  return (
    <>
      <Navbar darkMode={darkMode} />
      <div
        ref={darkMode}
        className={`darkMode flex flex-col justify-center items-center bg-white dark:bg-gray-900 w-full h-screen text-gray-800 dark:text-white `}
      >
        Sample
      </div>
    </>
  );
}

export default App;

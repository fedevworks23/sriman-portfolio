import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="flex flex-col m-auto max-w-7xl h-screen">
        <Navbar />
        <HomePage />
      </div>
    </>
  );
}

export default App;

import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="flex-col m-auto w-[1280px] h-screen">
        <Navbar />
        <div className="">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;

import FrontImage from "../../components/FrontImage";
import MySkill from "./MySkill";
import Overview from "./Overview";
import Projects from "./Projects";

function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto w-[100%] h-auto">
        <Overview />
        <MySkill />
        <Projects />
      </div>
    </>
  );
}

export default HomePage;

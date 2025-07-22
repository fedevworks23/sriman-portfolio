import FrontImage from "../components/FrontImage";

function HomePage() {
  return (
    <>
      <div className="flex home-page">
        <div className="flex flex-col flex-1 justify-center text-5xl leading-[1.5]">
          <span>Hello I'm</span>
          <span>Frontend Developer</span>
          <span>Based in India</span>
          <span className="text-lg">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</span>
        </div>
        <div className="flex-1">
          <FrontImage imgWidth={"95%"}/>
        </div>
      </div>
    </>
  );
}

export default HomePage;

import FrontImage from "../components/FrontImage";

function HomePage() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-10 px-10 py-20 home-page">
        <div className="flex flex-col flex-1 justify-center text-5xl leading-[1.5]">
          <span>Hello I'm</span>
          <span>Frontend Developer</span>
          <span>Based in India</span>
          <span className="text-lg">
            I'm Sriman Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </span>
        </div>
        <div className="flex-1">
          <FrontImage  black="bg-[var(--text-color)]" />
        </div>
      </div>
    </>
  );
}

export default HomePage;

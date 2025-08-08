function Overview() {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen">
        <div className="w-[50%] font-bold text-[clamp(1rem,4vw,3rem)] text-left">
          <span className="w-[636px] font-bold text-[#42446e] text-left">
            Hi 👋,
          </span>
          <br />
          <span className="w-[636px] font-bold text-[#42446e] text-left">
            My name is
          </span>
          <br />
          <span className="inline-block bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-indigo-600 font-bold text-transparent">
            ###### ########
          </span>
          <br />
          <span className="w-[636px] font-bold text-[#42446e] text-left">
            I build responsive components for web and mobile.
          </span>
        </div>
        <div className="flex justify-center items-center mt-4">
          <img
            src="50353683-1.jpeg"
            className="border rounded-[230px] w-[clamp(300px,30vw,600px)] h-[clamp(300px,30vw,600px)] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Overview;

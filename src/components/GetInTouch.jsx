import logo3 from "../assets/logo-3.webp";

const GetInTouch = () => {
  return (
    <div className="get-in-touch w-[82%]">
      <div className="logo-div flex items-center mb-8">
        <hr className="w-full border border-zinc-200" />
        <img src={logo3} alt="company logo" className="h-22 px-4 cursor-pointer"/>
        <hr className="w-full border border-zinc-200" />
      </div>
      <div className="company-info w-full flex flex-col items-center gap-4">
        <h4 className="text-[1.4rem] font-semibold cursor-pointer">Wincasoft Official</h4>
        <p className="text-[1.05rem] text-zinc-800">Your trusted partner in Software Development & UI/UX design.</p>
        <button className="border-none bg-zinc-950 text-white text-lg font-semibold rounded-4xl px-5.5 py-2.5 cursor-pointer hover:bg-zinc-700 ">Work with us</button>
      </div>
    </div>
  )
}

export default GetInTouch

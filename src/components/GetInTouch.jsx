
const GetInTouch = () => {
  return (
    <div className="get-in-touch w-[82%]">
      <div className="logo-div flex items-center">
        <hr className="w-full border border-zinc-200" />
        <img src="./src/assets/logo-3.webp" alt="company logo" className="h-22 px-4"/>
        <hr className="w-full border border-zinc-200" />
      </div>
      <div className="company-info w-full flex flex-col items-center gap-3">
        <h4>Wincasoft Official</h4>
        <p>Your trusted partner in Software Development & UI/UX design.</p>
        <button className="border-none bg-zinc-950 text-white rounded-4xl px-5 py-1.5">Get in touch</button>
      </div>
    </div>
  )
}

export default GetInTouch

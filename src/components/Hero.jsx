import logo3 from "../assets/logo-3.webp";

const Hero = () => {
  return (
    <div className="hero w-[70%] pt-18 font-semibold text-2xl">
      <h1>Movie Streaming Platform Website - Next-Gen Entertainment 🎬🍿</h1>

      <div className="work-with-us w-full h-24 flex items-center justify-between sticky top-25 z-10 bg-white">
        <div className="part1 h-full flex gap-2 items-center">
          <img
            src={logo3}
            alt="client logo"
            className="h-[50%] cursor-pointer"
          />
          <h2 className="text-[1rem] font-normal cursor-pointer">
            <span className="font-semibold">wincasoft</span> for{" "}
            <span className="font-semibold">Wincasoft Official</span>
          </h2>
          <p className="available-for-work text-xs font-normal text-green-600 cursor-pointer">
            Available for work
          </p>
          <p className="follow text-xs font-normal cursor-pointer text-zinc-700 hover:text-zinc-950">Follow</p>
        </div>

        <div className="part2 flex gap-2 items-center">
          <a href="#">
            <i class="ri-heart-3-line p-2 border border-zinc-400 rounded-[50%] text-[1.06rem] font-medium"></i>
          </a>
          <a href="#">
            <i class="ri-bookmark-line p-2 border border-zinc-400 rounded-[50%] text-[1.06rem] font-medium"></i>
          </a>
          <a
            href="#"
            className="work-with-us-btn text-[0.8rem] font-semibold text-white px-6 py-3 bg-black rounded-4xl"
          >
            Work with us
          </a>
        </div>
      </div>
      <div className="img-div w-full ">
        <img src="https://cdn.dribbble.com/userupload/45936565/file/ff9ea616c6354fcecc0d01ce94ad5ca3.jpg?resize=1504x1128&vertical=center"  alt="hero image" className="w-full rounded-md" />

        <div className="side-elems flex flex-col gap-6 absolute top-64 right-4">
          <a href="#"><i className="ri-chat-3-line p-2.5 border border-zinc-300 text-[1.2rem] font-normal rounded-[50%]"></i></a>
          <a href="#"><i className="ri-share-box-line p-2.5 border border-zinc-300 text-[1.2rem] font-normal rounded-[50%]"></i></a>
          <a href="#"><i className="ri-information-line p-2.5 border border-zinc-300 text-[1.2rem] font-normal rounded-[50%]"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

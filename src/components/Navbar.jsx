import logo2 from "../assets/logo-2.png";

const Navbar = () => {
  return (
    <div className="navbar fixed z-20 flex justify-between h-25 w-full px-10 bg-white">
      <div className="nav-first h-full flex items-center gap-10">
        <img
          className="h-[52%]"
          src={logo2}
          alt="company logo"
        />

        <div className="search flex items-center bg-zinc-100 hover:bg-white pr-2 gap-4 rounded-[55px] border-3 border-transparent hover:border-3 hover:border-pink-200 transition-all duration-300 delay-100 ease-in-out">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border-none outline-none py-3 pl-6 w-90 placeholder:text-zinc-800"
          />
          <div>
            <a href="#" className="hover:text-zinc-600 mr-4 font-semibold text-zinc-800">
              Shots <i class="ri-arrow-down-s-line"></i>
            </a>
            <i className="ri-search-line text-xl p-2.5 rounded-[50%] bg-pink-400 text-white cursor-pointer"></i>
          </div>
        </div>

        <div className="elem flex gap-6">
          <a className="font-semibold hover:text-zinc-500" href="#">Explore <i class="ri-arrow-down-s-line font-normal"></i></a>
          <a className="font-semibold hover:text-zinc-500" href="#">Hire Talent <i class="ri-arrow-down-s-line font-normal"></i></a>
          <a className="font-semibold hover:text-zinc-500" href="#">Get Hired <i class="ri-arrow-down-s-line font-normal"></i></a>
          <a className="font-semibold hover:text-zinc-500" href="#">Community <i class="ri-arrow-down-s-line font-normal"></i></a>
        </div>
      </div>

      <div className="nav-second flex items-center gap-4">
        <a className="sign-up font-bold hover:text-zinc-500" href="#">Sign up</a>
        <a className="log-in text-white bg-black px-6 py-3 rounded-4xl font-bold hover:bg-zinc-700" href="#">Log in</a>
      </div>
    </div>
  );
};

export default Navbar;

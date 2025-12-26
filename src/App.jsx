import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="blank h-25 w-full"></div>

      <div className="parentSticky relative flex flex-col items-center gap-20">
        <Hero />
        <About />
        <GetInTouch />
      </div>
    </div>
  );
};

export default App;

import About from "./components/About";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import MoreByUs from "./components/MoreByUs";
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
        <MoreByUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;

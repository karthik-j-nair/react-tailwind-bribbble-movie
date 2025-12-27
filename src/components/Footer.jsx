
import logo2 from "../assets/logo-2.png";

const Footer = () => {
  return (
    <div className='footer w-[83%]'>
      <div className="footer-upper w-full h-25 flex items-center justify-between">
        <img className="h-[65%]" src={logo2} alt="company logo" />
        <div className="pages display flex justify-center gap-11 items-center">
            <a href="#" className="font-semibold">For designers</a>
            <a href="#" className="font-semibold">Hire talent</a>
            <a href="#" className="font-semibold">Inspiration</a>
            <a href="#" className="font-semibold">Advertising</a>
            <a href="#" className="font-semibold">Blog</a>
            <a href="#" className="font-semibold">About</a>
            <a href="#" className="font-semibold">Careers</a>
            <a href="#" className="font-semibold">Support</a>
        </div>

        <div className="socials flex gap-4">
            <a href="#"><i className="ri-twitter-x-line text-2xl "></i></a>
            <a href="#"><i className="ri-facebook-circle-fill text-2xl"></i></a>
            <a href="#"><i className="ri-instagram-line text-2xl"></i></a>
            <a href="#"><i className="ri-pinterest-fill text-2xl"></i></a>

        </div>
      </div>
      <div className="footer-bottom w-full h-25 text-zinc-600 flex justify-between items-center text-sm">
        <div className="footer-bottom-first flex gap-4">
            <p>© 2025 Dribbble</p>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>

        </div>
        <div className="footer-bottom-second flex gap-4">
            <a href="#">Jobs</a>
            <a href="#">Designers</a>
            <a href="#">Freelancers</a>
            <a href="#">Tags</a>
            <a href="#">Places</a>
            <a href="#">Resources</a>

        </div>
      </div>
    </div>
  )
}

export default Footer

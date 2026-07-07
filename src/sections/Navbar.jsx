import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TfiClose } from "react-icons/tfi";
import profileImage from "../assets/profile (1) (1).png";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const CompactMenu = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["home", "about", "skills", "contact", "project"];

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: -20 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, { xPercent: 0, duration: 0.8, ease: "power3.out" })
      .to(
        linksRef.current,
        { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" },
        "<",
      )
      .to(
        contactRef.current,
        { autoAlpha: 1, x: 0, duration: 0.4, ease: "power2.out" },
        "<+0.2",
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        { rotate: -45, y: -3.3, duration: 0.3, ease: "power2.inOut" },
        "<",
      );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full py-10 z-50 transition-colors duration-500 pointer-events-none ${
        scrolled ? "bg-[#111111] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Navbar */}
      <div className="flex text-white items-center justify-between max-w-screen-xl relative mx-auto px-4 lg:px-8  z-50">
        {/* Logo / Left Side */}
        <div className="flex items-center select-none gap-3">
          <img
            src={profileImage}
            alt="Logo"
            className="h-11 w-auto object-contain"
          />
          <div>
            <p className="text-sm font-bold">Mehedi Hasan</p>
            <p className="text-sm font-bold">Full Stack Engineer</p>
          </div>
        </div>

        {/* Burger Icon */}
        <div
          className="flex pointer-events-auto flex-col justify-between w-6 h-6 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            ref={topLineRef}
            className="block h-[2px] w-full bg-white  rounded"
          ></span>
          <span
            ref={bottomLineRef}
            className="block h-[2px] w-full bg-white rounded"
          ></span>
        </div>
      </div>

      <nav
        ref={navRef}
        className="fixed top-0 right-0 h-full lg:w-[500px] w-full  bg-[#64d7a7] shadow-xl z-50 flex flex-col p-8 gap-10 pointer-events-auto"
      >
        {/* Logo inside menu */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="Logo"
              className="h-11 w-auto object-contain"
            />
            <div>
              <p className="font-bold text-white">Mehedi Hasan</p>
              <p className="text-sm text-white">Full Stack Engineer</p>
            </div>
          </div>

          <div>
            <button
              onClick={toggleMenu}
              className="text-white text-2xl font-bold"
              aria-label="Close menu"
            >
              <TfiClose />
            </button>
          </div>
        </div>

        {links.map((link, i) => (
          <a
            key={i}
            ref={(el) => (linksRef.current[i] = el)}
            href={`#${link.toLowerCase()}`}
            className="text-white font-semibold text-3xl"
            onClick={toggleMenu}
          >
            {link}
          </a>
        ))}

        <div className="my-20 flex flex-col gap-4 items-center justify-between">
          <div className="flex flex-col gap-2">
            <a
              href="mailto:iammehedirony@gmail.com"
              className="bg-white text-black px-4 py-2 flex items-center gap-2 font-semibold rounded-md transition-all duration-300"
            >
              <IoMailOutline />
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/iammehedirony"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#292929] px-4 py-2 flex items-center gap-2 text-lg font-semibold rounded-md transition-all duration-300"
              >
                <FaLinkedin />
                Linkedin
              </a>
              <a
                href="https://github.com/iammehedirony"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#292929] px-4 py-2 flex items-center gap-2 text-lg font-semibold rounded-md transition-all duration-300"
              >
                <FaGithub color="#3CCF91" />
                GitHub
              </a>

              <a
                href="https://facebook.com/iammehedirony"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 flex items-center gap-2 font-semibold rounded-md transition-all duration-300"
              >
                <FaFacebook />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CompactMenu;

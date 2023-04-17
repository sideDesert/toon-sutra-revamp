import Logo from "../assets/logo.svg";
import { NavLink } from "./NavLink";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";

export function NavBar({ currentPage }) {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  if (window.innerWidth < 768) {
    return <NavBarSmallScreen />;
  }

  return (
    <div
      className={`sm:py-5 py-2 w-full flex sm:px-16 items-center justify-between  sticky-top drop-shadow-sm transition-all fixed ${
        navBg ? "bg-black" : ""
      }`}
    >
      <div className="sm:items-center items-start flex">
        <img src={Logo} alt="logo" className="w-44 sm:w-auto" />
        <NavLink text="Home" href="/" page={currentPage} />
        <NavLink text="Library" href="/library" page={currentPage} />
        <NavLink
          text="Privacy Policy"
          href="/privacy-policy"
          page={currentPage}
        />
      </div>
      {/* <div className="sm:hidden block bg-red-400" id='nav'>
                <Menu right>
                    <a href='/' className="text-white text-right my-2">Home</a>
                    <a href='/library' className="text-white text-right my-2">Library</a>
                    <a href='/privacy-policy' className="text-white text-right my-2">Privacy Policy</a>
                </Menu>
            </div> */}
      <div className="sm:block hidden bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 px-11 rounded-full hover:scale-105 transition-all hover:shadow-md">
        <p className=" text-white font-medium">Download App</p>
      </div>
    </div>
  );
}

function NavBarSmallScreen() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuState, setMenuState] = useState(false);
  function toggleButton() {}
  return (
    <div>
      <header className="w-screen justify-between sticky top-0 left-0 p-2 flex z-40">
        {/* Logo */}

        <img
          src={Logo}
          alt="logo"
          className={navbarOpen ? "opacity-0" : "w-44 sm:w-auto"}
        />
        {/* Hamburger Icon */}
        <button
          className="sm:hidden flex top-0 right-0 z-50 relative w-10 h-10 text-primary focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
                navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-primary transform transition-all duration-200 ease-in-out ${
                navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
                navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </header>
      <nav
        className={`fixed flex top-0 left-0 w-full p-10 z-30 h-screen pt-24 bg-gray-900 text-textPrimary bg-opacity-100 transform delay-100 transition-all duration-300 ${
          navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full justify-center"
        }`}
      >
        <ul className="w-full text-center flex flex-col items-center">
          <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
            <a
              href="/"
              className="h-full w-full py-2 text-lg text-primary"
              onClick={(e) => {
                e.preventDefault();
                setNavbarOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
            <a
              href="/"
              className="h-full w-full py-2 text-lg text-primary"
              onClick={(e) => {
                e.preventDefault();
                setNavbarOpen(false);
              }}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

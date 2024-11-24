import zillowDark from "../assets/z-logo-default-visual-refresh.svg";
import zillowWhite from "../assets/z-logo-white-visual-refresh.svg";
import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const mobileHandler = () => {
    setMobile((prev) => !prev);
  };

  const [foc, setFoc] = useState(false);
  const focusHandler = () => {
    setFoc(true);
  };

  const blurHandler = () => {
    setFoc(false);
  };

  return (
    <>
      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 h-screen overflow-hidden bg-white z-50 lg:hidden ${
          mobile ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className=" flex justify-between items-center border-b-[1px] border-[#CDCDD3] py-4">
          <div className="ml-3 cursor-pointer" onClick={mobileHandler}>
            {mobile ? (
              <IoClose size="23" color="#0041D9" />
            ) : (
              <IoClose size="23" color="#0041D9" />
            )}
          </div>
          <div>
            <img src={zillowDark} />
          </div>
          <div></div>
        </div>
        <div className="">
          <ul className="flex flex-col space-y-5 text-black font-semibold">
            <li className="transition-all duration-300 hover:text-[#0041D9] border-b-[1px] border-[#CDCDD3] py-3 flex justify-between items-center">
              <a href="" className="pl-3">
                Buy
              </a>
              <span>
                <MdOutlineKeyboardArrowDown
                  size="30"
                  color="#0041D9"
                  className="mr-5 border-l-[1px]"
                />
              </span>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Rent
              </a>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Sell
              </a>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Home Loans
              </a>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Find an Agent
              </a>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Manage Rentals
              </a>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Advertise
              </a>
            </li>
            <li className="transition-all duration-300 hover:text-[#0041D9]">
              <a href="" className="pl-3">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-[url('./assets/bg-1530.webp')] w-full bg-cover bg-center h-[500px] overflow-x-hidden">
        <header className="sm:justify-around px-3  lg:bg-white text-black flex justify-between items-center py-7 px-18 font-medium">
          {/* Left Menu */}
          <div className="cursor-pointer lg:hidden" onClick={mobileHandler}>
            <IoMenu size={30} color="white" />
          </div>
          <div>
            <ul className="hidden lg:flex space-x-7 text-black">
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Buy</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Rent</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Sell</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Home Loans</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Find an Agent</a>
              </li>
            </ul>
          </div>

          {/* Logo Image */}
          <div>
            <img
              src={zillowDark}
              alt="Zillow Logo"
              className="hidden lg:block h-5 "
            />
            <img
              src={zillowWhite}
              alt="Zillow Logo"
              className="h-5 lg:hidden  "
            />
          </div>

          {/* Right Menu */}
          <div>
            <ul className="hidden lg:flex space-x-7 text-black">
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Manage Rentals</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Advertise</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Help</a>
              </li>
              <li className="transition-all duration-300 hover:text-[#0041D9]">
                <a href="">Sign In</a>
              </li>
            </ul>
          </div>
          <div className="cursor-pointer lg:hidden">
            <CiUser size={30} color="white" />
          </div>
        </header>

        {/* HEROOOOOO */}
        <section className=" h-96 w-full justify-center items-center lg:relative text-white pt-20 ">
          <div className="flex flex-col justify-center mx-auto max-w-96 text-center lg:flex lg:flex-col lg:justify-start lg:mx-0 lg:text-left lg:pl-20">
            <h1 className="text-5xl font-black mb-2 lg:pl-14 lg:text-6xl whitespace-nowrap">
              Agents. Tours.
            </h1>
            <h1 className="text-5xl font-black mb-4 lg:pl-14 lg:text-6xl whitespace-nowrap">
              Loans. Homes.
            </h1>
            <div
              className={`relative h-[70px] bg-white flex justify-between items-center rounded-2xl overflow-hidden ${
                foc
                  ? "border-[2px] border-[#3B66B8] shadow-[2px_2px_4px_3px_rgba(1,1,1,1)] shadow-[#B4D6FD]"
                  : "hover:border-[1px] border-[#E0E0E0]"
              } lg:flex lg:w-[520px] lg:ml-[50px]`}
            >
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or Zip code"
                className="w-full h-full text-black focus:outline-none pl-5 py-3"
                onFocus={focusHandler}
                onBlur={blurHandler}
              />
              <span className=" py-10 px-6 transition-all duration-300 hover:bg-[#EFEFF1] cursor-pointer">
                <FaSearch color="black" size={21} className="cursor-pointer" />
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <section className="blue-gradient h-[17px] flex items-center justify-end gap-[10px] px-[60px] py-[12px]">
        <img src="/images/ghanaflag.svg" alt="ghana-flag" />
        <p className="text-[13px] text-white medium">Ghana</p>
      </section>

      <section className="sm:px-[60px] px-[1rem] py-[12px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/logo-icon.svg"
            alt="logo-icon"
            className="sm:w-[26px] w-[20px] sm:h-[42px] h-[30px] object-contain"
          />
          <img
            src="/images/logo.png"
            alt="logo-text"
            className="sm:w-[293px] w-[220px] sm:h-[29px]  h-[25px] object-contain ml-[-2px]"
          />
        </div>

        <div className="md:flex items-center gap-[15px] hidden ">
          <Link
            to={"/"}
            className="text-lightBlue text-[16px] leading-[22px] mediumF cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"/services"}
            className="text-lightGray text-[16px] leading-[22px] mediumF cursor-pointer hover:text-lightBlue"
          >
            Products & Services
          </Link>
          <div className="flex items-center gap-[4px] link__hover">
            <p className="text-lightGray text-[16px] leading-[22px] mediumF cursor-pointer hover:text-lightBlue">
              About
            </p>
            <img
              src="/images/about-arrow.svg"
              alt="arrow-down"
              className="w-[20px] h-[20px] mt-[8px]"
            />

            <div className="absolute hiddenB w-[250px] h-[100px] bg-white appear px-[12px] py-[18px] rounded-[8px] top-[4rem]  ml-[-6rem]">
              <Link
                to={"/about"}
                className="block px-4 py-2 text-[16px] lightF hover:text-lightBlue cursor-pointer"
              >
                About Us
              </Link>
              <Link
                to={"/about/global-outlook"}
                className="block px-4 py-2 text-[16px] lightF hover:text-lightBlue cursor-pointer"
              >
                Global Outlook 2024
              </Link>
            </div>
          </div>
          <Link
            to={"/contact"}
            className="text-lightGray text-[16px] leading-[22px] mediumF cursor-pointer hover:text-lightBlue"
          >
            Contact
          </Link>
        </div>

        <img
          src="/images/menu-icon.svg"
          alt="menu-icon"
          className="cursor-pointer md:hidden flex"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
      </section>

      {toggleMenu && (
        <section className="absolute top-0 bg-white w-full h-[50%] flex flex-col justify-center items-center gap-[1rem]">
          <Link
            to={"/"}
            onClick={() => setToggleMenu(false)}
            className=" text-[16px] lightF hover:text-lightBlue cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"/services"}
            onClick={() => setToggleMenu(false)}
            className=" text-[16px] lightF hover:text-lightBlue cursor-pointer"
          >
            Products & Services
          </Link>

          <Link
            to={"/about"}
            onClick={() => setToggleMenu(false)}
            className="text-[16px] lightF hover:text-lightBlue cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to={"/about/global-outlook"}
            onClick={() => setToggleMenu(false)}
            className=" text-[16px] lightF hover:text-lightBlue cursor-pointer"
          >
            Global Outlook 2024
          </Link>

          <Link
            to={"/"}
            onClick={() => setToggleMenu(false)}
            className=" text-[16px] lightF hover:text-lightBlue cursor-pointer"
          >
            Contact
          </Link>

          <img
            src="/images/close.svg"
            alt="close-icon"
            className="absolute w-[30px] top-[1rem] right-[1rem] cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        </section>
      )}
    </nav>
  );
};

export default Navbar;

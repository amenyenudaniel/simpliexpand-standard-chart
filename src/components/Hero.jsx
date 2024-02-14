import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <header className="hero_bg flex sm:justify-center justify-end flex-col padding">
      <section className="hidden sm:block">
        <div className="text-[36px] boldF blue_gradient_text leading-[43px]">
          <div className="flex items-center">
            <img
              src="/images/blueEllipse.svg"
              alt="ellipse"
              className="ml-[-25px] mr-[10px]"
            />
            Your partner in securing your
          </div>
          financial future with a wide range
          <div className="flex items-center gap-[1rem]">
            of investment options
            <img
              src="/images/greenEllipse.svg"
              alt="ellipse"
              className="mt-[10px]"
            />
          </div>
        </div>
        <div className="mt-[47px]">
          <button
            onClick={() => navigate("/services")}
            className="rounded-[2000px] button_gradient flex items-center px-[30px]  py-[16px] cursor-pointer gap-[5px] hover:bg-black transition"
          >
            <p className="sm:text-[18px] text-[16px] mediumF text-white leading-[22px] ">
              Explore Investment Products
            </p>
            <img
              src={"/images/arrow-button.svg"}
              alt="icon"
              className="sm:w-[20px] sm:h-[20px] mt-[5px] w-[15px] h-[15px]"
            />
          </button>
        </div>
      </section>
      <section className="sm:hidden block">
        <div className="text-[26px] boldF text-white leading-[31px]">
          <div className="flex items-center">
            <img
              src="/images/blueEllipse.svg"
              alt="ellipse"
              className="ml-[-25px] mr-[10px]"
            />
            Your partner in securing
          </div>
          your financial future with a<h1>wide range of investment</h1>
          <div className="flex items-center gap-[1rem]">
            options
            <img
              src="/images/greenEllipse.svg"
              alt="ellipse"
              className="mt-[10px]"
            />
          </div>
        </div>
        <div className="mt-[30px] mb-[50px]">
          <button
            onClick={() => navigate("/services")}
            className="rounded-[2000px] button_gradient flex items-center px-[30px]  py-[16px] cursor-pointer gap-[5px] hover:bg-black transition"
          >
            <p className="sm:text-[18px] text-[16px] mediumF text-white leading-[22px] ">
              Explore Investment Products
            </p>
            <img
              src={"/images/arrow-button.svg"}
              alt="icon"
              className="sm:w-[20px] sm:h-[20px] mt-[5px] w-[15px] h-[15px]"
            />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Hero;

import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  return (
    <section className="grid smm:grid-cols-2 lg:gap-[4rem] md:gap-[2rem] gap-[1rem] items-center justify-center padding bg-[#F7FBFF] pb-[2rem]">
      <img
        src="/images/explore.png"
        alt="explore_image"
        className="lg:w-[652px] lg:h-[474px] md:w-[400px] smm:w-[300px] md:h-[500px] sm:h-[400px] w-full h-full"
      />
      <div>
        <p className="text-green text-[16px] leading-[22px] mediumF md:mb-[16px] mb-[10px]">
          Who we are and What we do
        </p>
        <h1 className="blue_gradient_text md:text-[32px] sm:text-[25px] text-[20px] boldF md:leading-[38px] leading-[28px]">
          We provide investment <br className="lg:flex hidden" />
          advisory services to you
        </h1>
        <p
          className="md:mt-[30px] mt-[15px] text-deepGray 
        md:text-[16px]  text-[14px] lightF leading-[22px] max-w-[420px]"
        >
          Standard Chartered wealth Management Limited Company represents the
          Wealth hub of Ghana and provides Ghanaians a suite of world class
          options to grow and protect their wealth.
        </p>
        <div
          className="md:mt-[56px] mt-[20px]"
          onClick={() => navigate("/services")}
        >
          <Button
            text={"Explore Investment Products"}
            icon={"/images/arrow-button.svg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Explore;

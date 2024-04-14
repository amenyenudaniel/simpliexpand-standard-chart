import React, { useState, useEffect } from "react";
import { accordionData } from "../constants";
import { Link, useNavigate } from "react-router-dom";

const Accordion = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(1);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === accordionData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setAutoplayInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index) => {
    clearInterval(autoplayInterval);
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMouseEnter = () => {
    clearInterval(autoplayInterval);
  };

  const handleMouseLeave = () => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === accordionData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setAutoplayInterval(interval);
  };

  return (
    <section className="padding mt-[81px] md:mb-[50px] sm:gap-[20px] gap-[5px]">
      <p className="text-green text-[16px] leading-[22px] mediumF md:mb-[16px] mb-[10px]">
        Our Investment Products
      </p>
      <h1 className="blue_gradient_text md:text-[32px] sm:text-[25px] text-[20px] boldF md:leading-[38px] leading-[28px] sm:mb-[66px] xs:mb-[30px] mb-[15px]">
        Secure your financial future <br className="sm:flex hidden" />
        with a wide range of
        <br className="sm:flex hidden" /> investment options
      </h1>
      <section
        className="md:relative flex items-start md:flex-row flex-col  lg:gap-[100px] sm:gap-[50px] gap-[10px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-full md:w-[60%] w-full">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-[#DCDDDD]">
              <button
                className="xs:text-[20px] text-[17px] blue_gradient_text boldF outline-none leading-[25px] sm:py-[12px] py-[7px] flex"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
              </button>
              <div
                className={`accordion-content xs:mt-[20px] mt-[6px] ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <div>
                  <div>
                    <p className="xs:leading-[22px] xs:text-[16px] text-[14px] lightF text-deepGray mb-[1rem]">
                      {item.content}
                    </p>
                    {item.link && (
                      <Link
                        to={`${item.link}`}
                        className="flex items-center xs:mt-[16px] mt-[8px] xs:mb-[20px] mb-[20px]"
                      >
                        <p className="mediumF text-lightBlue text-[16px] underline hover:underline-darkGray cursor-pointer">
                          Learn more
                        </p>
                        <img
                          src="/images/blue-arrow.svg"
                          alt="arrow_blue"
                          className="w-[20px] h-[20px] mb-[-5px] "
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full w-[100%] md:mb-[0px] mb-[50px]">
          {accordionData.map((item, index) => (
            <div>
              {activeIndex === index && (
                <img
                  src={item.image}
                  alt="accordion_image"
                  className="rounded-[12px] w-full md:h-[569px] h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Accordion;

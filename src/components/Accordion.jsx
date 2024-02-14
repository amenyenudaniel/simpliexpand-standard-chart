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
    <section className="padding mt-[81px] mb-[50px] xl:ml-[200px] ml-0">
      <p className="text-green text-[16px] leading-[22px] mediumF md:mb-[16px] mb-[10px]">
        Our Investment Products
      </p>
      <h1 className="blue_gradient_text md:text-[32px] text-[25px] boldF md:leading-[38px] leading-[28px] mb-[66px]">
        Secure your financial future <br />
        with a wide range of
        <br /> investment options
      </h1>
      <section
        className="md:relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[450px] xl:h-[60vh] lg:h-[80vh] h-full">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-[#DCDDDD]">
              <button
                className="text-[20px] blue_gradient_text boldF outline-none leading-[25px] py-[12px] flex"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
              </button>
              <div
                className={`accordion-content mt-[20px]  ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <div>
                  <div>
                    <p className="leading-[22px] text-[16px] lightF text-deepGray mb-[1rem]">
                      {item.content}
                    </p>
                    {item.link && (
                      <Link
                        to={`${item.link}`}
                        className="flex items-center mt-[16px] mb-[20px]"
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
                  {activeIndex === index && (
                    <img
                      src={item.image}
                      alt="accordion_image"
                      className="md:absolute top-0 right-0 xl:w-[800px] xl:h-[600px] lg:h-[500px] lg:w-[600px] w-[400px] h-[350px] object-cover rounded-[10px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Accordion;

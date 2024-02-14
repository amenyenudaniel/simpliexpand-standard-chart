import React, { useState, useEffect } from "react";
import { accordionData } from "../constants";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  useEffect(() => {
    // Start autoplay on component mount
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === accordionData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change autoplay interval as needed (in milliseconds)
    setAutoplayInterval(interval);

    // Clear autoplay interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index) => {
    // Pause autoplay when an accordion item is clicked
    clearInterval(autoplayInterval);
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMouseEnter = () => {
    // Pause autoplay when hovering over the accordion
    clearInterval(autoplayInterval);
  };

  const handleMouseLeave = () => {
    // Resume autoplay when not hovering over the accordion
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === accordionData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change autoplay interval as needed (in milliseconds)
    setAutoplayInterval(interval);
  };

  return (
    <section className="paddingLeft mt-[81px] mb-[50px] xl:ml-[300px] ml-0">
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
        <div className="max-w-[500px] md:h-[50vh] h-full">
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
                <div className="">
                  <div>
                    <p className="leading-[22px] text-[16px] lightF text-deepGray">
                      {item.content}
                    </p>

                    <div className="flex items-center mt-[16px] mb-[20px]">
                      <p className="mediumF text-lightBlue text-[16px] underline hover:underline-darkGray cursor-pointer">
                        Learn more
                      </p>
                      <img
                        src="/images/blue-arrow.svg"
                        alt="arrow_blue"
                        className="w-[20px] h-[20px] mb-[-5px]"
                      />
                    </div>
                  </div>
                  {activeIndex === index && (
                    <img
                      src={item.image}
                      alt="accordion_image"
                      className="md:absolute top-0 right-0 lg:w-[600px] w-[400px] lg:h-[500px] h-[300px] object-cover"
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

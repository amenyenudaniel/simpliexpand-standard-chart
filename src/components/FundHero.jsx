import React from "react";

const FundHero = () => {
  return (
    <header className="service_bg flex justify-end flex-col padding">
      <section className="md:mb-[40px] sm:mb-[20px] mb-[15px]">
        <div className="sm:text-[32px] text-[20px] boldF blue_gradient_text sm:leading-[43px] leading-[25px]">
          <div className="flex items-center ">
            <img
              src="/images/blueEllipse.svg"
              alt="ellipse"
              className="xs:ml-[-25px] ml-[-15px] xs:mr-[10px] mr-[6px]"
            />
            Funds Library
            <img
              src="/images/greenEllipse.svg"
              alt="ellipse"
              className="mt-[10px] ml-[10px]"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default FundHero;

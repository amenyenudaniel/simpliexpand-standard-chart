import React from "react";

const ServiceHero = () => {
  return (
    <section>
      <header className="service_bg flex justify-end flex-col padding">
        <section className="md:mb-[40px] sm:mb-[20px] mb-[15px]">
          <div className="sm:text-[32px] text-[20px] boldF blue_gradient_text sm:leading-[43px] leading-[25px]">
            <div className="flex items-center ">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="xs:ml-[-25px] ml-[-15px] xs:mr-[10px] mr-[6px]"
              />
              Secure your financial
            </div>
            <div className="flex items-center gap-[1rem] xs:ml-0 ml-[6px]">
              future with us
              <img
                src="/images/greenEllipse.svg"
                alt="ellipse"
                className="mt-[10px]"
              />
            </div>
          </div>
        </section>
      </header>

      <section className="padding sm:py-[50px] xs:py-[30px] py-[20px]">
        <p className="text-green text-[16px] leading-[22px] mediumF md:mb-[16px] mb-[10px]">
          Products
        </p>
        <h1 className="blue_gradient_text md:text-[32px] sm:text-[25px] text-[20px] boldF md:leading-[38px] leading-[28px]">
          Our Investment <br />
          Products
        </h1>
      </section>
    </section>
  );
};

export default ServiceHero;

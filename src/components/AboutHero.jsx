import React from "react";

const AboutHero = () => {
  return (
    <section>
      <header className="about_bg flex justify-end flex-col padding">
        <section className="md:mb-[40px] sm:mb-[20px] mb-[15px]">
          <div className="sm:text-[32px] text-[20px] boldF text-white sm:leading-[43px] leading-[25px]">
            <div className="flex items-center">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="ml-[-25px] mr-[10px]"
              />
              We are here
            </div>
            <div className="flex items-center gap-[1rem]">
              for good
              <img
                src="/images/greenEllipse.svg"
                alt="ellipse"
                className="mt-[10px]"
              />
            </div>
          </div>
        </section>
      </header>

      <section className="sm:mt-[78px] mt-[50px] sm:mb-[58px] mb-[40px] padding flex flex-col justify-center items-center">
        <h2 className="sm:text-[32px] text-[25px] boldF blue_gradient_text leading-[38px] text-center">
          Who we are and what
          <br className="hidden sm:flex" /> we do
        </h2>

        <p className="sm:text-[18px] text-[16px] leading-[25px] text-center text-deepGray max-w-[747px] sm:mt-[23px] mt-[15px]">
          Standard Chartered Wealth Management Limited Company (SCWML) is a
          subsidiary of Standard Chartered Bank Ghana PLC incorporated to
          provide investment advisory services to the bank’s clients. It is a
          wholly owned subsidiary of the bank and will promote the distribution
          of investment and other wealth products to the bank’s clients.SCWML
          opens the doors of global financial markets to Ghanaians allowing them
          to diversify their investment portfolios more broadly with products
          across different asset classes, currencies and geographies. Ghanaians
          can now invest in securities from any part of the world without having
          to travel to those locations.
        </p>
      </section>

      <section className="partnerBg padding py-[72px] flex flex-col items-end justify-end ">
        <div className=" max-w-[434px]">
          <h2 className="leading-[38px] sm:text-[32px] text-[25px] blue_gradient_text boldF">
            Your partner in securing <br className="sm:flex hidden" />
            your financial future with a<br className="sm:flex hidden" /> wide
            range of investment <br className="sm:flex hidden" />
            options
          </h2>

          <p className="sm:text-[18px] text-[16px] leading-[25px]  text-deepGray  sm:mt-[23px] mt-[15px]">
            We have the expertise in delivering top-of-the-range local and
            offshore investment products in the Ghanaian market. These include
            Government of Ghana treasury bills and bonds in secondary market
            trades, investment grade offshore corporate bonds, Ghana Eurobonds,
            mutual funds originated and managed by some of the world’s leading
            fund managers including BlackRock who are the world’s largest fund
            managers with Asset Under Management (AUM) of over $10 trillion.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutHero;

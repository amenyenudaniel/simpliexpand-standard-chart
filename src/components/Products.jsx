import React from "react";

const Products = () => {
  return (
    <section className="padding">
      <section className="py-[24px] md:flex-row flex-col flex items-start gap-[41px] justify-center">
        <div className="md:max-w-[440px] w-full">
          <h2 className="sm:text-[20px] text-[18px] boldF sm:mb-[24px] mb-[10px] text-darkGray">
            Mutual Funds
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Our mutual funds offer an affordable access to a range of assets and
            markets to match your risk profile and financial goals.
          </p>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF sm:leading-[22px] leading-[19px]">
                Access a wide range of funds from leading fund houses
              </p>
            </div>

            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px]  lightF sm:leading-[22px] leading-[19px]">
                Access a team of trusted advisors. Our experienced team of
                Investment Specialists and Relationship Managers will help you
                select mutual funds according to your specific needs.
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Access a team of trusted advisors. Our experienced team of
                Investment Specialists and Relationship Managers will help you
                select mutual funds according to your specific needs.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/product.png"
          alt="service-img"
          className="xl:w-[700px] lg:w-[600px] md:w-[400px] w-full"
        />
      </section>

      {/* second */}

      <section className="py-[24px] md:flex-row flex-col flex items-start gap-[41px] justify-center">
        <img
          src="/images/income.png"
          alt="service-img"
          className="xl:w-[700px] lg:w-[600px] md:w-[400px] w-full"
        />
        <div className="md:max-w-[500px] w-full">
          <h2 className="sm:text-[20px] blue_gradient_text text-[18px] boldF sm:mb-[24px] mb-[10px]">
            Fixed Income Securities
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Create steady income with stability in unpredictable market
            conditions.
          </p>

          <div className="flex items-center md:mb-[20px] sm:mb-[15px] mb-[10px]">
            <p className="mediumF text-lightBlue text-[16px] underline hover:underline-darkGray cursor-pointer">
              Learn more
            </p>
            <img
              src="/images/blue-arrow.svg"
              alt="arrow_blue"
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF sm:leading-[22px] leading-[19px]">
                We assist you with wealth planning. Long term, consistent
                investing is critical in wealth management and financial
                planning.
              </p>
            </div>

            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px]  lightF sm:leading-[22px] leading-[19px]">
                Get international exposure. Achieve diversification by investing
                in different bonds across different regions. Our fixed income
                products are issued by reputable corporates, supranational and
                sovereigns
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Diversify by investing in different type of bonds: onshore,
                offshore, corporate and government bonds.
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Investment has never been easier. Simply invest from your
                current account and enjoy the benefits of regular income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third */}

      <section className="py-[24px] md:flex-row flex-col flex items-start gap-[41px] justify-center">
        <div className="md:max-w-[500px] w-full">
          <h2 className="sm:text-[20px] blue_gradient_text text-[18px] boldF sm:mb-[24px] mb-[10px]">
            Bancassrance - Protecting You and Your valuables
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Take advantage of our partnerships with global insurance providers
            to find the right protection for your health, retirement, education,
            legacy planning, savings, and investments.
          </p>

          <div className="flex items-center md:mb-[20px] sm:mb-[15px] mb-[10px]">
            <p className="mediumF text-lightBlue text-[16px] underline hover:underline-darkGray cursor-pointer">
              Learn more
            </p>
            <img
              src="/images/blue-arrow.svg"
              alt="arrow_blue"
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF sm:leading-[22px] leading-[19px]">
                Maintain your family’s lifestyle in spite of any life changing
                events that may occur.
              </p>
            </div>

            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px]  lightF sm:leading-[22px] leading-[19px]">
                Get covered for Critical illness, Total Permanent Disability and
                Death
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Guaranteed maturity payment to you or your family.
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Expedited claim payment for your Motor insurance, after receipt
                of all documentation.
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                In the event that your home is rendered inhabitable due to an
                insured peril, you will be reimbursed the rental of alternative
                accommodation up to a limit for 3 months.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/security.png"
          alt="service-img"
          className="xl:w-[700px] lg:w-[600px] md:w-[400px] w-full"
        />
      </section>
    </section>
  );
};

export default Products;

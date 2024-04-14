import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <section className="padding">
      <section className="py-[24px] gap-[41px] grid md:grid-cols-2 w-full">
        <div className="w-full" id="mutual-funds">
          <h2 className="sm:text-[20px] text-[18px] boldF sm:mb-[24px] mb-[10px] newT">
            Mutual Funds
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Our mutual funds offer an affordable access to a range of assets and
            markets to match your risk profile and financial goals.
          </p>
          <div className="flex flex-col gap-[12px]">
            <div>
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

              <Link to={"/services/fund-library"}>
                <p className="lightF sm:text-[16px] text-[14px] underline text-lightBlue ml-[20px]">
                  {" "}
                  View Fund Library
                </p>
              </Link>
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
          className="w-full lg:h-[500px] h-full"
        />
      </section>

      {/* second */}

      <section
        className="py-[24px] grid md:grid-cols-2 gap-[41px] justify-center"
        id="fixed-income-securities"
      >
        <img
          src="/images/icome.png"
          alt="service-img"
          className="w-full lg:h-[500px] h-full"
        />
        <div className="w-full">
          <h2 className="sm:text-[20px] newT text-[18px] boldF sm:mb-[24px] mb-[10px]">
            Fixed Income Securities
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Create steady income with stability in unpredictable market
            conditions.
          </p>

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

      <section
        className="py-[24px] grid md:grid-cols-2 gap-[41px] justify-center"
        id="security"
      >
        <div className=" w-full">
          <h2 className="sm:text-[20px] newT text-[18px] boldF sm:mb-[24px] mb-[10px]">
            Security Backed Lending
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Personal line of credit is an efficient and convenient way of
            meeting all your short-term liquidity needs
          </p>

          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF sm:leading-[22px] leading-[19px]">
                Get financing cover up to maximum of 70% for securities and 90%
                for fixed deposits .
              </p>
            </div>

            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px]  lightF sm:leading-[22px] leading-[19px]">
                You get financing up to 90% of your collateral value for the
                personal line of credit.
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Fixed Deposits maintained with Standard Chartered Bank and other
                investments like Bonds, Treasury bills and Mutual funds.
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                We offer the most competitive interest rates in the market. So,
                you earn substantial returns on your investments and avail
                Personal Line of Credit facility to balance out your cash needs.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/security.png"
          alt="service-img"
          className="w-full lg:h-[500px] h-full"
        />
      </section>

      {/* fourth */}

      <section
        className="py-[24px] grid md:grid-cols-2 gap-[41px] justify-center"
        id="protect"
      >
        <img
          src="/images/product4.png"
          alt="service-img"
          className="w-full lg:h-[500px] h-full"
        />
        <div className="w-full">
          <h2 className="sm:text-[20px] newT text-[18px] boldF sm:mb-[24px] mb-[10px]">
            Bancassrance - Protecting You and Your valuables
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Take advantage of our partnerships with global insurance providers
            to find the right protection for your health, retirement, education,
            legacy planning, savings, and investments.
          </p>

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
      </section>

      {/* Last */}

      <section
        className="py-[24px] grid md:grid-cols-2 gap-[41px] justify-center"
        id="wealth"
      >
        <div className="w-full">
          <h2 className="sm:text-[20px] newT text-[18px] boldF sm:mb-[24px] mb-[10px]">
            Wealth Lending
          </h2>

          <p className="sm:text-[16px] text-[15px] lightF text-deepGray mb-[32px]">
            Unlocking Your Cash Needs with Foreign Currency Overdrafts
          </p>

          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF sm:leading-[22px] leading-[19px]">
                Dollar Power in Your Pocket: Access Instant foreign currency
                using your investment at Competitive Rates
              </p>
            </div>

            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px]  lightF sm:leading-[22px] leading-[19px]">
                Secure Your Financial Future: Build Credit, Invest Wisely,
                Weather Emergencies with foreign currency at Your Fingertips
              </p>
            </div>
            <div className="flex gap-[10px] items-start">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="w-[12px] mt-[8px]"
              />
              <p className="text-darkGray sm:text-[16px] text-[15px] lightF  sm:leading-[22px] leading-[19px]">
                Ditch the High Borrowing Rates, Embrace Smart Borrowing: Our
                Competitive Overdrafts Help access cash at low interest rates
              </p>
            </div>
          </div>
        </div>
        <img
          src="/images/product5.png"
          alt="service-img"
          className="w-full lg:h-[500px] h-full"
        />
      </section>
    </section>
  );
};

export default Products;

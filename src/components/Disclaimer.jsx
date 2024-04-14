import { useState } from "react";

const Disclaimer = () => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(true);
  return (
    <section className="padding md:py-[50px] xs:py-[30px] py-[15px]">
      <h1 className="boldF blue_gradient_text sm:text-[32px] xs:text-[25px] text-[20px] xs:mb-[20px] mb-[10px]">
        Disclaimer
      </h1>
      {showText && (
        <p className="text-[#868788] sm:text-[18px] xs:text-[16px] text-[15px] lightF xs:leading-[25px] max-w-[1063px]">
          Investment Products and Services are distributed by Standard Chartered
          Bank Ghana PLC through its wholly-owned subsidiary Standard Chartered
          Wealth Management Limited Company, licensed by the Securities and
          Exchange Commission as an Investment Adviser. You should read the
          relevant prospectuses before deciding whether to invest in a mutual
          fund. Investments in mutual funds are not obligations of, deposits in,
          or guaranteed by, Standard Chartered Bank Ghana PLC or its affiliates
          and subsidiaries. Mutual funds are not available to US persons. The
          contents on this webpage are for general information only and do not
          constitute an offer, recommendation, or solicitation of an offer to
          enter into a transaction or adopt any hedging, trading or investment
          strategy, nor do they constitute any prediction of likely future
          movements in rates or prices or any representation that any such
          future movements will not exceed those shown in any illustration. The
          contents have not been prepared for any particular person or class of
          persons and it has been prepared without regards to the specific
          investment objectives, financial situation or particular needs of any
          person. You should seek advice from a financial adviser on the
          suitability of the product for you, taking into account these factors
          before making a commitment to purchase the product. In the event that
          you choose not to seek advice from a licensed or an exempt financial
          adviser, you should carefully consider whether this product is
          suitable for you. You are fully responsible for your investment
          decision, including whether the product or service described here is
          suitable for you. The products/services involved are not
          principal-protected and you may lose all or part of your original
          investment amount. SCB will not accept any responsibility or liability
          of any kind, with respect to the accuracy or completeness of the
          information in this webpage. For lumpsum investments there will be an
          upfront one-off sales charge of up to 5% of the investment amount. For
          Wealth builder plans, the first instalment of the monthly contribution
          will be charged as a plan set-up fee. Please refer to the indicative
          term sheet/fact sheet for more information on annual management
          charges and speak to your tax adviser on tax related information of
          this investment. The contents herein are for general evaluation only
          and has not been prepared to be suitable for any particular person or
          class of persons. Standard Chartered Bank Ghana PLC or its affiliates
          and subsidiaries make no representation or warranty of any kind,
          express, implied, or statutory regarding the contents on this webpage
          or any information contained or referred to herein. The returns and
          volatility measures on this page are annualised. This webpage is
          distributed on the express understanding that, whilst the information
          in it is believed to be reliable, it has not been independently
          verified by us.
        </p>
      )}

      {showText1 && (
        <p className="text-[#868788] sm:text-[18px] xs:text-[16px] text-[15px] lightF xs:leading-[25px] max-w-[1063px]">
          Investment Products and Services are distributed by Standard Chartered
          Bank Ghana PLC through its wholly-owned subsidiary Standard Chartered
          Wealth Management Limited Company, licensed by the Securities and
          Exchange Commission as an Investment Adviser. You should read the
          relevant prospectuses before deciding whether to invest in a mutual
          .....
        </p>
      )}

      {showText ? (
        <p
          className="text-lightBlue lightF sm:mt-[37px] xs:mt-[15px] mt-[8px] xs:text-[16px] text-[14px] lightF cursor-pointer hover:underline"
          onClick={() => {
            setShowText1(true);
            setShowText(false);
          }}
        >
          Show less
        </p>
      ) : (
        <p
          className="text-lightBlue lightF sm:mt-[37px] xs:mt-[15px] mt-[8px] xs:text-[16px] text-[14px] lightF cursor-pointer hover:underline"
          onClick={() => {
            setShowText(true);
            setShowText1(false);
          }}
        >
          Show more
        </p>
      )}
    </section>
  );
};

export default Disclaimer;

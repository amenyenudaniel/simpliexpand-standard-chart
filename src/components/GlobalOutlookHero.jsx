import React from "react";

const GlobalOutlook = () => {
  return (
    <section>
      <header className="global_bg flex justify-end flex-col padding">
        <section className="md:mb-[40px] sm:mb-[20px] mb-[15px]">
          <div className="sm:text-[32px] text-[20px] boldF text-white sm:leading-[43px] leading-[25px]">
            <div className="flex items-center">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="ml-[-25px] mr-[10px]"
              />
              Global
            </div>
            <div className="flex items-center gap-[1rem]">
              Outlook 2024
              <img
                src="/images/greenEllipse.svg"
                alt="ellipse"
                className="mt-[10px]"
              />
            </div>
          </div>
        </section>
      </header>

      <section className="flex sm:flex-row flex-col gap-[21px] justify-center padding py-[43px]">
        <div className="max-w-[535px]">
          <p className="sm:text-[18px] text-[16px] leading-[25px] text-deepGray lightF mb-[36px] ">
            {" "}
            “A year ago, we emphasised the importance of avoiding the temptation
            to stay away from investments because of volatile markets which,
            very fortunately, are temporary in nature and always present
            investors the opportunity to buy their favourite investments at low
            prices to enable them to maximise their returns or accelerate the
            pace of portfolio recovery. Most of our clients heeded this call
            and, sure enough, are witnesses to the extraordinary returns
            recorded by our recommended investments and model portfolios in
            2023.{" "}
          </p>

          <p className="sm:text-[18px] text-[16px] leading-[25px] text-deepGray lightF">
            {" "}
            As we step into 2024, we are likely to see interest rates drop in
            some of the world’s major economies, as inflationary pressures
            subside. This should be favourable for investments. We continue to
            advise that clients maintain diversified portfolios, which can be
            achieved easily by investing in our carefully selected list of
            offshore mutual funds, some of which pay monthly dividends in US
            dollars, Pounds Sterling and Euros. Standard Chartered partners and
            distributes offshore mutual funds from top-of-the- range fund
            managers including the world’s largest asset managers – BlackRock!
            We also have a suite of offshore investment grade corporate and
            government bonds offering attractive interest payments that you can
            select from.
          </p>
        </div>
        <div className="max-w-[535px]">
          <p className="sm:text-[18px] text-[16px] leading-[25px] text-deepGray lightF mb-[36px] ">
            {" "}
            On the local front, we expect Government of Ghana treasury bills to
            continue to offer attractive short-term returns, especially as
            inflation shows signs of dropping towards the desired levels. We
            welcome you to our offices on the 4th Floor of Standard Chartered
            Opeibea House building or drop by any of our branches and speak with
            our certified Investment Advisors on what best suits your investment
            needs”
          </p>

          <div>
            <div className="md:w-[541px] md:h-[326px] sm:w-[350px] sm:h-[250px]  w-full h-full flex items-center justify-center global_image">
              <img src="/images/woman.svg" alt="woman-img" />
            </div>

            <p className="text-darkGray text-[16px] boldF mt-[16px] mb-[10px]">
              Dr. Setor Quashigah
            </p>

            <p className="text-[14px]  leading-[16px] text-deepGray lightF ">
              Head Affluent & Wealth Management/CEO, Standard Chartered Wealth
              Management Limited Company
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GlobalOutlook;

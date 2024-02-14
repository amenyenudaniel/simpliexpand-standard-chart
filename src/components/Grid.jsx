import React from "react";
import Button from "./Button";

const Grid = () => {
  return (
    <>
      <section className="padding">
        <section className=" py-[50px]">
          <p className="text-green text-[16px] leading-[22px] mediumF md:mb-[16px] mb-[10px]">
            Services
          </p>
          <h1 className="blue_gradient_text md:text-[32px] text-[25px] boldF md:leading-[38px] leading-[28px]">
            Tailored Investment <br />
            Solutions
          </h1>
        </section>

        <section className="flex md:flex-row flex-col gap-[16px] justify-center">
          <div className="grid1 flex items-end mainGrid w-full">
            <div className="first_gradient p-[38px] w-full">
              <h2 className="text-white sm:text-[23px] text-[18px] boldF leading-[27px] mb-[12px]">
                Save money on transfers
              </h2>
              <div className="hiddenGrid hidden">
                <div className="mt-[24px] flex items-center gap-[10px]">
                  <div className="w-[7px] h-[60px] bg-line"></div>
                  <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                    Are you a business that imports from China? Transfer in
                    Chinese Yuan (CNY) instead of USD.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid2 flex items-end mainGrid">
            <div className="first_gradient p-[38px] w-full">
              <h2 className="text-white sm:text-[23px] text-[18px] boldF leading-[27px] mb-[12px]">
                Beat the Market
              </h2>
              <p className="text-white sm:text-[18px] text-[15px] leading-[25px]lightF">
                Score Winning FX Rates Every Time
              </p>

              <div className="hiddenGrid hidden">
                <div className="flex gap-[1rem]">
                  <div className="mt-[24px] flex items-center gap-[10px]">
                    <div className="w-[7px] h-[60px] bg-line"></div>
                    <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                      Forget hidden fees and inflated margins. We offer
                      transparent, market-leading rates on USD, EUR,GBP and
                      other currencies, putting more money in your pocket
                    </p>
                  </div>
                  <div className="mt-[24px] flex items-center gap-[10px]">
                    <div className="w-[7px] h-[60px] bg-line"></div>
                    <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                      No more wondering if you're getting the best deal. Our
                      competitive FX pricing ensures you always get the best
                      rates for your FX purchases and inward transfers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Second Grid */}

        <section className="flex md:flex-row flex-col gap-[16px] justify-center mt-[16px]">
          <div className="grid3 flex items-end mainGrid">
            <div className="first_gradient p-[38px] w-full">
              <h2 className="text-white sm:text-[23px] text-[18px] boldF leading-[27px] mb-[12px]">
                Your FX Playground
              </h2>
              <p className="text-white sm:text-[18px] text-[15px] leading-[25px]lightF">
                Manage Currencies Anytime, anywhere
              </p>

              <div className="hiddenGrid hidden">
                <div className="mt-[24px] flex items-center gap-[10px]">
                  <div className="w-[7px] h-[60px] bg-line"></div>
                  <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                    Forget hidden fees and inflated margins. We offer
                    transparent, Travel, business, investments – whatever your
                    FX need, our platform gives you 24/7 access to buy and sell
                    USD, EUR, and GBP with ease. Market-leading rates on USD,
                    EUR,GBP and other currencies, putting more money in your
                    pocket
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid4 flex items-end mainGrid">
            <div className="first_gradient p-[38px] w-full">
              <h2 className="text-white sm:text-[23px] text-[18px] boldF leading-[27px] mb-[12px]">
                Secure & Simple
              </h2>
              <p className="text-white sm:text-[18px] text-[15px] leading-[25px]lightF">
                Trust Your Money with the Best
              </p>

              <div className="hiddenGrid hidden">
                <div className="mt-[24px] flex items-center gap-[10px]">
                  <div className="w-[7px] h-[60px] bg-line"></div>
                  <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                    Forget complex paperwork and confusing jargon. Our intuitive
                    platform makes buying and selling USD, EUR, and GBP
                    accessible and effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex gap-[16px] justify-center mt-[16px]">
          <div className="grid5 flex items-end mainGrid w-[1320px]">
            <div className="first_gradient p-[38px] w-full">
              <h2 className="text-white sm:text-[23px] text-[18px] boldF leading-[27px] mb-[12px]">
                Join the FX Revolution
              </h2>
              <p className="text-white sm:text-[18px] text-[15px] leading-[25px]lightF">
                Experience the Future of Currency Exchange
              </p>

              <div className="hiddenGrid hidden">
                <div className="flex gap-[1rem]">
                  <div className="mt-[24px] flex items-center gap-[10px]">
                    <div className="w-[7px] h-[60px] bg-line"></div>
                    <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                      Ditch the old, embrace the new. Our digital platform is
                      redefining how you access and manage your USD, EUR, and
                      GBP, making it simpler, faster, and more rewarding
                    </p>
                  </div>
                  <div className="mt-[24px] flex items-center gap-[10px]">
                    <div className="w-[7px] h-[60px] bg-line"></div>
                    <p className="text-white lightF sm:text-[16px] text-[15px] leading-[22px]">
                      Take control of your finances and unlock a world of
                      currency possibilities. Start your FX journey today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <img
        src="/images/add2.png"
        alt="ads"
        className="mt-[118px] w-full md:flex hidden"
      />
      <img
        src="/images/add2mobile.png"
        alt="ads"
        className="mt-[70px] w-full md:hidden flex"
      />
    </>
  );
};

export default Grid;

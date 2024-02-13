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
                <div className="mt-[24px]">
                  <Button
                    icon={"/images/arrow-button.svg"}
                    text={"Learn more"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid2 flex items-end mainGrid">
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
                <div className="mt-[24px]">
                  <Button
                    icon={"/images/arrow-button.svg"}
                    text={"Learn more"}
                  />
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
                <div className="mt-[24px]">
                  <Button
                    icon={"/images/arrow-button.svg"}
                    text={"Learn more"}
                  />
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
                <div className="mt-[24px]">
                  <Button
                    icon={"/images/arrow-button.svg"}
                    text={"Learn more"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex gap-[16px] justify-center mt-[16px]">
          <div className="grid5 flex items-end mainGrid w-[1320px]">
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
                <div className="mt-[24px]">
                  <Button
                    icon={"/images/arrow-button.svg"}
                    text={"Learn more"}
                  />
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

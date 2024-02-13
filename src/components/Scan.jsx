import React from "react";

const Scan = () => {
  return (
    <>
      <section className="padding adds_container flex items-center justify-center md:gap-[7rem] gap-[2rem] md:flex hidden">
        <div className="pt-[36px]">
          <div className="text-[41px] boldF leading-[49px] text-white">
            <div className="flex items-center">
              <img
                src="/images/blueEllipse.svg"
                alt="ellipse"
                className="ml-[-25px] mr-[10px]"
              />
              Family Assurance
            </div>

            <div className="flex items-center gap-[1rem]">
              Plan
              <img
                src="/images/greenEllipse.svg"
                alt="ellipse"
                className="mt-[10px]"
              />
            </div>
          </div>

          <p className="max-w-[440px] text-white text-[18px] leading-[21px] boldF mb-[32px]">
            Sustain your dreams in the face of life’s unexpected challenges
          </p>

          <div className="flex gap-[2rem]">
            <div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <p className="mediumF text-white text-[16px] leading-[22px]">
                  Guarantee Maturity
                </p>
              </div>

              <div className="flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <p className="mediumF text-white text-[16px] leading-[22px]">
                  Death/Disability
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <p className="mediumF text-white text-[16px] leading-[22px]">
                  Accidental Death
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <p className="mediumF text-white text-[16px] leading-[22px]">
                  Family Income
                </p>
              </div>

              <div className="flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <p className="mediumF text-white text-[16px] leading-[22px]">
                  Free 5-year extended cover
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                <p className="mediumF text-white text-[16px] leading-[22px]">
                  Waiver of Premium Benefits
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#38D200] px-[16px] py-[12px] rounded-[60px] mt-[57px] text-[18px] boldF text-white hover:cursor-pointer outline-none hover:border border-[#38D200] hover:border-2 hover:bg-transparent transition">
            Sign up now
          </button>
        </div>

        <img
          src="/images/scan.svg"
          alt="scan_image"
          className="w-[325px] h-[244px] object-contain md:block hidden"
        />
      </section>
      <img src="/images/scanmobile.png" alt="" className="md:hidden" />
    </>
  );
};

export default Scan;

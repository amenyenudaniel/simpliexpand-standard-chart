import React from "react";
import Scan from "./Scan";

const ContactHero = () => {
  return (
    <div>
      <section className="">
        <header className="contact_bg flex justify-end flex-col padding">
          <section className="md:mb-[40px] sm:mb-[20px] mb-[15px]">
            <div className="sm:text-[32px] text-[20px] boldF text-white sm:leading-[43px] leading-[25px]">
              <div className="flex items-center">
                <img
                  src="/images/blueEllipse.svg"
                  alt="ellipse"
                  className="ml-[-25px] mr-[10px]"
                />
                Secure your financial
              </div>
              <div className="flex items-center gap-[1rem]">
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

        <section className="mt-[110px] mb-[110px] flex justify-center gap-[45px] flex-wrap padding">
          <div className="w-[550px] h-full">
            <iframe
              width="100%"
              height="440"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Liberation%20Road,%20Accra+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
          <div>
            <h2 className="blue_gradient_text mb-[24px] text-[20px] boldF leading-[24px]">
              Speak to us today
            </h2>

            <div className="flex items-center gap-[12px] mt-[16px] mb-[12px]">
              <img
                src="/images/phone2.svg"
                alt="phone-icon"
                className="w-[20px] h-[20px] mt-[3px]"
              />
              <p className="text-darkGray text-[16px] lightF leading-[22px]">
                +233 27 650 2513
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <img
                src="/images/email2.svg"
                alt="phone-icon"
                className="w-[20px] h-[20px] mt-[3px]"
              />
              <p className="text-darkGray text-[16px] lightF leading-[22px] w-full">
                info@scwealthmanagement.com
              </p>
            </div>

            <h2 className="blue_gradient_text mb-[24px] text-[20px] boldF leading-[24px] mt-[61px]">
              Visit us today
            </h2>

            <div className="flex items-start gap-[12px]">
              <img
                src="/images/location.svg"
                alt="phone-icon"
                className="w-[20px] h-[20px] mt-[3px]"
              />
              <p className="text-darkGray text-[16px] lightF leading-[22px]">
                4th Floor <br />
                Opeibea House <br /> Liberation Road, Accra
              </p>
            </div>
          </div>
        </section>
      </section>
      <Scan />
    </div>
  );
};

export default ContactHero;

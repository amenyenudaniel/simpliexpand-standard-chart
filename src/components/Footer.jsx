import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="contact py-[2rem] sm:pl-[80px] pl-[2rem] flex flex-col justify-center items-center sm:items-start">
        <p className="text-green text-[16px] leading-[22px] mediumF md:mb-[16px] mb-[10px]">
          Contact Us
        </p>
        <h1 className="blue_gradient_text md:text-[32px] text-[25px] boldF md:leading-[38px] leading-[28px]">
          Wealth Management <br /> solutions wherever you go
        </h1>

        <img
          src="/images/mask.svg"
          alt="mask"
          className="object-contain w-[200px]"
        />

        <p className="text-[#0473EA] text-[16px] boldF leading-[19px] mt-[10px] sm:text-right text-center">
          Scan to connect with a wealth <br className="flex sm:hidden" />
          advisor now
        </p>

        <p className="text-[#0473EA] text-[20px] mediumF leading-[19px] mt-[34px]">
          Contact us
        </p>

        <div className="flex gap-[4rem] sm:flex-row flex-col">
          <div>
            <p className="blue_gradient_text text-[20px] mediumF leading-[19px] mt-[10px] mb-[10px]">
              Investments
            </p>

            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              +233 501 648 227
            </p>
            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              +233 200 127 755
            </p>
            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              +233 501 627 628
            </p>
            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              Jerry.Asangba@sc.com
            </p>
          </div>

          <div>
            <p className="blue_gradient_text text-[20px] mediumF leading-[19px] mt-[10px] mb-[10px]">
              Bancassurance
            </p>

            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              +233 501 693 401
            </p>
            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              +233 508 412 732
            </p>
            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              +233 501 693 411
            </p>
            <p className="text-darkGray text-[16px] lightF leading-[22px] mb-[4px]">
              Kantu.Achira@sc.com
            </p>
          </div>
        </div>
      </section>

      <div className="footer-bg sm:px-[60px] px-[1rem] pt-[34px] pb-[50px]">
        <section className="  flex justify-between gap-[2rem] flex-wrap">
          <div>
            <img
              src="/images/footer-logo.png"
              alt="footer-logo"
              className="object-contain w-[320px]"
            />

            <p className="text-[14px] text-white mt-[30px] lightF leading-[16px]">
              Subsidiary of Standard Chartered Bank PLC
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[18px] text-white mediumF leading-[21px]">
              Quick links
            </p>
            <Link
              className="text-light text-[16px] hover:text-white lightF leading-[22px]"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-light text-[16px] hover:text-white lightF leading-[22px]"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="text-light text-[16px] hover:text-white lightF leading-[22px]"
              to={"/services"}
            >
              Services
            </Link>
            <Link
              className="text-light text-[16px] lightF leading-[22px]
            hover:text-white"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div>
            <p className="text-[18px] text-white mediumF leading-[21px]">
              Speak to us today:
            </p>
            <div className="flex items-center gap-[12px] mt-[16px] mb-[12px]">
              <img
                src="/images/phone.svg"
                alt="phone-icon"
                className="w-[20px] h-[20px] mt-[3px]"
              />
              <p className="text-light text-[16px] lightF leading-[22px]">
                +233 27 650 2513
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <img
                src="/images/email.svg"
                alt="phone-icon"
                className="w-[20px] h-[20px] mt-[3px]"
              />
              <p className="text-light text-[16px] lightF leading-[22px]">
                info@scwealthmanagement.com
              </p>
            </div>
          </div>
        </section>

        <p className="text-center text-white mediumF text-[14px] leading-[16px] mt-[60px]">
          © Standard Chartered 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

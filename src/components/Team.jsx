import { useState } from "react";
import { managementTeam } from "../constants";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="padding">
      <h1 className="text-center blue_gradient_text mt-[41px] mb-[44px] sm:text-[32px] text-[25px] boldF leading-[38px]">
        Meet our Team
      </h1>

      <section className="flex items-center mb-[20px]">
        <h2 className="sm:text-[20px] text-[18px] sm:w-[220px] w-full boldF text-darkGray leading-[24px]">
          Management Team
        </h2>
        <div className="bg-[#DCDDDD] w-[80%] h-[1px] md:block hidden mt-[4px]"></div>
      </section>

      {/* Management */}
      <section className="flex md:flex-row flex-col gap-[10px] relative md:text-start text-center">
        {managementTeam.map((item, index) => (
          <div key={index}>
            <div
              className={`lg:w-[300px] md:w-[200px] w-full flex flex-col items-center justify-center ${
                activeIndex === index && "md:mb-[50vh]"
              } `}
            >
              <img
                src={item.image}
                alt="team_image"
                className="w-[140px] h-[140px] object-cover"
              />
              <h2 className="text-darkGray mediumF text-[18px] leading-[21px]">
                {item.name}
              </h2>
              <p className="text-[14px] mediumF text-deepGray leading-[16px]">
                {item.title}
              </p>

              <div
                className={`flex items-center cursor-pointer mt-[16px] mb-[20px] ${
                  activeIndex === index && "hidden"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <p className="lightF text-lightBlue text-[16px] cursor-pointer hover:underline transition">
                  View more
                </p>
                <img
                  src="/images/arrowdownblue.svg"
                  alt="arrow_blue"
                  className="w-[20px] h-[20px] mb-[-5px]"
                />
              </div>
            </div>
            {activeIndex === index && (
              <div className="md:mt-[50px] mt-[20px] bg-[#F7F7F7] px-[16px] py-[15px] md:absolute left-0 top-[11rem]">
                {item.appointment && (
                  <div>
                    <p className="sm:text-[18px] text-[16px] lightF text-deepGray">
                      <span className="text-darkGray boldF leading-[21px]">
                        Appointment:{" "}
                      </span>
                      {item.appointment}
                    </p>
                  </div>
                )}

                <p className="sm:text-[18px] text-[16px] lightF text-deepGray mt-[10px]">
                  <span className="text-darkGray boldF leading-[21px]">
                    Career:{" "}
                  </span>
                  {item.career}
                </p>

                <p className="sm:text-[18px] text-[16px] lightF text-deepGray mt-[10px]">
                  <span className="text-darkGray boldF leading-[21px]">
                    Education:{" "}
                  </span>
                  {item.education}
                </p>

                <div
                  className="flex items-center cursor-pointer mt-[5px] border-t border-[#DCDDDD]"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="lightF text-lightBlue text-[16px] cursor-pointer hover:underline transition">
                    Hide Details
                  </p>
                  <img
                    src="/images/arrowdownblue.svg"
                    alt="arrow_blue"
                    className="w-[20px] h-[20px] mb-[-5px]"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Second */}

      <section className="flex items-center mt-[50px] mb-[20px]">
        <h2 className="sm:text-[20px] text-[18px] sm:w-[220px] w-full boldF text-darkGray leading-[24px]">
          Board of Directors
        </h2>
        <div className="bg-[#DCDDDD] w-[80%] h-[1px] md:block hidden mt-[4px]"></div>
      </section>
    </section>
  );
};

export default Team;

import { useState } from "react";
import { managementTeam2, managementTeam3 } from "../constants";

const TeamC = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="padding mt-[30px]">
      {/* Management */}
      <section className="flex md:flex-row flex-col gap-[10px] relative md:text-start text-center">
        {managementTeam3.map((item, index) => (
          <div key={index}>
            <div
              className={`lg:w-[300px] md:w-[200px] w-full flex flex-col items-center justify-center text-center 
                `}
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

              {activeIndex !== index ? (
                <div
                  className={`flex items-center items-end cursor-pointer mt-[16px] mb-[20px] ${
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
              ) : (
                <img
                  src="/images/arrow-view.svg"
                  alt="arrow-view"
                  className={
                    item.link
                      ? "md:flex hidden absolute bottom-[0.4rem]"
                      : "md:flex hidden "
                  }
                />
              )}

              <div className="md:hidden mt-[10px] mb-[2rem]">
                <section className="mt-[10px] ">
                  {activeIndex === index && (
                    <div className="mt-[-10px] bg-[#F7F7F7] px-[16px] py-[15px]">
                      <p className="sm:text-[18px] text-[16px] lightF text-deepGray">
                        <span className="text-darkGray boldF leading-[21px]">
                          Appointment:{" "}
                        </span>
                        {item.appointment}
                      </p>

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
                </section>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-[4rem] hidden md:flex">
        {managementTeam3.map((item, index) => (
          <section>
            {activeIndex === index && (
              <div className=" mt-[-10px] bg-[#F7F7F7] px-[16px] py-[15px] relative">
                <p className="sm:text-[18px] text-[16px] lightF text-deepGray">
                  <span className="text-darkGray boldF leading-[21px]">
                    Appointment:{" "}
                  </span>
                  {item.appointment}
                </p>

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
          </section>
        ))}
      </section>
    </section>
  );
};

export default TeamC;

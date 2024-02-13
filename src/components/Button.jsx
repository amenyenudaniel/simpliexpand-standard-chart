import React from "react";

const Button = ({ icon, text }) => {
  return (
    <button className="rounded-[2000px] button_gradient flex items-center px-[20px] py-[10px] cursor-pointer gap-[5px] hover:bg-black transition">
      <p className="sm:text-[16px] text-[14px] mediumF text-white leading-[22px] ">
        {text}
      </p>
      <img
        src={icon}
        alt="icon"
        className="sm:w-[20px] sm:h-[20px] mt-[5px] w-[15px] h-[15px]"
      />
    </button>
  );
};

export default Button;

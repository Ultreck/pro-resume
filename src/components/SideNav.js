import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="text-[#64ffda] fixed w-20 mt-28 h-[80vh]">
      <div className="text mt-44">
        <div className="text-center my-8 mx-auto text-2xl flex justify-center">
          <FaGithub />
        </div>
        <div className="text-center my-8 mx-auto text-2xl flex justify-center">
          <AiFillLinkedin />
        </div>
        <div className="text-center my-8 mx-auto text-2xl flex justify-center">
          <FaWhatsappSquare />
        </div>
        <div className="text-center my-8 mx-auto text-2xl flex justify-center">
          <FaInstagramSquare />
        </div>
        <div className="text-center my-8 mx-auto text-2xl flex justify-center">
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

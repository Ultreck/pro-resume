import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import tweeter from "../images/brandico--twitter-bird (2).svg";

const SideNav = () => {
  const socialWebsites = [
    {
      url: "https://github.com/Ultreck",
      name: "Github",
      className: "text-[#8bada5] hover:text-black hover:bg-red-600 hover:shadow-md hover:shadow-red-600",
      icon: <FaGithub />,
    },
    {
      url: "https://www.linkedin.com/in/a-emmanuel-oluwatayese-39254b218/",
      name: "LinkedIn",
      className:
        "text-[#8bada5] hover:text-black hover:bg-sky-600 hover:shadow-md hover:shadow-blue-600",
      icon: <AiFillLinkedin />,
    },
    {
      url: "https://wa.me/qr/6VF2TF3N3PN7G1",
      name: "WhatsApp",
      className: "text-[#8bada5] hover:text-black hover:bg-green-600 hover:shadow-md hover:shadow-green-600",
      icon: <FaWhatsappSquare />,
    },
    {
      url: "https://www.instagram.com/emmanuel_oluwatayese?igsh=MTR5ajhpcGJmazh1ZA==",
      name: "Instagram",
      className: "text-[#8bada5] hover:text-black hover:bg-pink-600 hover:shadow-md hover:shadow-pink-600",
      icon: <FaInstagramSquare />,
    },
    {
      url: "https://www.facebook.com/emmanuel.oluwatayese",
      name: "Facebook",
      className:
        "text-[#8bada5] hover:text-black hover:bg-sky-600 hover:shadow-md hover:shadow-sky-600",
      icon: <FaFacebook />,
    },
    {
      url: "https://x.com/Ultreck1?t=QYr8E5jK4RKmipxBiPI__A&s=09",
      name: "Tweeter(X)",
      className:
        "text-blue-500 hover:text-black hover:bg-sky-600 hover:shadow-md hover:shadow-blue-600",
      icon: <img src={tweeter} alt="" className="text-[#8bada5] p-1" />,
    },
  ];
  return (
    <div className="fixed w-20 mt-24   h-[80vh]">
      <div className="text mt-24">
        {socialWebsites?.map((site, index) => (
          <>
            <div key={site?.name} className="text-center my-3 mx-auto text-2xl flex justify-center">
              <a key={site?.name} href={site?.url} className={`rounded-full p-1 ${site?.className}`}>
                {site?.icon}
              </a>
            </div>
          </>
        ))}
        {/* <div className="text-center my-6 mx-auto text-2xl flex justify-center">
          <AiFillLinkedin />
        </div>
        <div className="text-center my-6 mx-auto text-2xl flex justify-center">
          <FaWhatsappSquare />
        </div>
        <div className="text-center my-6 mx-auto text-2xl flex justify-center">
          <FaInstagramSquare />
        </div>
        <div className="text-center my-6 mx-auto text-2xl flex justify-center">
          <FaFacebook />
        </div> */}
      </div>
      <hr className="w-60 border-[#69768d] -ml-20 mt-40 absolute rotate-90 bottom-0.5" />
    </div>
  );
};

export default SideNav;

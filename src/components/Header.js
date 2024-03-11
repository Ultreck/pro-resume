import React, { useState } from "react";
import img from "../images/icon-144x144 (1).png";
import { NavLink, useNavigate } from "react-router-dom";
import img2 from "../images/pro-pro.png";
import { TbHexagonLetterE } from "react-icons/tb";
// import { ClipPath } from 'clip-path';

const Header = ({ setIsOpen, setTabName }) => {
  const navigate = useNavigate();
  const [hoverEffects, setHoverEffects] = useState(false);
  // const handleOnmounseOver = () => {};
  // const handleOnmounseLeave = () => {};
  const items = [
    { funct: false, route: "/", name: "Home", no: "01." },
    { funct: false, route: "/about", name: "About", no: "02." },
    { funct: false, route: "/experiences", name: "Experience", no: "03." },
    { funct: false, route: "/skills", name: "Skills", no: "04." },
    { funct: false, route: "/works", name: "Work", no: "05." },
    { funct: true, route: "/contact", name: "Contact", no: "06." },
    { funct: true, route: "/cvs", name: "Resume", no: "07. ", border: true },
  ];
  return (
    <div>
      <nav className="text bg-[#0a192f] shadow-xl fixed top-0 z-[100] w-full flex items-center justify-between px-10 h-20">
        <div
          className="text cursor-pointer relative flex"
          onMouseOver={() => setHoverEffects(true)}
          onMouseOut={() => setHoverEffects(false)}
          onClick={() => navigate("/")}>
          <div className="text relative">
            <img
              src={img2}
              alt=""
              className="bg-[#64ffda] w-11 z-50"
              style={{
                clipPath:
                  "polygon(3% 22%, 50% 0, 97% 22%, 97% 79%, 50% 100%, 3% 78%)",
              }}
            />
            <TbHexagonLetterE className="text-[#64ffda] w-11 h-11 absolute -mt-11 bg-[#0a192f] z-50" />
          </div>
          {/* <ClipPath path={"polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"}/> */}
          <div
            className={`text-[#0a192f] absolute rounded rounded-tr-3xl rounded-br-3xl bg-[#64ffda] h-full flex gap-3 items-center ml-5 duration-300 ease-in-out   ${
              hoverEffects ? "w-44 pl-6" : "w-0"
            }`}>
            <img
              src={img2}
              alt=""
              className={`text w-10 duration-500 ${
                !hoverEffects && "hidden"
              } rounded-full`}
            />
            <span
              className={`duration-500 ease-in-out text-center font-bold ${
                !hoverEffects && "hidden"
              } `}>
              Emmanuel
            </span>
          </div>
        </div>
        <ul className="text-sm font-mono flex gap-3">
          {items.map((item, i) => (
            <li
              className="text"
              key={item?.no}
              onClick={() => {
                setIsOpen(item?.funct);
                item?.funct && navigate("/");
              }}>
              <NavLink
                onClick={() => setTabName(item?.name)}
                to={`${item?.route && item?.route}`}
                activeclassname="bg-[#585b5b] border-b-2 border-[#64ffda]"
                className={({ isActive }) =>
                  isActive
                    ? `${
                        item?.border
                          ? "shadow-inner shadow-[#64ffda] border-2 bg-[rgba(100,152,255,0.1)] border-[#64ffda] py-2.5"
                          : "bg-[rgba(100,152,255,0.1)] border-b-2 border-[#64ffda] rounded font-semibold px-5 py-2 text-[#64ffda]"
                      }  transition ease-linear duration-100`
                    : `text-[#bdc3d5] transition ease-linear duration-100`
                }>
                <span
                  className={`px-5 py-2 ${
                    item.border
                      ? "border border-[#64ffda]  font-semibold px-4 rounded-sm text-[#64ffda]"
                      : " "
                  }`}>
                  {item.name}
                </span>
              </NavLink>
              {/* <span className="text-[#64ffda] mx-1">{item.no}</span> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

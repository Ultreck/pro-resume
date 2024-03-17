import React from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import data from "../data";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationBar = ({ setnavigation, setIsOpen, setTabName }) => {
  const navigate = useNavigate();
  return (
    <div
    //   data-aos-duration="500"
    //   data-aos="fade-right"
      className="w-3/4 h-screen fixed z-50 text-end">
      <div className="text">
        <RxCross2
          onClick={() => setnavigation(false)}
          className="text-[#64ffda] mt-2 ml-2 text-2xl font-bold"
        />
      </div>
      <ul className="text-sm font-mono text-center mt-16">
        {data.map((item, i) => (
          <li
            className="text-start my-8"
            key={item?.no}
            onClick={() => {
              setIsOpen(item?.funct);
              item?.funct && navigate("/");
            }}>
            <NavLink
              onClick={() => {
                setnavigation(false);
                setTabName(item?.name);
              }}
              to={`${item?.route && item?.route}`}
              activeclassname="bg-[#585b5b] border-b-2 border-[#64ffda]"
              className={({ isActive }) =>
                isActive
                  ? `${
                      item?.border
                        ? "shadow-inner shadow-[#64ffda] border-2 bg-[rgba(100,152,255,0.1)] border-[#64ffda] py-2.5"
                        : "bg-[rgba(100,152,255,0.1)] border-l-2 rounded-tr-lg rounded-br-lg border-[#64ffda] font-semibold px-5 py-2 text-[#64ffda]"
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
    </div>
  );
};

export default NavigationBar;

import React, { useEffect, useState } from "react";
import Aos from "aos";
import { FaPlay } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { BiLibrary } from "react-icons/bi";
import { TbKeyframesFilled } from "react-icons/tb";
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from "react-countup";
import { RiPercentFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";

const Skills = () => {
  const [index, setindex] = useState(1);
  const [hoverEffects, setHoverEffects] = useState(false);
  const [hoverEffectCount, setHoverEffectCount] = useState(0);
  const [counts, setcounts] = useState(20);
  const [progressValue, setprogressValue] = useState(0);
  const [languages, setlanguages] = useState("");
  const [display, setdisplay] = useState(false);
  const handleMouseHover = (e) => {
    setHoverEffects(true);
    setHoverEffectCount(e);
  };
  const handleMouseOut = (e) => {
    setHoverEffects(false);
    setHoverEffectCount(0);
  };

  useEffect(() => {
    if (counts < progressValue) {
      setTimeout(() => {
        setcounts((prev) => prev + 1);
      }, 0);
    } else {
    }
    Aos.init();
  }, [index, counts, progressValue]);

  const handleLanguagesMouseHover = (l, p, i) => {
    setlanguages(l);
    setdisplay(true);
    setprogressValue(p);
  };
  const handleLanguagesMouseOut = () => {
    setlanguages("");
    setdisplay(false);
    setprogressValue(0);
    setcounts(20);
  };
  return (
    <div className="text-gray-500 mt-14 md:mt-20 pb-32 px-8 py-3 self-center">
      <div className="text flex items-center">
        <h1
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-[#c7ddf9] font-bold text-2xl md:text-3xl md:mr-7 border-l-4 px-5 border-[#64ffda]">
          {" "}
          {/* <span className="text-[#64ffda] text-2xl font-mono font-extralight">
              01.
            </span>{" "} */}
          My Skills
        </h1>
        <hr className="w-60 hidden md:flex border-[#233554]" />
      </div>
      <div className="text md:flex md:gap-5">
        <div className="text md:mt-10 md:w-1/3 flex md:block">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text my-7 md:h-10 relative flex items-center"
            onMouseOver={() => handleMouseHover(1)}
            onMouseOut={handleMouseOut}
            onClick={() => setindex(1)}>
            <GrTechnology
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 1 || hoverEffectCount === 1? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] md:absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 1
                  ? "w-36 pl-7"
                  : index === 1 ? "w-36 pl-7" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out cursor-pointer text-center font-bold ${
                  hoverEffectCount !== 1 && index !== 1 && "hidden"
                } `}>
                Technologies
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text my-7 h-10 relative flex items-center"
              onMouseOver={() => handleMouseHover(2)}
              onMouseOut={handleMouseOut}
            onClick={() => setindex(2)}>
            <TbKeyframesFilled
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 2 || hoverEffectCount === 2 ? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] md:absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 2
                  ? "w-36 pl-7"
                  : index === 2 ? "w-36 pl-7 text-[#64ffda]" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out text-center cursor-pointer font-bold ${
                  hoverEffectCount !== 2 && index !== 2 && "hidden"
                } `}>
                Frameworks
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text my-7 h-10 relative flex items-center"
              onMouseOver={() => handleMouseHover(3)}
              onMouseOut={handleMouseOut}
            onClick={() => setindex(3)}>
            <BiLibrary
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 3 || hoverEffectCount === 3? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] text-center md:absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 3
                  ? "w-32 pl-7 text-center"
                  : index === 3 ? "w-32 pl-7 text-[#64ffda]" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out text-center cursor-pointer font-bold ${
                  hoverEffectCount !== 3 && index !== 3 && "hidden"
                } `}>
                Libraries
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text my-7 h-10 relative flex items-center"
              onMouseOver={() => handleMouseHover(4)}
              onMouseOut={handleMouseOut}
            onClick={() => setindex(4)}>
            <BsTools 
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 4 || hoverEffectCount === 4 ? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] text-center md:absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 4
                  ? "w-28 pl-7"
                  : index === 4 ? "w-28 pl-7  text-[#64ffda]" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out text-center cursor-pointer font-bold ${
                  hoverEffectCount !== 4 && index !== 4 && "hidden"
                } `}>
                Tools
              </span>
            </div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text flex ${
            index !== 1 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full py-5 md:py-0 flex md:grid justify-center">
            <div
              className={`text absolute w-1/3 right-10 mt-40 bg-[#1b3454] ${
                !display && "hidden"
              } p-3 rounded-lg`}>
              {/* <CountUp end={80} /> */}
              <div className="text flex items-center py-3">
                <span className="text-[#c7ddf9] mr-3  font-bold text-lg">
                  {languages}
                </span>
                <span className="text-[#64ffda] font-bold text-lg">
                  {counts}
                </span>
                <RiPercentFill className="text-[#64ffda] " />
              </div>
              <ProgressBar
                className="wrapper"
                barContainerClassName="bg-[#64ffda] w-full rounded-full"
                completedClassName=""
                labelClassName="text-white px-4 font-bold rounded"
                completed={counts > 0 && counts}
                maxCompleted={100}
              />
            </div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center md:py-14 w-28 h-28 py-10 mt-20 absolute text-[#64ffda] md:mt-32 md:w-36 md:h-36 rounded-full md:ml-32 border-2 border-[#64ffda] items-cent">
              Technologies
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("JavaScript", 90, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-40 ml-0 md:mt-10 mt-5">
              JavaScript
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("TypeScript", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] bottom-64 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-28 md:ml-40">
              TypeScript
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("SQL", 65, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] -ml-40 mt-20 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-32 md:ml-14">
              SQL
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("PHP", 60, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] -ml-40 mt-44 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-44 md:ml-14">
              PHP
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("HTML5", 85, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-20 right-8 md:right-auto md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-72 md:mt-32">
              HTML5
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("CSS3", 80, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-40 right-7 md:right-auto md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-72 md:bottom-44 ">
              CSS3
            </span>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 2 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full py-5 flex justify-center md:grid">
            <div
              className={`text absolute w-1/3 right-10 mt-40 bg-[#1b3454] ${
                !display && "hidden"
              } p-3 rounded-lg`}>
              {/* <CountUp end={80} /> */}
              <div className="text flex items-center py-3">
                <span className="text-[#c7ddf9] mr-3  font-bold text-lg">
                  {languages}
                </span>
                <span className="text-[#64ffda] font-bold text-lg">
                  {counts}
                </span>
                <RiPercentFill className="text-[#64ffda] " />
              </div>
              <ProgressBar
                className="wrapper"
                barContainerClassName="bg-[#64ffda] w-full rounded-full"
                completedClassName=""
                labelClassName="text-white px-4 font-bold rounded"
                completed={counts > 0 && counts}
                maxCompleted={100}
              />
            </div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center md:py-14 w-28 h-28 py-10 mt-20 absolute text-[#64ffda] md:mt-32 md:w-36 md:h-36 rounded-full md:ml-32 border-2 border-[#64ffda] items-cent">
              Frameworks
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("React.js", 95, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-6 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-40 md:mt-10">
              React.js
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Express.js", 85, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-14 -ml-28 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-20 md:mt-20">
              Express.js
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("MongoDB", 80, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-14 ml-32 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-56 md:mt-20">
              MongoDB
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Angular.js", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-60 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-24 md:bottom-28 md:ml-40">
              Angular.js
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Node.js", 75, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-24 -ml-44 md: md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-32 md:ml-[280px]">
              Node.js
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("JQuery", 50, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-32 -ml-52 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-44 md:ml-8">
              JQuery
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Laravel", 65, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-40 -ml-48 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-52 xl:bottom-44 md:ml-12">
              Laravel
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Tailwind Css", 95, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-48 -ml-32 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-32 md:bottom-40 md:ml-14">
              Tailwind Css
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Vue.js", 65, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-24 ml-44 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-32 md:ml-14">
              Vue.js
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Boostrap", 80, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-32 ml-48 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-44 md:ml-72">
              Boostrap
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover(".Net", 60, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-40 ml-48 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-52 xl:bottom-44 md:ml-72">
              .Net
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("SASS", 50, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-48 ml-32 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-32 md:bottom-40 md:ml-64">
              SASS
            </span>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 3 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full py-5 md:grid flex justify-center">
            <div
              className={`text absolute w-1/3 right-10 mt-40 bg-[#1b3454] ${
                !display && "hidden"
              } p-3 rounded-lg`}>
              {/* <CountUp end={80} /> */}
              <div className="text flex items-center py-3">
                <span className="text-[#c7ddf9] mr-3  font-bold text-lg">
                  {languages}
                </span>
                <span className="text-[#64ffda] font-bold text-lg">
                  {counts}
                </span>
                <RiPercentFill className="text-[#64ffda] " />
              </div>
              <ProgressBar
                className="wrapper"
                barContainerClassName="bg-[#64ffda] w-full rounded-full"
                completedClassName=""
                labelClassName="text-white px-4 font-bold rounded"
                completed={counts > 0 && counts}
                maxCompleted={100}
              />
            </div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center md:py-14 w-28 h-28 py-10 mt-20 absolute text-[#64ffda] md:mt-32 md:w-36 md:h-36 rounded-full md:ml-32 border-2 border-[#64ffda] items-cent">
              Libraries
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Material UI", 80, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-5 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-40 md:mt-10">
              Material UI
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("React Icons", 85, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-12 -ml-20 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-20 md:mt-20">
              React Icons
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Lodash", 80, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-12 ml-28 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-64 md:mt-20">
              Lodash
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Socket.io", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-60 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-24 md:bottom-28 md:ml-40">
              Socket.io
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Cors", 75, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-24 -ml-44 md: md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-32 md:ml-[280px]">
              Cors
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Dotenv", 80, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-32 -ml-52 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-44 md:ml-8">
              Dotenv
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Mongoose", 65, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-40 -ml-48 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-52 xl:bottom-44 md:ml-12">
              Mongoose
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Flowbite", 50, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-48 -ml-32 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-32 md:bottom-40 md:ml-14">
              Flowbite
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Router", 65, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-24 ml-44 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-32 md:ml-14">
              Router
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Redux", 80, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-32 ml-48 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-44 md:ml-72">
              Redux
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Vite", 70, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-40 ml-48 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-52 xl:bottom-44 md:ml-72">
              Vite
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("HTTP", 50, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-48 ml-32 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-32 md:bottom-40 md:ml-64">
              HTTP
            </span>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 4 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full py-5 md:grid flex justify-center">
            <div
              className={`text absolute md:w-1/3 md:right-10 md:mt-40 bottom-24 w-full bg-[#1b3454] ${
                !display && "hidden"
              } p-3 rounded-lg`}>
              {/* <CountUp end={80} /> */}
              <div className="text flex items-center py-3">
                <span className="text-[#c7ddf9] mr-3  font-bold text-lg">
                  {languages}
                </span>
                <span className="text-[#64ffda] font-bold text-lg">
                  {counts}
                </span>
                <RiPercentFill className="text-[#64ffda] " />
              </div>
              <ProgressBar
                className="wrapper"
                barContainerClassName="bg-[#64ffda] w-full rounded-full"
                completedClassName=""
                labelClassName="text-white px-4 font-bold rounded"
                completed={counts > 0 && counts}
                maxCompleted={100}
              />
            </div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center md:py-14 w-28 h-28 py-10 mt-20 absolute text-[#64ffda] md:mt-32 md:w-36 md:h-36 rounded-full md:ml-32 border-2 border-[#64ffda] items-cent">
              Tools
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Git & Github", 90, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-40 ml-0 md:mt-10 mt-5">
              Git & Github
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Command Line", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] bottom-64 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-28 md:ml-40">
              Command Line
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Postman", 65, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] -ml-40 mt-20 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:mt-32 md:ml-14">
              Postman
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Vs Code", 80, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] -ml-40 mt-44 md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:bottom-44 md:ml-14">
              Vs Code
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("NPM", 85, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-20 right-9 md:right-auto md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-72 md:mt-32">
              NPM
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Yarn", 80, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] mt-40 right-8 md:right-auto md:text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 md:ml-72 md:bottom-44 ">
              Yarn
            </span>
            <div className="text md:w-96 w-72 rounded-full absolute animate-spin -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-y-12 md:h-96 h-72 border-2 border-[#64ffda]"></div>
            <div className="text md:w-96 w-72 rounded-full absolute animate-pulse -skew-x-6 md:h-96 h-72 border-2 border-[#64ffda]"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

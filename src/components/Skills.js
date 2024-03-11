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
    <div className="text-gray-500 mt-20 pb-32 p-5">
      <div className="text flex items-center">
        <h1
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-[#c7ddf9] font-bold text-3xl mr-7 border-l-4 px-5 border-[#64ffda]">
          {" "}
          {/* <span className="text-[#64ffda] text-2xl font-mono font-extralight">
              01.
            </span>{" "} */}
          My Skills
        </h1>
        <hr className="w-60 border-[#233554]" />
      </div>
      <div className="text flex gap-5">
        <div className="text mt-10 w-1/3">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text my-10 h-10 relative flex items-center"
            onMouseOver={() => handleMouseHover(1)}
            onMouseOut={handleMouseOut}
            onClick={() => setindex(1)}>
            <GrTechnology
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 1 || hoverEffectCount === 1? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 1
                  ? "w-36 pl-7"
                  : index === 1 ? "w-36 pl-7" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out cursor-pointer text-center font-bold ${
                  hoverEffectCount !== 1 && ""
                } `}>
                Technologies
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text my-10 h-10 relative flex items-center"
              onMouseOver={() => handleMouseHover(2)}
              onMouseOut={handleMouseOut}
            onClick={() => setindex(2)}>
            <TbKeyframesFilled
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 2 || hoverEffectCount === 2 ? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 2
                  ? "w-36 pl-7"
                  : index === 2 ? "w-36 pl-7 text-[#64ffda]" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out text-center cursor-pointer font-bold ${
                  hoverEffectCount !== 2 && ""
                } `}>
                Frameworks
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text my-10 h-10 relative flex items-center"
              onMouseOver={() => handleMouseHover(3)}
              onMouseOut={handleMouseOut}
            onClick={() => setindex(3)}>
            <BiLibrary
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 3 || hoverEffectCount === 3? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] text-center absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 3
                  ? "w-32 pl-7 text-center"
                  : index === 3 ? "w-32 pl-7 text-[#64ffda]" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out text-center cursor-pointer font-bold ${
                  hoverEffectCount !== 3 && ""
                } `}>
                Libraries
              </span>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text my-10 h-10 relative flex items-center"
              onMouseOver={() => handleMouseHover(4)}
              onMouseOut={handleMouseOut}
            onClick={() => setindex(4)}>
            <BsTools 
              className={`hover:text-[#64ffda] cursor-pointer text-xl ${
                index === 4 || hoverEffectCount === 4 ? "text-[#64ffda]" : ""
              }`}
            />
            <div
              className={`text-[#91a7c3] text-center absolute border-b-2 border-[#64ffda] h-full flex gap-3 items-center ml-7 duration-300 ease-in-out   ${
                hoverEffects && hoverEffectCount === 4
                  ? "w-28 pl-7"
                  : index === 4 ? "w-28 pl-7 text-[#64ffda]" : "w-0 text-[#0a192f]"
              }`}>
              <span
                className={`duration-500 ease-in-out text-center cursor-pointer font-bold ${
                  hoverEffectCount !== 4 && ""
                } `}>
                Tools
              </span>
            </div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 1 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full">
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
            <div className="text w-96 rounded-full absolute animate-pulse h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-spin skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse skew-x-6 h-96 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center py-14 absolute text-[#64ffda] mt-32 w-36 h-36 rounded-full ml-32 border-2 border-[#64ffda] items-cent">
              Technologies
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("JavaScript", 90, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-40 mt-10">
              JavaScript
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("TypeScript", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 bottom-28 ml-40">
              TypeScript
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("SQL", 65, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 mt-32 ml-14">
              SQL
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("PHP", 60, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 bottom-44 ml-14">
              PHP
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("HTML5", 85, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 mt-32">
              HTML5
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("CSS3", 80, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 bottom-44 ">
              CSS3
            </span>
            <div className="text w-96 rounded-full absolute animate-spin -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-x-6 h-96 border-2 border-[#64ffda]"></div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 2 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full">
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
            <div className="text w-96 rounded-full absolute animate-pulse h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-spin skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse skew-x-6 h-96 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center py-14 absolute text-[#64ffda] mt-32 w-36 h-36 rounded-full ml-32 border-2 border-[#64ffda] items-cent">
              Frameworks
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("React.js", 95, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-40 mt-10">
              React.js
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Express.js", 85, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-20 mt-20">
              Express.js
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("MongoDB", 80, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-56 mt-20">
              MongoDB
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Angular.js", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-24 bottom-28 ml-40">
              Angular.js
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Node.js", 75, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 mt-32 ml-14">
              Node.js
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("JQuery", 50, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 mt-44 ml-8">
              JQuery
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Laravel", 65, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 bottom-52 xl:bottom-44 ml-12">
              Laravel
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Tailwind Css", 95, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-32 bottom-40 ml-14">
              Tailwind Css
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Vue.js", 65, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 mt-32">
              Vue.js
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Boostrap", 80, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 mt-44">
              Boostrap
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover(".Net", 60, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 xl:bottom-44 bottom-52 ">
              .Net
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("SASS", 50, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-64 xl:bottom-32 bottom-40">
              SASS
            </span>
            <div className="text w-96 rounded-full absolute animate-spin -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-x-6 h-96 border-2 border-[#64ffda]"></div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 3 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full">
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
            <div className="text w-96 rounded-full absolute animate-pulse h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-spin skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse skew-x-6 h-96 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center py-14 absolute text-[#64ffda] mt-32 w-36 h-36 rounded-full ml-32 border-2 border-[#64ffda] items-cent">
              Libraries
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Material UI", 80, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-40 mt-10">
              Material UI
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("React Icons", 85, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-20 mt-20">
              React Icons
            </span>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Lodash", 80, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-60 mt-20">
              Lodash
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Socket.io", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-24 bottom-32 ml-40">
              Socket.io
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Cors", 75, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 mt-32 ml-14">
              Cors
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Dotenv", 80, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 mt-44 ml-8">
              Dotenv
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Mongoose", 65, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-44 bottom-52 xl:ml-6 ml-8">
              Mongoose
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Flowbite", 50, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 xl:bottom-32 bottom-40 ml-14">
              Flowbite
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Router", 65, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 mt-32">
              Router
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Redux", 80, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 mt-44">
              Redux
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Vite", 70, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 xl:bottom-44 bottom-52">
              Vite
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("HTTP", 50, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-64 xl:bottom-32 bottom-40">
              HTTP
            </span>
            <div className="text w-96 rounded-full absolute animate-spin -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-x-6 h-96 border-2 border-[#64ffda]"></div>
          </div>
        </div>
        <div
         data-aos="fade-left"
         data-aos-duration="1200"
          className={`text ${
            index !== 4 && "hidden"
          } w-[100%] relative h-[80vh] xl:h-[50vh] flex items-center justify-center`}>
          <div className="text w-full h-full">
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
            <div className="text w-96 rounded-full absolute animate-pulse h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-spin skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse skew-x-6 h-96 border-2 border-[#64ffda]"></div>
            <div  data-aos="fade-left"
              data-aos-duration="2000" className="text-center py-14 absolute text-[#64ffda] mt-32 w-36 h-36 rounded-full ml-32 border-2 border-[#64ffda] items-cent">
              Tools
            </div>
            <span
             data-aos="fade-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Git & Github", 90, 1)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-40 mt-10">
              Git & Github
            </span>
            <span
             data-aos="fade-down"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Command Line", 60, 2)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 bottom-28 ml-32">
              Command Line
            </span>
            <span
             data-aos="flip-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Postman", 65, 3)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 mt-32 ml-14">
              Postman
            </span>
            <span
             data-aos="fade-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Vs Code", 80, 4)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 bottom-44 ml-14">
              Vs Code
            </span>
            <span
             data-aos="flip-left"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("NPM", 85, 5)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 mt-32">
              NPM
            </span>
            <span
             data-aos="zoom-in-right"
             data-aos-duration="1200"
              onMouseOver={() => handleLanguagesMouseHover("Yarn", 80, 6)}
              onMouseLeave={handleLanguagesMouseOut}
              className="text-[#c7ddf9] text-lg cursor-pointer font-bold absolute hover:text-[#64ffda] z-50 ml-72 bottom-44 ">
              Yarn
            </span>
            <div className="text w-96 rounded-full absolute animate-spin -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-y-12 h-96 border-2 border-[#64ffda]"></div>
            <div className="text w-96 rounded-full absolute animate-pulse -skew-x-6 h-96 border-2 border-[#64ffda]"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

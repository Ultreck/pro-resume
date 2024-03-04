import React, { useEffect, useState } from "react";
import img from "../images/pro-pro.png";
import img2 from "../images/pro-pro2.png";
import Aos from "aos";

const About = () => {
    const [hover, sethover] = useState(false);
    useEffect(() => {
      Aos.init();
    },[hover])
    
    const handleHoverEffect = () => {
        sethover(true);
    };
  return (
    <div className=" p-5 mt-20">
      <div data-aos="fade-up" data-aos-duration="500" className="text w-full h-screen ">
        <div className="text flex items-center">
          <h1 data-aos="fade-down" data-aos-duration="1000"  className="text-[#c7ddf9] font-bold text-3xl mr-7 border-l-4 px-5 border-[#64ffda]">
            {" "}
            {/* <span className="text-[#64ffda] text-2xl font-mono font-extralight">
              01.
            </span>{" "} */}
            About Me
          </h1>
          <hr className="w-60 border-[#233554]" />
        </div>
        <div className="text-[#7f8fb0] mt-10 text flex gap-6">
          <div className="text w-3/5">
            <p className="text mb-4" data-aos="fade-right" data-aos-duration="1500" >
              I'm a passionate full-stack web developer with a journey that
              began in <span className="text-[#64ffda]">2019</span>. Over the
              years, I've honed my skills in both frontend and backend
              technologies, allowing me to create seamless and robust web
              applications from start to finish. My experience spans across
              various tech stacks, and I thrive on{" "}
              <span className="text-[#64ffda]">
                solving complex problems and delivering high-quality solutions
              </span>{" "}
              that exceed expectations.
            </p>
            <p className="text my-5" data-aos="fade-left" data-aos-duration="1500" >
              With a strong foundation in frontend technologies such as HTML,
              CSS, React.js, Angular.js, Vue.js, and JavaScript, coupled with expertise in backend frameworks
              like Node.js, .NET and Laravel, I bring a well-rounded
              approach to every project I undertake. Whether it's{" "}
              <span className="text-[#64ffda]">
                crafting intuitive user interfaces or architecting scalable
                backend systems
              </span>{" "}
              , I'm committed to delivering excellence at every stage of
              development.
            </p>
            <p className="text my-5" data-aos="fade-up" data-aos-duration="1500" >
              Driven by a passion for learning and innovation,{" "}
              <span className="text-[#64ffda]">
                I stay abreast of the latest trends and technologies in the
                ever-evolving landscape of web development
              </span>{" "}
              . I'm dedicated to continuous improvement and strive to push the
              boundaries of what's possible with each new challenge. Let's{" "}
              <span className="text-[#64ffda]">collaborate</span> and bring your
              ideas to life with cutting-edge web solutions that make an impact.
            </p>
          </div>
          <div className="text w-2/5 p-5">
            <div onMouseOver={() => sethover(true)} onMouseOut={() =>sethover(false)} className="text border-2 lg:w-2/3 rounded border-[#64ffda] hover:translate-x-1 hover:translate-y-1 transition duration-300  ease-in-out">
              <div className={` ${hover? "-translate-x-2 ease-in-out transition duration-200  -translate-y-2" : "ease-in-out transition duration-200"}`}>
                {hover ? 
                <img
                  src={img2}
                  alt=""
                  className={`text -translate-x-3 -translate-y-3  rounded`}
                  style={{ filter: "brightness(1o0%) saturate(60%) hue-rotate(10deg)"}}
                />
                :
                <img
                  src={img}
                  alt=""
                  className="text -translate-x-3 -translate-y-3 hover:-translate-x-4 hover:-translate-y-4  rounded"
                  style={{ filter: "brightness(1o0%) saturate(60%) hue-rotate(10deg)"}}
                />
            }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

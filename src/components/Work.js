import React, { useEffect, useState } from "react";
import Aos from "aos";
import Modal from "./Modal";
import UseHook from "./UseHook";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setSHover] = useState(false);
  const [indexPos, setIndexPos] = useState(null);
  const [eachDetails, setEachDetails] = useState();
  const { projects } = UseHook();
  useEffect(() => {
    // console.log(projects);
    Aos.init();
  }, []);

  const handleModal = (project) => {
    setEachDetails(project);
    setIsOpen(true);
    // console.log(project);
  };

  const handleMouseHover = (e) => {
    setIndexPos(e + 1);
    setSHover(true);
  };
  const handleMouseOut = () => {
    setSHover(false);
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
          My Projects
        </h1>
        <hr className="w-60 border-[#233554]" />
      </div>

      <div className="text gap-5 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {projects?.map((project, index) => (
          <div
          key={project?.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`text-white relative cursor-pointer bg-[#213048] h-72 hover:shadow-lg hover:shadow-[#2c2d2d] rounded-lg overflow-hidden`}
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleMouseHover(index)}
            onClick={() => handleModal(project)}>
            <div className="text">
              <img
                src={project?.url}
                alt=""
                className={`text ${
                  isHover && indexPos === project.id && "scale-110"
                } transition ease-in-out h-60`}
              />
            </div>
            <div className="text-[#c7ddf9] z-[100] absolute bottom-0 bg-[#213048] w-full h-20 p-3">
              <p className="text font-semibold">{project?.title}</p>
              <p
                className={`text-sm mt-2 ${
                  isHover && indexPos === project.id
                    ? "-translate-y-4 duration-500 text-[#213048]"
                    : "duration-500"
                }`}>
                {project?.type}
              </p>
              <p
                className={`text-sm mt-6 flex cursor-pointer items-center gap-2 font-semibold py-1 ${
                  isHover && indexPos === project.id
                    ? "-translate-y-12 duration-500 text-[#64ffda]"
                    : "duration-500"
                }`}>
                <span className="text-lg">Show Project</span>
                <FaArrowRightFromBracket className="animate" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text">
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <div
          key={eachDetails?.id}
            data-aos-duration="400"
            data-aos="zoom-in-up"
            className="inline-block align-bottom bg-[#0a192f] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-20 sm:align-middle sm:max-w-xl sm:w-full text-gray-600">
            <span
              className="text-black absolute right-5 rounded-full  p-1 top-5 cursor-pointer z-50 hover:rotate-[100deg] border-2 border-red-500 duration-100 ease-in-out"
              onClick={() => setIsOpen(false)}>
              <RxCross2 className="text-red-500 font-bold text-2xl"/>
            </span>
            <div className="text h-80">
              <img
                src={eachDetails?.url}
                alt=""
                className="text w-full h-full"
              />
            </div>
            <div className="text gap-3 px-5 my-5 font-mono">
              <span className="text-[#c7ddf9] text-sm font-serif">
                Application's name
              </span>
              <h1 className="text-[#64ffda] font-semibold">
                {eachDetails?.title}
              </h1>
            </div>
            <div className="text gap-3 px-5 font-mono my-5">
              <span className="text-[#c7ddf9] font-serif text-sm">
                Application's type{" "}
              </span>
              <h1 className="text-[#64ffda] font-semibold">
                {eachDetails?.type}
              </h1>
            </div>
            <div className="text gap-3 px-5 font-mono my-5">
              <span className="text-[#c7ddf9] font-serif text-sm">
                About the application{" "}
              </span>
              <h1 className="text-[#64ffda] text-sm font-serif">
                {eachDetails?.description}
              </h1>
            </div>
            <div className="text gap-3 px-5 font-mono mt-5 mb-10 pb-10">
              <span className="text-[#c7ddf9] font-serif text-sm">
                Tools Used
              </span>
              <h1 className="text-[#64ffda] text-sm font-serif flex gap-3 flex-wrap">
                {eachDetails?.tools?.map((tool, index) => (
                  <>
                    <div className="text-[#64ffda] font-serif text-sm border border-[#64ffda] px-4 py-1 rounded">
                      {tool}
                    </div>
                  </>
                ))}
              </h1>
            </div>
            <div className="text flex">
              <button className="bg-[#64ffda] absolute bottom-5 px-5 py-1 right-10 text-black font-semibold">
                <a href={eachDetails?.appUrl} className="text flex items-center gap-3">
                  Browse <FaArrowRightFromBracket className="" />
                </a>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Work;

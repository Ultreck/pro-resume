import React, { useEffect, useState } from "react";
import Aos from "aos";
import { FaPlay } from "react-icons/fa";

const Experience = () => {
  const [index, setindex] = useState(1);
  useEffect(() => {
    Aos.init();
  }, [index]);

  return (
    <div>
      <div className="text md:mt-20 mt-14 md:p-5 pb-20">
        <div className="text flex items-center">
          <h1
            data-aos="fade-down"
            data-aos-duration="1500"
            className="text-[#c7ddf9] font-bold md:text-3xl text-2xl md:mr-7 border-l-4 md:px-5 pl-4  border-[#64ffda]">
            {" "}
            {/* <span className="text-[#64ffda] text-2xl font-mono font-extralight">
              01.
            </span>{" "} */}
            Where I’ve Worked
          </h1>
          <hr className="w-60 hidden md:flex border-[#233554]" />
        </div>
        <div className="text-[#7f8fb0] font-mono text-sm md:flex mt-8 gap-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text ease-in-out duration-700 transition">
            <ul className="text flex md:grid ">
              <li
                onClick={() => setindex(1)}
                className={`text flex py-3 md:border-l-2 border-b-2 md:border-b-0 cursor-pointer md:px-4 px-6 md:pl-3 hover:bg-[rgba(100,152,255,0.1)] ${
                  index === 1
                    ? "border-[#64ffda] text-[#64ffda] bg-[rgba(100,152,255,0.1)] font-bold"
                    : "border-[#29323f]"
                }`}>
                LonH
              </li>
              <li
                onClick={() => setindex(2)}
                className={`text flex py-3 md:border-l-2 border-b-2 md:border-b-0 cursor-pointer md:px-4 px-6 md:pl-3 hover:bg-[rgba(100,152,255,0.1)] ${
                  index === 2
                    ? "border-[#64ffda] text-[#64ffda] bg-[rgba(100,152,255,0.1)] font-bold"
                    : "border-[#29323f]"
                }`}>
                Medillery
              </li>
              <li
                onClick={() => setindex(3)}
                className={`text flex py-3 md:border-l-2 border-b-2 md:border-b-0 cursor-pointer md:px-4 px-6 md:pl-3 hover:bg-[rgba(100,152,255,0.1)] ${
                  index === 3
                    ? "border-[#64ffda] text-[#64ffda] bg-[rgba(100,152,255,0.1)] font-bold"
                    : "border-[#29323f]"
                }`}>
                Scict
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className={`text md:w-3/4 w-full ${
              index === 3 ? "" : "hidden"
            } md:pr-16 font-sans`}>
            <h1
              data-aos="fade-left"
              data-aos-duration="500"
              className="md:text-xl mt-7 md:mt-0 font-bold text-[#c7ddf9]">
              Backend Engineer <span className="text-[#64ffda]">@ Scict</span>
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text font-semibold mt-2">
              October 2020 - November 2021
            </p>

            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-12 md:w-5" />I was responsible for
              architecting scalable backend solutions using Node.js, ensuring
              robustness and flexibility to accommodate growing user demands. By
              implementing microservices architecture and employing best
              practices, I facilitated seamless scalability, allowing our
              platform to handle increased traffic efficiently.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-12 md:w-5" />
              Leveraging the asynchronous nature of Node.js, I optimized
              critical backend processes to enhance overall system performance.
              By identifying and rectifying bottlenecks, I successfully reduced
              response times, leading to improved user experience and higher
              customer satisfaction.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-12 md:w-5" />
              My expertise in Node.js enabled me to develop robust APIs that
              served as the backbone of our applications. I collaborated closely
              with frontend teams to design API endpoints that aligned with
              frontend requirements, ensuring smooth communication between the
              client and server components.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="2200"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-12 md:w-5" />I proficiently utilized
              Node.js frameworks like Express.js to interact with databases and
              manage data effectively. Through efficient database querying and
              schema design, I enhanced data retrieval speed and maintained data
              integrity, contributing to a stable and reliable backend
              infrastructure.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className={`text md:w-3/4 w-full ${
              index === 2 ? "" : "hidden"
            } md:pr-16 font-sans`}>
            <h1
              data-aos="fade-left"
              data-aos-duration="500"
              className="md:text-xl mt-7 md:mt-0 font-bold text-[#c7ddf9]">
              Frontend Engineer{" "}
              <span className="text-[#64ffda]">@ Medillery</span>
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text font-semibold mt-2">
              June 2022 - May 2023
            </p>

            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="text  flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-8 md:w-3" /> Spearheaded the development
              of intuitive and visually appealing frontend interfaces using
              JavaScript frameworks like React.js and AngularJS, ensuring
              optimal user experience across various devices and screen sizes
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-8 md:w-3" />
              Optimized frontend performance through efficient coding practices
              and rigorous testing, resulting in improved page load times and
              rendering speeds across different browsers and platforms.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-8 md:w-3" />
              Integrated with backend APIs to dynamically fetch and visualize
              data, leveraging component-based architectures and reusable UI
              components to promote code maintainability and scalability in
              collaboration with backend engineers.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className={`text md:w-3/4 w-full ${
              index === 1 ? "" : "hidden"
            } md:pr-16 font-sans`}>
            <h1
              data-aos="fade-left"
              data-aos-duration="500"
              className="md:text-xl mt-7 md:mt-0 font-bold text-[#c7ddf9]">
              Frontend Engineer{" "}
              <span className="text-[#64ffda]">@ Lights on Heights</span>
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text font-semibold mt-2">
              August 2023 - Present
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1200"
              className="text  flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-12 md:w-5" /> I'm Working closely with
              backend engineers to integrate frontend components with backend
              APIs, ensuring smooth data flow and seamless functionality across
              the website. By establishing clear communication channels and
              aligning on data requirements and API contracts, facilitated
              efficient development and integration processes.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-14 md:w-5" />
              I'm Collaborating closely with product designers to translate
              design mockups and wireframes into interactive and visually
              appealing UI components using React.js. By providing technical
              insights and feedback during the design phase, contributed to the
              creation of user-centric solutions that aligned with both design
              aesthetics and frontend development best practices.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-16 md:w-5" />
              Acted as a bridge between backend engineers and product designers,
              facilitating cross-functional collaboration and ensuring alignment
              on project goals and requirements. By actively participating in
              brainstorming sessions, design reviews, and sprint planning
              meetings, fostered a collaborative work environment focused on
              delivering high-quality results that met both technical and design
              standards.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="2000"
              className="text flex my-4 gap-3">
              <FaPlay className="text-[#64ffda] w-20 md:w-7" />
              Implemented best practices and design patterns in React
              development, such as componentization, state management wih hooks
              or context API, and routing with React Router, leading to improved
              code maintainability and scalability as the website evolved and
              grew in complexity. Additionally, contributed to frontend design
              by ensuring adherence to UI/UX principles, including responsive
              design, accessibility standards, and consistent styling across the
              website, resulting in an aesthetically pleasing and user-friendly
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

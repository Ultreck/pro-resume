import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter, Outlet } from "react-router-dom";
import Routers from "./routes/Routers";
import PageLayout from "./layouts/PageLayout";
import SideNav from "./components/SideNav";
import TitleBar from "./components/TitleBar";
import Modal from "./components/Modal";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Aos from "aos";
import { TbHexagonLetterE } from "react-icons/tb";
import img2 from "../src/images/pro-pro2.png";
import { FaPlay } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabName, setTabName] = useState("");
  const resumeContents = useRef(null);
  // console.log(tabName);
  useEffect(() => {
    Aos.init();
  }, []);

  const downloadPDF = useReactToPrint({
    content: () => resumeContents.current,
    documentTitle: "A. Emmanuel Oluwatayese",
    onAfterPrint: () => {
      toast.info("Data saved in PDF");
    },
  });
  return (
    <div className="bg-[#0a192f] w-full overflow-hidden">
      <Header setIsOpen={setIsOpen} setTabName={setTabName} />
      <div className="text flex">
        <div className="text w-24">
          <SideNav />
        </div>
        <div className="text w-11/12">
          <Routers />
        </div>
        <div className="text w-32">
          <TitleBar />
        </div>
      </div>
      <div className="text" ref={resumeContents}>
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          {tabName === "Contact" && (
            <div className="text w-full h-screen flex items-center justify-center">
              <span
                className="text-black absolute right-20 rounded-full  top-20 cursor-pointer z-50 hover:rotate-[100deg] border-2 border-red-500 duration-100 ease-in-out"
                onClick={() => setIsOpen(false)}>
                <RxCross2 className="text-red-500 font-bold text-2xl" />
              </span>
              <div
                data-aos-duration="400"
                data-aos="zoom-in-up"
                className={`inline-block align-bottom bg-[#0a192f] p-6 rounded-lg text-left overflow-hidden w-1/3
              shadow-xl transform transition-all sm:my-20 sm:align-middle text-[#8a9fb8]`}>
                <h1 className="text-xl font-bold text-[#c5d4e7] ">
                  Get In Touch
                </h1>
                <p>
                  Thank you for visiting my website. I'm available for hiring,
                  contracts, collaborations, or any other opportunities you may
                  have.
                </p>
                <p>Please feel free to reach out to me via Mail.</p>
                <div className=" font-serif text-sm py-5 text-end">
                  <button className="text-[#64ffda] bg-[#64ffda] rounded font-mono">
                    <a
                      href="mailto:adetutuemmanueloluwatayese@gmail.com"
                      className="text">
                      <button className="text-[#64ffda] border border-[#64ffda] hover:-translate-x-1 transition hover:-translate-y-1 bg-[#0a192f] rounded px-5 py-4 font-mono">
                        {" "}
                        <a
                          href="mailto:adetutuemmanueloluwatayese@gmail.com"
                          className="text-[#64ffda] border-[#64ffda] border px-5 py-2 rounded text-center">
                          Send Mail
                        </a>
                      </button>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
          {tabName === "Resume" && 
          <div className="text w-full min-h-screen flex items-center justify-center">
            <span
              className="text-black absolute right-20 rounded-full  top-20 cursor-pointer z-50 hover:rotate-[100deg] border-2 border-red-500 duration-100 ease-in-out"
              onClick={() => setIsOpen(false)}>
              <RxCross2 className="text-red-500 font-bold text-2xl" />
            </span>
            <div
              className={`inline-block align-bottom bg-[#0a192f] p-6 rounded-lg text-left overflow-hidden w-2/3
              shadow-xl transform transition-all sm:my-20 sm:align-middle text-[#8a9fb8]`}>
              <div className="text">
                <TbHexagonLetterE className="text-[#64ffda] w-12 h-12" />
              </div>
              <div className="text">

              <div className="text">
                <h1 className="text-xl font-bold text-[#b9d8e9] text-center">
                  About Me
                </h1>
                <div className="text ">
                  <img
                    src={img2}
                    alt=""
                    className="text w-56 h-56 float-right rounded-lg mx-3"
                    />
                  <p
                    className="text-[#919eb7] mt-8 md:w-2/3"
                    data-aos="fade-left"
                    data-aos-duration="1000">
                    My name is A. Emmanuel Oluwatayese, I'm a Full-Stack web
                    developer based in Lagos, Lagos State, Nigeria. I design a
                    well responsive, easy to use, interactive, intuitive and
                    best user experience website. I also work as a backend
                    developer/engineer.{" "}
                  </p>
                  <p
                    className="text my-4"
                    data-aos="fade-right"
                    data-aos-duration="1500">
                    I'm a passionate full-stack web developer with a journey
                    that began in <span className="">2019</span>. Over the
                    years, I've honed my skills in both frontend and backend
                    technologies, allowing me to create seamless and robust web
                    applications from start to finish. My experience spans
                    across various tech stacks, and I thrive on{" "}
                    <span className="">
                      solving complex problems and delivering high-quality
                      solutions
                    </span>{" "}
                    that exceed expectations.
                  </p>
                  <p
                    className="text my-3"
                    data-aos="fade-left"
                    data-aos-duration="1500">
                    With a strong foundation in frontend technologies such as
                    HTML, CSS, React.js, Angular.js, Vue.js, and JavaScript,
                    coupled with expertise in backend frameworks like Node.js,
                    .NET and Laravel, I bring a well-rounded approach to every
                    project I undertake. Whether it's{" "}
                    <span className="">
                      crafting intuitive user interfaces or architecting
                      scalable backend systems
                    </span>{" "}
                    , I'm committed to delivering excellence at every stage of
                    development.
                  </p>
                </div>
              </div>
              <div className="text my-7">
                <h1 className="text-xl font-bold text-[#b9d8e9] text-center">
                  Experience
                </h1>
                <div className="text">
                <div className="text-sm flex my-5">
                  <div className="text  flex w-1/4">
                    <span className="text mt-1 mr-2">
                      <FaPlay className="text-[#64ffda]" />
                    </span>
                    <span className="text-[#d1e5f0] font-semibold">
                      Lights on Heights Holdings
                    </span>
                  </div>
                  <div className="text-[#d1e5f0] grid mx-7">
                    <span className="text">
                      Frontend Engineer
                      <span className="text-[#64ffda] font-semibold"> @ Lights on Heights</span>
                    </span>
                    <span className="text">August 2023 - Present</span>
                  </div>
                </div>
                <div className="text-sm flex my-5">
                  <div className="text  flex w-1/4">
                    <span className="text mt-1 mr-2">
                      <FaPlay className="text-[#64ffda]" />
                    </span>
                    <span className="text-[#d1e5f0] font-semibold">
                    Medillery
                    </span>
                  </div>
                  <div className="text-[#d1e5f0] grid mx-7">
                    <span className="text">
                      Frontend Engineer
                      <span className="text-[#64ffda] font-semibold"> @ Medillery</span>
                    </span>
                    <span className="text">June 2022 - May 2023</span>
                  </div>
                </div>
                <div className="text-sm flex my-5">
                  <div className="text  flex w-1/4">
                    <span className="text mt-1 mr-2">
                      <FaPlay className="text-[#64ffda]" />
                    </span>
                    <span className="text-[#d1e5f0] font-semibold">
                    Scict
                    </span>
                  </div>
                  <div className="text-[#d1e5f0] grid mx-7">
                    <span className="text">
                    Backend Engineer
                      <span className="text-[#64ffda] font-semibold"> @ Scict</span>
                    </span>
                    <span className="text">October 2020 - November 2021</span>
                  </div>
                </div>

                </div>
              </div>
              <div className="text-sm my-10">
                <h1 className="text-xl mb-5 font-bold text-[#b9d8e9] text-center">
                  Skills
                </h1>
                <div className="text flex justify-between px-5">
                  <ul className="text list-disc">
                    <span className="text-lg font-bold">Technologies</span>
                    <li className="text">JavaScript</li>
                    <li className="text">TypeScript</li>
                    <li className="text">HTML5</li>
                    <li className="text">CSS3</li>
                    <li className="text">SQL</li>
                    <li className="text">PHP</li>
                  </ul>
                  <ul className="text list-disc">
                    <span className="text-lg font-bold">Frameworks</span>
                    <li className="text">React.js</li>
                    <li className="text">Angular.js</li>
                    <li className="text">Node.js</li>
                    <li className="text">JQUERY</li>
                    <li className="text">Vue.js</li>
                    <li className="text">Express.js</li>
                    <li className="text">MpngoDB</li>
                    <li className="text">Laravel</li>
                    <li className="text">.NET</li>
                    <li className="text">TailwindCss</li>
                    <li className="text">SASS</li>
                    <li className="text">Bootstrap</li>
                  </ul>
                  <ul className="text list-disc">
                    <span className="text-lg font-bold">Libraries</span>
                    <li className="text">Socket.io</li>
                    <li className="text">Lodash</li>
                    <li className="text">Material UI</li>
                    <li className="text">Vite</li>
                    <li className="text">Mongoose</li>
                    <li className="text">CORS</li>
                    <li className="text">React Icons</li>
                    <li className="text">Redux</li>
                    <li className="text">React Suspense</li>
                  </ul>
                  <ul className="text list-disc">
                    <span className="text-lg font-bold">Tools</span>
                    <li className="text">Git & Github</li>
                    <li className="text">PostMan</li>
                    <li className="text">Vs Code</li>
                    <li className="text">Command Lines</li>
                    <li className="text">Yarn</li>
                    <li className="text">Npm</li>
                    <li className="text">Chrome dev tools</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm my-7">
                <h1 className="text-xl font-bold text-[#b9d8e9] text-center">
                  Contacts
                </h1>
                <div className="text flex justify-between px-5">
                  Email : adetutuemmanueloluwatayese@gmail.com <br />
                  Contact: 07064778921
                </div>
              </div>

          <div className="text-center my-10" >
            <button className="text-[#64ffda] bg-[#64ffda] rounded font-mono">
            <button onClick={downloadPDF} className="text-[#64ffda] border border-[#64ffda] hover:-translate-x-1 transition hover:-translate-y-1 bg-[#0a192f] rounded px-5 py-2 font-mono">Download my Cv</button>
            </button>
          </div>
            </div>
            </div>
          </div>
          }
        </Modal>
      </div>
    </div>
  );
}

export default App;

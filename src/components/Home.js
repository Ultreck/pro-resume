import React, { useEffect } from "react";
import Typed  from 'typed.js';
// import AOS from 'aos';
import Aos from "aos";
// import "animate.css";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init();
  },[])
  
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
      const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
          strings: [
        ' Emmanuel Oluwatayese',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  })
  return (
    <div>
      <div className="text w-full font-mono mt-24 pb-20 h-[90vh] px-5 flex items-center">
        <div className="text font-sans mx-auto">
          <h1 className="text-[#64ffda] text-xl font-mono"  data-aos-duration="1000" data-aos="zoom-in-down">Hi, my name is </h1>
          <h1 data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1000" className="text-[#d9eaff]  md:text-6xl text-3xl font-bold mt-5 mb-4">
             A. <span className="text" ref={el}></span>
          </h1>
          <h2 data-aos="fade-right"  data-aos-duration="1000" className="text-[#8e98b6] text-3xl md:text-6xl font-bold ">
            I'm a full stack web developer.
          </h2>
          <p className="text-[#919eb7] mt-8 md:w-2/3" data-aos="fade-left"  data-aos-duration="1000" >My name is A. Emmanuel Oluwatayese, I'm a Full-Stack web developer based in Lagos, Lagos State, Nigeria. I design a well responsive, easy to use, interactive, intuitive and best user experience website. I also work as a backend developer/engineer. </p>
          {/* <p className="text-[#919eb7] mt-4">
          I'm passionate about cutting-edge, pixel-perfect, beautiful and intuitively implemented UX.
          </p>
          <p className="text-[#919eb7] mt-4">
          Also as a backend engineer I'm passionate on Optimazing Database queries, Implementing Caching Mechanisms, Enhancing Server Performance, Monitoring and Performance testing.
          </p> */}
          <div className="text-center mt-5" data-aos="fade-up-left">
            <button className="text-[#64ffda] bg-[#64ffda] rounded font-mono">
            <button className="text-[#64ffda] border border-[#64ffda] hover:-translate-x-1 transition hover:-translate-y-1 bg-[#0a192f] rounded px-6 py-4 font-mono">Check out my course!</button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

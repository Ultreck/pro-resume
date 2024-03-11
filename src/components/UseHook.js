import React from "react";
import hms from "../images/HManagementSys.png";
import sms from "../images/SManagementSys.png";
import rma from "../images/moviesApp.png";

const UseHook = () => {
  const projects = [
    {
      id: 1,
      url: sms,
      appUrl: "https://school-management-system-two.vercel.app/",
      title: "School Management System",
      type: "Web development",
      description:
        "The School Management System web application is a comprehensive platform designed to streamline administrative tasks and enhance communication within educational institutions. Leveraging a powerful stack of technologies, including React.js, Express.js, MongoDB, Cloudinary, Socket.io, and Node.js, the system offers a robust and scalable solution for managing various aspects of school operations.",
      tools: ["React.js", "Express.js", "MongoDB", "Cloudinary", "Socket.io", "Node.js", "Mongoose"],
    },
    {
      id: 2,
      url: rma,
      appUrl: "https://recommendation-movie-app.vercel.app/",
      title: "Recommendation Movie App",
      type: "Web development",
      description:
        "The Recommendation Movie web application offers personalized movie suggestions based on the user's selected genre preferences. Utilizing React.js, Redux, and The Movie Database (TMDB) API, the app provides a seamless and interactive experience for users to discover new films tailored to their tastes",
      tools: ["TMDB API", "React.js", "Redux", "LocalStorage"],
    },
    {
      id: 3,
      url: hms,
      appUrl: "https://medical-management-system.vercel.app/",
      title: "Hospital Management System",
      type: "Web development",
      description:
        "The Hospital Management System web application serves as a comprehensive platform for streamlining hospital operations, facilitating efficient management of patient records, appointments, and medical resources. Leveraging React.js for the frontend and Firebase for the backend, the system offers a seamless user experience and robust functionality",
      tools: ["React.js", "Firebase"],
    },
  ];
  return {
    projects,
  };
};

export default UseHook;

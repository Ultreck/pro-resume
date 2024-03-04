import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import SuspenseContainer from "./SuspenseContainer";

const Home = React.lazy(() => import(`../components/Home`));
const About = React.lazy(() => import(`../components/About`));
const Skills = React.lazy(() => import(`../components/Skills`));
const Experience = React.lazy(() => import(`../components/Experience`));
const Work = React.lazy(() => import(`../components/Work`));
const Contact = React.lazy(() => import(`../components/Contact`));

const Router = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <SuspenseContainer>
                <Home />
              </SuspenseContainer>
            }
          />
          <Route
            path="/about"
            element={
              <SuspenseContainer>
                <About />
              </SuspenseContainer>
            }
          />
          <Route
            path="/skills"
            element={
              <SuspenseContainer>
                <Skills />
              </SuspenseContainer>
            }
          />
          <Route
            path="/experiences"
            element={
              <SuspenseContainer>
                <Experience />
              </SuspenseContainer>
            }
          />
          <Route
            path="/work"
            element={
              <SuspenseContainer>
                <Work />
              </SuspenseContainer>
            }
          />
          <Route
            path="/contact"
            element={
              <SuspenseContainer>
                <Contact />
              </SuspenseContainer>
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer/>
    </AnimatePresence>
  );
};

export default Router;

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

function App() {
  return (
    <div className="bg-[#0a192f] w-full overflow-hidden">
      <Header />
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
    </div>
  );
}

export default App;

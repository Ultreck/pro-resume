import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter, Outlet } from "react-router-dom";
import Routers from "./routes/Routers";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <div className="bg-[#0a192f] w-full overflow-hidden">
        <Header />
        <Routers />
    </div>
  );
}

export default App;

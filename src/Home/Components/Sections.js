import { lazy } from "react";
import "../../Stylesheets/Home/Sections.css";
import About from "./About";
import Experience from "./Experience";
const Education = lazy(() => import("./Education"));

export default () => {
  return (
    <div className="sections-container">
      <About />
      <Experience />
      <Education />
    </div>
  );
};

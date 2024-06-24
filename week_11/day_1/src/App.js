import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Project from "./projects";

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">My Projects</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About hobbies={"javascript"} />} />
      <Route path="/projects/:name" element={<Project />} />
    </Routes>
  </div>
);

export default App;

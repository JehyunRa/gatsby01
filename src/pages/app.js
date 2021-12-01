import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./contents/home";
import About from "./contents/about";
import Contact from "./contents/contact";

import NavButton from "./components/navbutton";

import "./app.css";

export default function App() {

  return(
    <Router>
      <nav>
        <NavButton name="Home" nav="/" />
        <NavButton name="About" nav="/about" />
        <NavButton name="Contact" nav="/contact" />
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

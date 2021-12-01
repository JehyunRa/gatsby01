import React from "react"

import NavButton from "./navbutton"

import "./nav.css"

export default function NavBar() {

  return(
    <nav>
      <NavButton name="Home" nav="/" />
      <NavButton name="About" nav="/about" />
      <NavButton name="Contact" nav="/contact" />
    </nav>
  )
}
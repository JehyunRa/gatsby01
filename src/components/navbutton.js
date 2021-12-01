import React from "react"
import { Link } from 'gatsby'

import "./nav.css";

export default function NavButton(props) {

  return(
    <Link to={props.nav}>
      <button class="navbutton">
        {props.name}
      </button>
    </Link>
  )
}
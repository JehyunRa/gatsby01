import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./navbutton.css";

export default function NavButton(props) {

  let navigate = useNavigate();
  function handleClick() {
    navigate(props.nav);
  }

  return(
    <button 
      class="navbutton"
      onClick={() => {handleClick()}}
    >
      {props.name}
      </button>
  )
}
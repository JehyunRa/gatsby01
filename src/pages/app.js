import React from "react"

import NavBar from "../components/navbar"

import "./app.css"

export default function App({ children }) {

  return(
    <div>
      <NavBar />
      { children }
    </div>
  )
}

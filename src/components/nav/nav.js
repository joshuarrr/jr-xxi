import React from 'react'
import { Link } from "gatsby"

// styles
import './nav.css'


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () =>
  <nav className="nav">
    <Link className="nav-item" to="/">about</Link>
    <Link className="nav-item" to="/design">design</Link>
    <Link className="nav-item" to="/code">code</Link>
  </nav>
import React from 'react'
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'

// components
import Nav from '../nav/'

// styles
import './header.css'


/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () =>
  <header className="header">
  <Link to="/" className="logo-link">
    <svg id="j" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10,7.55c0-.87,0-1-.6-1.39L9.23,6a.31.31,0,0,1,0-.4,15.42,15.42,0,0,0,2.31-1.1c.11,0,.2,0,.22.13,0,.78-.09,1.86-.09,2.78v5.42a9.57,9.57,0,0,1-.47,3.49A7.88,7.88,0,0,1,7.82,20a.38.38,0,0,1-.31-.52,4.27,4.27,0,0,0,1.32-1c.81-.94,1.21-2.55,1.21-5.29ZM11.9,1.16a1.11,1.11,0,0,1-1.19,1.17A1.11,1.11,0,0,1,9.57,1.19,1.15,1.15,0,0,1,10.78,0,1.12,1.12,0,0,1,11.9,1.16Z"/>
    </svg>
    <h1 className="title hidden-text">
      Joshua Richey
    </h1>
  </Link>
  <MediaQuery key="mobile" query="(max-width: 1024px)">
    <Nav />
  </MediaQuery>
  </header>
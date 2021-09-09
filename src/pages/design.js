import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

// components
import ImgLoad from "/src/components/code/imgLoad"
import ScrollButton from "/src/components/scrollToTop/"

// styles
import "/src/styles/projects.css"

export default function Design() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>joshuar — product design</title>,
    </Helmet>,
    <section key="design-projects" className="design projects">
      <section className="project-summary">
        <h1>/* Hilights */</h1>
        <p>
          Product design for a music collaboration app that facilitates
          conversations around specific sections of recordings.
        </p>
        <div className="project-cover">
          <Link to="./hilights">
            <ImgLoad
              url="jr-xix/hilights/cover.png"
              cloudinary
              ratio="511x289"
            />
          </Link>
        </div>
      </section>

      <section className="project-summary">
        <h1>/* Lumen Learning */</h1>
        <p>
          User research, usability testing, and UI wireframes for a LMS
          (Learning Management System) that provides open source textbooks.
        </p>
        <div className="project-cover">
          <Link to="./lumen">
            <ImgLoad
              url="jr-xix/lumen/cover.png"
              cloudinary
              ratio="900x564"
              className="rounded"
            />
          </Link>
        </div>
      </section>

      <section className="project-summary">
        <h1>/* Idealist */</h1>
        <p>
          UX design & front-end engineering for Idealist.org, an international
          non-profit job board with a social mission to create more good in
          the world by helping people turn their intentions into actions.
        </p>
        <div className="project-cover">
          <Link to="./idealist">
            <ImgLoad
              url="jr-xix/idealist/cover.png"
              cloudinary
              ratio="900x646"
            />
          </Link>
        </div>
      </section>
      
      <ScrollButton
        key="scroll-button"
        scrollStepInPx="80"
        delayInMs="16.66"
      />   
    </section>
  )
}

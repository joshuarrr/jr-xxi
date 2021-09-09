import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

// components
import ImgLoad from "/src/components/code/imgLoad"
import ScrollButton from "/src/components/scrollToTop/"

// styles
import "/src/styles/project.css"

export default function Lumen() {
  return [
    <Helmet key="helmet">
      <meta charSet="utf-8" />
      <title>joshuar — product design</title>
    </Helmet>,    
    <section key="lumen-project" className="project lumen">
         <section className="summary">
        <h1>/* Lumen */</h1>
        <p>User research, usability testing, and UI wireframes for a LMS (Learning Management System) that provides open source textbooks.</p>
      </section>
      <section className="project-content">
        <section>
          <ImgLoad
            url="jr-xix/lumen/cover.png"
            cloudinary
            ratio="511x289"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* app audit */</h1>
          <ImgLoad
            url="jr-xix/lumen/lumen-audit"
            cloudinary
            ratio="16x7"
            className="white rounded"
          />
        </section>
        <section>
          <h1>/* user research */</h1>
          <div className="three-up">
            <div className="three-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-research-01"
                cloudinary
                ratio="956x726"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-research-02"
                cloudinary
                ratio="956x726"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-research-03"
                cloudinary
                ratio="956x726"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section>
          <h1>/* personas */</h1>
          <ImgLoad
            url="jr-xix/lumen/lumen-personas-02"
            cloudinary
            ratio="502x325"
            className="white rounded"
          />
        </section>
        <section>
          <h1>/* card sorting for IA */</h1>
          <div className="three-up">
            <div className="three-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-card-sorting-01"
                cloudinary
                ratio="12x12"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-card-sorting-02"
                cloudinary
                ratio="12x12"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-card-sorting-03"
                cloudinary
                ratio="12x12"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section>
          <h1>/* wireframes */</h1>
          <div className="two-up">
            <div className="two-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-ac-wireframes"
                cloudinary
                ratio="2400x1453"
                className="white rounded"
              />
            </div>
            <div className="two-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-qe-wireframes"
                cloudinary
                ratio="2400x1453"
                className="white rounded"
              />
            </div>
          </div>
        </section>
       <section>
          <h1>/* assessment creator */</h1>
          <div className="two-up">
            <div className="two-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-ac-02"
                cloudinary
                ratio="2880x2936"
                className="rounded"
              />
            </div>
            <div className="two-up-wrapper">
              <ImgLoad
                url="jr-xix/lumen/lumen-ac-03"
                cloudinary
                ratio="2880x2686"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section>
          <h1>/* question editor */</h1>
          <ImgLoad
            url="jr-xix/lumen/lumen-wireframe-05-preview"
            cloudinary
            ratio="2400x1453"
            className="white rounded"
          />
        </section>
      </section>
      <Link to="/design" className="back-link">back</Link>
    </section>,
    <ScrollButton key="scroll-button" scrollStepInPx="80" delayInMs="16.66" />,
  ]
}

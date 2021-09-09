import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

// components
import ImgLoad from "/src/components/code/imgLoad"
import ScrollButton from "/src/components/scrollToTop/"

// styles
import "/src/styles/project.css"

export default function Idealist() {
  return [
    <Helmet key="helmet">
      <meta charSet="utf-8" />
      <title>joshuar — product design</title>
    </Helmet>,    
    <section key="idealist-project" className="project idealist">
      <section className="summary">
        <h1>/* Idealist */</h1>
        <p>
          UX design & front-end engineering for Idealist.org, an international
          non-profit job board with a social mission to create more good in the
          world by helping people turn their intentions into actions.
        </p>
      </section>
      <section className="project-content">
        <section>
          <ImgLoad url="jr-xix/idealist/cover" cloudinary ratio="900x646" />
        </section>
        <section>
          <h1>/* responsive search */</h1>
          <ImgLoad
            url="jr-xix/idealist/idealist-search-mobile"
            cloudinary
            ratio="1800x796"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* our team + about us */</h1>
          <ImgLoad
            url="jr-xix/idealist/idealist-team-mobile"
            cloudinary
            ratio="1800x1296"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* desktop search */</h1>
          <ImgLoad
            url="jr-xix/idealist/idealist-search-desktop.jpg"
            cloudinary
            ratio="2560x1600"
            className="rounded scrollable"
          />
        </section>
      </section>
      <Link to="/design" className="back-link">
        back
      </Link>
    </section>,
    <ScrollButton key="scroll-button" scrollStepInPx="80" delayInMs="16.66" />,
  ]
}

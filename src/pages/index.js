import * as React from "react"

// components
import ScrollButton from '../components/scrollToTop'
import ImgLoad from '../components/code/imgLoad'

// styles
import'../styles/about.css'


const IndexPage = () => [
    <section key="content" className="about content">
    <div className="profile-pic-wrapper">
    <ImgLoad
      url="jr-xix/joshua-richey"
      ratio='1x1'
      duration='1s'
      className="profile-pic rounded bordered"
      indicator
      cloudinary
    />
    </div>
    <section className="bio">
        <p>Joshua Richey is a product designer, user experience advocate, and front-end developer with > 20 years conceiving, researching, designing, and building digital tools for human use. He has designed products for Pink Floyd, Skydance Entertainment, and the Grand Canyon. Currently he helps Aclima build interfaces that visualize air pollution at a hyperlocal level.</p>
        <p>Motivated by change-making and world-saving, he led design at Idealist.org (an international jobs board for nonprofits), where he spearheaded human-centered design efforts, instituted a scalable design system, and rewrote the front end using htlm5, sass + postCSS, and react.</p>
        <p>Previously, he operated his own consultancy where he led a team of designers and developers through the design and implementation of brand, print, and interactive experiences.</p>
        <p>When not in front of his screen, he’s probably out walking around with his dog. When in front of the screen, he probably looks like this:</p>
        <div className="working-pic-wrapper">
        <ImgLoad
          url="jr-xix/working"
          ratio='1x1'
          duration='1s'
          className="rounded bordered"
          indicator
          cloudinary
        />
      </div>
    </section>
  </section>,
  <ScrollButton
    key="scroll-button"
    scrollStepInPx="50"
    delayInMs="16.66"
  />
]

export default IndexPage

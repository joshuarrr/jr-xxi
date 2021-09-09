import * as React from "react"
import { Helmet } from "react-helmet"


// components
import CodeProject from '/src/components/codeProject/'
import ImgGrid from '/src/components/code/imgGrid/'
import ImgLoad from '/src/components/code/imgLoad/'
import ScrollButton from '/src/components/scrollToTop/'

// utils
import { chooseFrom } from '/src/utils'

// cloudinary images
const images = [
  'jr-xix/projects/conquer',
  'jr-xix/projects/santa-monica',
  'jr-xix/projects/birds',
  'adia',
  'mask',
  'paint',
  'drop',
 ]

 const images2 = [
  'deepestBlue',
  'Flyboys-01',
  'pink-floyd-cal-front',
  'cold-girl',
  'prc',
  'CCA2',
  'CCA-01',
  'Chali2Na',
  'polar-express-01',
 ] 

 
 class Code extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image1: chooseFrom(images),
      image2: chooseFrom(images2),
      reload: 0,
    }
  }

  handleReload = (event, img) => {
    event.preventDefault()
    this.setState( prevState => ({
      [img]: null
    }));
    
    setTimeout( () => {
      if (img === 'image1') {
        this.setState( prevState => ({
          [img]: chooseFrom(images)
        }))
        } else if (img === 'image2') {
          this.setState( prevState => ({
            [img]: chooseFrom(images2)
          }))        
        }
    }, 750);
  }

  render = () => {
    return [
      <Helmet key="helmet">
        <meta charSet="utf-8" />
        <title>joshuar — code</title>
      </Helmet>,
      <section key="content-code-projects" className="code projects">
        <CodeProject
          title="React Grid Thing"
          description="Pretty squares&#x2026; This experiment grabs a color pallet from an image to overlay a shifting sea of squares. Reload to see a different photo."
          codeUrl="https://raw.githubusercontent.com/joshuarrr/jr-xx/master/src/components/projects/code/imgGrid/imgGrid.js"
          ratio='16x9'
        >
          <a href="#" onClick={(event) => this.handleReload(event, 'image1')}>
            <ImgGrid
              url={this.state.image1}
              ratio='16x9'
              duration='0.5s'
              className="rounded bordered"
              cloudinary
            />
          </a>
          <button className="code-refresh" onClick={(event) => this.handleReload(event, 'image1')}> &#10227; </button>
        </CodeProject>

        <CodeProject
          title="ImgLoad"
          description="React image loader. Gracefully adds an image to the dom, using aspect ratios to presize and transitions to fade in."
          codeUrl="https://raw.githubusercontent.com/joshuarrr/jr-xx/master/src/components/projects/code/imgLoad/imgLoad.js"
          ratio='9x6'
        >
          <a href="#" onClick={(event) => this.handleReload(event, 'image2')}>
            <ImgLoad
              url={this.state.image2}
              ratio='9x6'
              duration='0.5s'
              className="rounded bordered"
              cloudinary
              indicator
            />
          </a>
          <button className="code-refresh" onClick={(event) => this.handleReload(event, 'image2')}> &#10227; </button>
        </CodeProject>
      </section>,
      <ScrollButton
        key="scroll-button"
        scrollStepInPx="50"
        delayInMs="16.66"
      />
    ]
  }
}

export default (Code)

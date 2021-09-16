/* ImgLoad *//*
  - get an image from props array
  - set loading text / spinner
  - wait until image loaded successfully
  - set opacity of image when loaded
  - optionally set image aspect ratio

  props:
    image: a url
    ratio: if provided as #x#, will size the image for stenciling
    fade: defaults to true - fade image opacity of load
    duration: effect duration - defaults to .5s
    className: add a class
    loadingMessage: display a message while loading
    indicator: display a component while loading
    cloudinary: use cloudinary component instead of img
    gravity: compass direction, one of: north_east, north, north_west, west, 
      south_west, south, south_east, east, or center (defautl)
  */

import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

// utils
import { parseAspectRatio } from '../../../utils'

// styles
import './imgLoad.css'

// components
import LoadingIndicator from '../../loadingIndicator'
  


class ImgLoad extends React.Component {
  static defaultProps = {
    url: null,
    ratio: null,
    fade: true,
    duration: '2s',
    className: '',
    indicator: true,
    loadingMessage: null,
    controls: false,
    cloudinary: true,
    gravity: 'center',
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      reload: 0
    }
  }

  componentDidMount = () => {
    /* If not using cloudinary, call loadImage */
    /* loadImage promise success */
    if (!this.props.cloudinary) {
      // console.log('...not cloudinary...')
      this.loadImage().then(() => {
        this.setState({
          loaded: true
        })
      /* loadImage promise failure */
      }, (error) => {
        console.log('Loading failed.', error)
        this.setState({loaded: false});
      });
    }
  }

  componentDidUpdate = (before) => {
    if (before.url !== this.props.url) {
      this.setState({loaded: false})
      // console.log("unloadeded")
    }
  }


  render = () => {
    const imgStyles = this.props.fade
      ? {
        opacity: this.state.loaded ? '1' : '0',
        transition: `opacity ${this.props.duration} ease-in-out`
      }
      : null

    const showLoadingIndicator = !this.state.loaded && this.props.indicator
      ? <LoadingIndicator />
      : null

    const showLoadingMessage = this.props.loadingMessage
       ? !this.state.loaded
         ? <p className="loading-message">{this.props.loadingMessage}</p>
         : null
       : null

      const imageLoad = () => {
        if (this.state.loaded) return;
        this.setState({
          loaded: true
        })
      }

    /* if cloudinary prop is true, use the cloudinary component... */
    const showImage = this.props.cloudinary
      ? <Image
          className={`cloudinary image ${this.props.className}`}
          cloudName="joshuar"
          publicId={this.props.url}
          width="auto"
          dpr="auto"
          progressive="false"
          f_auto="true"
          secure
          responsive
          gravity={this.props.gravity}
          onLoad={event => {
            // let parent know the image loaded and send back the url
            if (this.props.imgLoaded) {
              this.props.imgLoaded(event.currentTarget.src)
            }
            imageLoad()
          }}
          style={imgStyles}
        >
          <Transformation aspectRatio={parseAspectRatio(this.props.ratio, 'c')} crop="fill" gravity={this.props.gravity} />
        </Image>
        
      : <img
          alt=""
          src={this.props.url}
          className="image"
          style={imgStyles}
        />

    return (
      <div
        className={`image-loader ${this.props.className}`}
        key="image-loader"
        style={{
          paddingBottom: parseAspectRatio(this.props.ratio) + '%'
        }}
      >
        {showLoadingIndicator}
        {showLoadingMessage}
        {showImage}
        {/* {showControls} */}
      </div>
    )
  }

  loadImage = () => new Promise( (resolve, reject) => {
    const img = new Image()
    /* resolve promise on load */
    img.onload = () => {
      resolve(img) // return the image element
    }
    /* reject promise on not load */
    img.onerror = () => {
      reject()
    }
    /* image to load */
    img.src = this.props.url
  })
}

export default React.forwardRef((props, ref) => <ImgLoad {...props} imgRef={ref}/>)

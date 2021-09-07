/* ImgGrid *//*
  - load an image using ImgLoad component
  - generate a grid of cells based on the image size
  - color cells based on the image color
  - assign divs random opacities
  - change some random cell opacities on an interval to animate the cells
  */

import React from 'react'
import {Palette} from 'react-palette'

// components
import ImgLoad from '../imgLoad'
import GridCells from '../gridCells'

// styles
import './imgGrid.css'
//


class ImgGrid extends React.Component {
  static defaultProps = {
    url: null
  }

  constructor(props) {
    super(props)
    this.imageGrid = React.createRef();

    this.state = {
      loaded: false,
      imgUrl: this.props.url
    }
  }

  componentDidUpdate = (before) => {
    if (before.url !== this.props.url) {
      this.setState({loaded: false})
      // console.log("unloadeded")
    }
  }  

  render = () =>
    <div
      ref={this.imageGrid}
      className="img-grid-wrapper"
    >
       {this.state.loaded &&
        <Palette src={this.state.imgUrl}>
          {( {data} ) => (
            data && <GridCells color={data.vibrant} node={this.imageGrid} ratio />
          )}
        </Palette>
      }
      {this.renderImg()}
    </div>

  renderImg = () =>
    <ImgLoad {...this.props}
      imgLoaded ={src => {
        if (this.state.loaded) {
          return
        }
        this.setState({
          loaded: true,
          imgUrl: src
        })
      }}
    />
}


export default (ImgGrid)

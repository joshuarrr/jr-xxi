import React from 'react'

// styles
import './controls.css'


class Controls extends React.Component {
  render = () => {
    const toggleMode = this.props.controls
      ? this.props.controls.length
        ? <ul className="controls">
            <li className="mode">☀️</li>
          </ul>
        : console.log('empty controls array')
      : console.log('no controls array')

    return (
      // toggleMode
      null
    )
  }

  // default props
  static defaultProps = {
    controls: null,
  }
}

export default (Controls)

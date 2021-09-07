import React from 'react'

// styles
import './scrollToTop.css'
//

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  render () {
    return <button
      title='Back to top'
      className='scroll-button'
      onClick={ () => { this.scrollToTop(); }}
    >
      <span className='up-arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <polygon points="9.98 8.15 1.37 15.19 0.5 13.62 8.99 6.3 9.98 4.81 11.01 6.3 19.5 13.62 18.59 15.19 9.98 8.15"/>
        </svg>
      </span>
    </button>
   }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId });
  }
}


export default (ScrollButton)

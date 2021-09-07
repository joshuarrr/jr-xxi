import React from 'react'

// hilighter
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

// utils
import { parseAspectRatio } from '../../utils'

// styles
import './code-project.css'
//

SyntaxHighlighter.registerLanguage('jsx', jsx);


class CodeProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCode: false,
      error: null,
      isLoaded: false,
      text: '',
    }
  }

  componentDidMount() {
    // console.log(this.props.codeUrl)
    if (this.props.codeUrl) {
      this.loadCodeAsText(this.props.codeUrl)
    }
  }
 
  render = () => {
    const { error, isLoaded, text } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      const codeText = 'Loading...'
    } else {
      const codeText = text
    }

    return (
      <section className="project-summary">
        <h1>{`/* ${this.props.title} */`}</h1>
        <p>{this.props.description}</p>
        <div
          className="code-project"
          style={{
          paddingBottom: parseAspectRatio(this.props.ratio) + '%'
        }}
        >
          {
          this.props.codeUrl &&
            <>
              <button className="code-toggle"
                onClick={() => this.setState(prevState => ({
                  showCode: !prevState.showCode
                }))}
              > {
                this.state.showCode
                ? <svg width="20px" height="14px" viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.334,5.702 L5.796,6.416 L0.728,9.566 L5.796,12.772 L5.278,13.416 L-6.17284002e-14,10.112 L-6.17284002e-14,9.006 L5.334,5.702 Z M10,11.8 C8.8954305,11.8 8,10.9045695 8,9.8 C8,8.6954305 8.8954305,7.8 10,7.8 C11.1045695,7.8 12,8.6954305 12,9.8 C12,10.9045695 11.1045695,11.8 10,11.8 Z M14.448,5.702 L19.796,9.02 L19.796,10.112 L14.518,13.416 L14,12.73 L19.054,9.566 L14,6.388 L14.448,5.702 Z" id="path-1" />
                  </svg>
                : <svg width="20px" height="14px" viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.334,5.702 L5.796,6.416 L0.728,9.566 L5.796,12.772 L5.278,13.416 L-6.17284002e-14,10.112 L-6.17284002e-14,9.006 L5.334,5.702 Z M7.75399962,15.4 L7.03999962,15.092 L13.0599996,2.702 L13.7599996,3.052 L7.75399962,15.4 Z M14.448,5.702 L19.796,9.02 L19.796,10.112 L14.518,13.416 L14,12.73 L19.054,9.566 L14,6.388 L14.448,5.702 Z" id="path-1" />
                  </svg>
                }
              </button>
            </>
          }
          { !this.state.showCode
            ? this.props.children
            : <div className="code-pane">
                  <SyntaxHighlighter
                    language='jsx'
                    useInlineStyles={false}
                    showLineNumbers
                  >
                    {this.state.text}
                  </SyntaxHighlighter>
              </div>
          }
          
        </div>
      </section>
    )
  }

  loadCodeAsText = (codeUrl) => {
    fetch(codeUrl)
    .then(res => res.text())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          text: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
}

export default CodeProject;

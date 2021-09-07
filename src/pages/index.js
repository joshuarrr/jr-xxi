import * as React from "react"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <main>
      <nav>
      <ul>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/design">design</Link></li>
        <li><Link to="/code">code</Link></li>
      </ul>
      </nav>
      <title>About</title>
      <p>Hello, Hello</p>
    </main>
  )
}

export default IndexPage

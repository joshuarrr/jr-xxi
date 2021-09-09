import * as React from "react"
import { Helmet } from "react-helmet"


const NotFoundPage = () => {
  return [
    <Helmet key="helmet">
      <meta charSet="utf-8" />
      <title>joshuar — 404</title>
    </Helmet>,    
    <section key="content" className="content">
      <p>Lost</p>
      <br />Stand still. The trees ahead and bushes beside you
      <br />Are not lost. Wherever you are is called Here,
      <br />And you must treat it as a powerful stranger,
      <br />Must ask permission to know it and be known.
      <br />The forest breathes. Listen. It answers,
      <br />I have made this place around you.
      <br />If you leave it, you may come back again, saying Here.
      <br />No two trees are the same to Raven.
      <br />No two branches are the same to Wren.
      <br />If what a tree or a bush does is lost on you,
      <br />You are surely lost. Stand still. The forest knows
      <br />Where you are. You must let it find you.
      <br />
      <br />— David Wagoner
    </section>
  ]
}

export default NotFoundPage

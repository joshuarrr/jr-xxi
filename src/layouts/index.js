import React from "react"
import { useMediaQuery } from "react-responsive"

// components
import Header from "../components/header"
import Footer from "../components/footer"
import Nav from "../components/nav"
import LoadingIndicator from "../components/loadingIndicator/"

// styles
import "../styles/app.css"

export default function Layout({ children }) {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  })

  // TODO: https://github.com/gatsbyjs/gatsby/issues/14601
  // ClasName fuckery
  return isBigScreen ? (
    <div>
      <div className="desktop grid">
        <div className="left-column">
          <Header />
          <Nav />
          <Footer />
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  ) : (
    <div className="mobile">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

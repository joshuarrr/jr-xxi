import React from "react"
import { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

// components
import Header from "../components/header"
import Footer from "../components/footer"
import Nav from "../components/nav"
import LoadingIndicator from "../components/loadingIndicator/"

// styles
import "../styles/app.css"

export default function Layout({ children }) {
  const [isClient, setClient] = useState(false)

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  })

  useEffect(() => {
    setClient(true)
  }, [])

  // console.log(isClient)

  const BigLayout = () => {
    <p>Big Layout</p>
  }

  const LilLayout = () => {
    <p>Lil' Layout</p>
  }

  //works
  return isClient ? (
    isBigScreen 
    ? <div className="desktop grid">
        <div className="left-column">
          <Header />
          <Nav />
          <Footer />
        </div>
        <main className="main">
          {children}
        </main>
      </div>
    : <p>Little</p>
  ) : (
    <div className="mobile">
      <Header />
      <main className="main">
        {children}
        </main>
      <Footer />
    </div>
  )
}

import React from 'react'
import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'

// components
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
import LoadingIndicator from '../components/loadingIndicator/'

// styles
import '../styles/app.css'


export default function Layout({ children }) {
  const isBigScreen = useMediaQuery({
    query: '(min-width: 1224px)'
  })


  return (
    <>
    {
      isBigScreen &&
      <div className="desktop grid">
        <div className="left-column">
          <Header />
          <Nav />
          <Footer />
        </div>
        <main className="main">
        <React.Suspense fallback={<LoadingIndicator />}>
          {children}
        </React.Suspense>
        </main>
      </div>
    }
    {
      !isBigScreen &&
      <div className="mobile">
        <Header />
          <main className="main">
            <React.Suspense fallback={<LoadingIndicator />}>
              {children}
            </React.Suspense>
          </main>
          <Footer />
        </div>
    }
    </>
  )
}

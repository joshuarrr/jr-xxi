import React, { Component } from 'react'
// import { Routes } from 'react-static'
import MediaQuery from 'react-responsive'

// components
import Header from '../header/'
import Footer from '../footer/'
import Nav from '../nav/'
import Controls from '../controls/'


import LoadingIndicator from '../loadingIndicator/'

export default function grid() {
  return (
    <>
      <MediaQuery key="mobile" query="(max-width: 1024px)">
      <div className="mobile">
        <Header />
        <main className="main">
          <React.Suspense fallback={<LoadingIndicator />}>
            <Routes default />
          </React.Suspense>
        </main>
        <Footer />
        <Controls controls={['toggle-mode', 'toggle-fullscreen', 'toggle-color']} />
      </div>
    </MediaQuery>
    <MediaQuery key="desktop" query="(min-width: 1025px)">
      <div className="desktop grid">
        <div className="left-column">
          <Header />
          <Nav />
          <Footer />
        </div>
        <main className="main">
        <React.Suspense fallback={<LoadingIndicator />}>
          <Routes default />
        </React.Suspense>
        </main>
        <div className="right-column">
          <Controls controls={['toggle-mode', 'toggle-fullscreen', 'toggle-color']} />
        </div>
      </div>
    </MediaQuery>
    </>
  )
}

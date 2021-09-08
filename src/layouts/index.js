import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

// components
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import LoadingIndicator from "../components/loadingIndicator/";

// styles
import "../styles/app.css";


export default function Layout({ children }) {

  const BigLayout = () => {
    return (
      <div className="desktop grid">
        <div className="left-column">
          <Header />
          <Nav />
          <Footer />
        </div>
        <main className="main">
          {children}
        </main>
      </div>
    )
  }

  const LilLayout = () => {
    return (
      <div className="mobile">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    )
  }

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  function responsiveLayout () {
    if (isBigScreen) {
      return <BigLayout />
    } else {
      return <LilLayout />
    }
  }
  
  return responsiveLayout()
}

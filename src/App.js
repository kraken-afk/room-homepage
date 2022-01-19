import React, { useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import "./styles/css/main.css";

export default function App() {
  const navWrapperRef = useRef(null);
  const headerContentRef = useRef(null);

  const navScrollSystem = () => {
    const navWrapperPos = navWrapperRef.current.getBoundingClientRect().bottom;

    if (window.innerWidth < 783) {
      window.onscroll = () => {
        if (
          headerContentRef.current.getBoundingClientRect().top <
          navWrapperPos + 10
        ) {
          if (navWrapperRef.current.classList.contains("nav-wrapper-black"))
            return;
          navWrapperRef.current.classList.add("nav-wrapper-black");
        } else {
          if (!navWrapperRef.current.classList.contains("nav-wrapper-black"))
            return;
          navWrapperRef.current.classList.remove("nav-wrapper-black");
        }
      };
    }
  };

  /**  TO_DO:
  * Create Skeleton loading
  * Fetch Data from content.json
  */
  useEffect(() => {
    console.clear();
    navScrollSystem();
  }, []);

  return (
    <>
      <NavBar data={{ navWrapperRef }} />
      <Header data={{ headerContentRef }} />
      <Sections />
      <Footer />
    </>
  );
}
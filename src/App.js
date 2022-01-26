import React, { useRef, useEffect } from "react";
import LoadScreen from "./components/LoadScreen";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
// import useGET from "./components/useGET";
import "./styles/css/main.css";

export default function App() {
  const navWrapperRef = useRef(null);
  const headerContentRef = useRef(null);
  const headerRef = useRef(null);
  const loadScreenRef = useRef(null);
  const dataContent = [
    {
      head: "Discover innovative ways to decorate",
      paragraph:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      head: "We are available all across the globe",
      paragraph:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      head: "Manufactured with the best materials",
      paragraph:
        " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  function navScrollSystem() {
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
    // console.clear();
    document.body.style.overflowY = "hidden";
    navScrollSystem();
  }, []);

  return (
    <>
      <LoadScreen loadScreenRef={loadScreenRef} />
      <NavBar data={{ navWrapperRef }} />
      <Header data={{ headerContentRef, headerRef, dataContent }} />
      <Sections />
      <Footer />
    </>
  );
}
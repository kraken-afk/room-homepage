/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'

export default function Header({ data }) {
  const { headerContentRef, headerRef, dataContent } = data;
  const [index, setIndex] = useState(0);
  const head = dataContent[index]?.head;
  const paragraph = dataContent[index]?.paragraph;

  function nextClickHandle() {
    handleSlideAnimation('right');
    setTimeout(() => {
      if (index < dataContent.length - 1) setIndex(index + 1);
      else setIndex(0);
    }, 200);
  }

  function prevClickHandle() {
    handleSlideAnimation('left');
    setTimeout(() => {
      if (index > 0) setIndex(index - 1);
      else setIndex(2);
    }, 200);
  }

  function handleSlideAnimation(type) {
    const element = headerRef.current;
    element.onanimationend = () =>
      element.classList.remove("header-slide-" + type);
    element.classList.add("header-slide-" + type);
  }


  return (
    <header className="header" ref={headerRef}>
      <div className={`hero-carousel hero-carousel-image-${index + 1}`}>
        <div className="carousel-btns">
          <button onClick={prevClickHandle}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={nextClickHandle}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <article className="header-content" ref={headerContentRef}>
        <h1 className="content-heading">{head}</h1>
        <p className="content-paragraph">{paragraph}</p>
        <a href="#">
          SHOP NOW{" "}
          <span className="arrow">
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </span>
        </a>
      </article>
    </header>
  );
}
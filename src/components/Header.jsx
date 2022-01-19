/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Header({ data }) {
  const { headerContentRef } = data;

  return (
    <header className="header">
      <div className="hero-carousel hero-carousel-image-1">
        <div className="carousel-btns">
          <button>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button>
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
        <h1 className="content-heading">
          Manufactured with the best materials
        </h1>
        <p className="content-paragraph">
          Our modern furniture stare provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry. We understand what customer
          whant for their home and office.
        </p>
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
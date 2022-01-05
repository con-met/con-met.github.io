import React from "react";
import baloonImage from "../assets/images/baloon.svg";
import flowerImage from "../assets/images/flower.svg";

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gray-100 pricing-area py-120">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 text-center section-title">
              <h4 className="title">Our Pricing</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn't get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center row">
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
            <div className="single-pricing">
              <div className="text-center pricing-header">
                <h5 className="sub-title">Basic</h5>
                <span className="price">$ 199</span>
                <p className="year">per year</p>
              </div>
              <div className="mb-8 pricing-list">
                <ul>
                  <li>
                    <i className="lni-check-mark-circle"></i> Carefully crafted
                    components
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Amazing page
                    examples
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Super friendly
                    support team
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Awesome Support
                  </li>
                </ul>
              </div>
              <div className="text-center pricing-btn">
                <a className="main-btn" href="#">
                  GET STARTED
                </a>
              </div>
              <div className="bottom-shape">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 112.35"
                >
                  <defs>
                    <style>
                      .color-1{"{fill:#2bdbdc;isolation:isolate;}"}.cls-1
                      {"{opacity:0.1;}"}.cls-2{"{opacity:0.2;}"}.cls-3
                      {"{opacity:0.4;}"}.cls-4{"{opacity:0.6;}"}
                    </style>
                  </defs>
                  <title>bottom-part1</title>
                  <g id="bottom-part">
                    <g id="Group_747" data-name="Group 747">
                      <path
                        id="Path_294"
                        data-name="Path 294"
                        className="cls-1 color-1"
                        d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_297"
                        data-name="Path 297"
                        className="cls-2 color-1"
                        d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_296"
                        data-name="Path 296"
                        className="cls-3 color-1"
                        d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_295"
                        data-name="Path 295"
                        className="cls-4 color-1"
                        d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
            <div className="single-pricing pro">
              <div className="absolute top-0 right-0 w-40 -mr-20 pricing-baloon">
                <img src={baloonImage} alt="baloon" />
              </div>
              <div className="pricing-header">
                <h5 className="sub-title">Pro</h5>
                <span className="price">$ 399</span>
                <p className="year">per year</p>
              </div>
              <div className="mb-8 pricing-list">
                <ul>
                  <li>
                    <i className="lni-check-mark-circle"></i> Carefully crafted
                    components
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Amazing page
                    examples
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Super friendly
                    support team
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Awesome Support
                  </li>
                </ul>
              </div>
              <div className="text-center pricing-btn">
                <a className="main-btn" href="#">
                  GET STARTED
                </a>
              </div>
              <div className="bottom-shape">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 112.35"
                >
                  <defs>
                    <style>
                      .color-2{"{fill:#0067f4;isolation:isolate;}"}.cls-1
                      {"{opacity:0.1;}"}.cls-2{"{opacity:0.2;}"}.cls-3
                      {"{opacity:0.4;}"}.cls-4{"{opacity:0.6;}"}
                    </style>
                  </defs>
                  <title>bottom-part1</title>
                  <g id="bottom-part">
                    <g id="Group_747" data-name="Group 747">
                      <path
                        id="Path_294"
                        data-name="Path 294"
                        className="cls-1 color-2"
                        d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_297"
                        data-name="Path 297"
                        className="cls-2 color-2"
                        d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_296"
                        data-name="Path 296"
                        className="cls-3 color-2"
                        d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_295"
                        data-name="Path 295"
                        className="cls-4 color-2"
                        d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/3">
            <div className="single-pricing enterprise">
              <div className="absolute top-0 left-0 w-32 mt-3 ml-3 pricing-flower">
                <img src={flowerImage} alt="flower" />
              </div>
              <div className="text-right pricing-header">
                <h5 className="sub-title">Enterprise</h5>
                <span className="price">$ 799</span>
                <p className="year">per year</p>
              </div>
              <div className="mb-8 pricing-list">
                <ul>
                  <li>
                    <i className="lni-check-mark-circle"></i> Carefully crafted
                    components
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Amazing page
                    examples
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Super friendly
                    support team
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Awesome Support
                  </li>
                </ul>
              </div>
              <div className="text-center pricing-btn">
                <a className="main-btn" href="#">
                  GET STARTED
                </a>
              </div>
              <div className="bottom-shape">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 350 112.35"
                >
                  <defs>
                    <style>
                      .color-3{"{fill:#4da422;isolation:isolate;}"}.cls-1
                      {"{opacity:0.1;}"}.cls-2{"{opacity:0.2;}"}.cls-3
                      {"{opacity:0.4;}"}.cls-4{"{opacity:0.6;}"}
                    </style>
                  </defs>
                  <title>bottom-part1</title>
                  <g id="bottom-part">
                    <g id="Group_747" data-name="Group 747">
                      <path
                        id="Path_294"
                        data-name="Path 294"
                        className="cls-1 color-3"
                        d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_297"
                        data-name="Path 297"
                        className="cls-2 color-3"
                        d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_296"
                        data-name="Path 296"
                        className="cls-3 color-3"
                        d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_295"
                        data-name="Path 295"
                        className="cls-4 color-3"
                        d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;

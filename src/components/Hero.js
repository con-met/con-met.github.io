import React from "react";
import HeaderShape from "../assets/images/header-shape.svg";

const Hero = () => {
  return (
    <div id="home" className="relative z-10 header-hero">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full lg:w-5/6 xl:w-2/3">
            <div className="pt-48 pb-64 text-center header-content">
              <h3 className="mb-5 text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
                Soluzioni per comunicare
              </h3>
              <p className="px-5 mb-10 text-xl text-gray-700">
                Siamo il tuo partner che si occupa di Internet. <br />
                La nostra esperienza al Vostro servizio.
              </p>
              <ul className="flex flex-wrap justify-center">
                <li>
                  <a
                    className="mx-3 main-btn gradient-btn"
                    href="mailto:sales@conmet.it"
                  >
                    GET IN TOUCH
                  </a>
                </li>
                <li>
                  <a
                    className="mx-3 main-btn video-popup"
                    href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                  >
                    WATCH THE VIDEO <i className="ml-2 lni-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-20 w-full h-auto -mb-1 header-shape">
        <img src={HeaderShape} alt="shape" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Logo from "../assets/images/logo.svg";
import Hero from "./Hero";
import SocialList from "./SocialList";

const Header = (props) => {
  const hero = props?.hero ?? true;

  return (
    <header className="header-area">
      <div className="navigation">
        <div className="container">
          <div className="row">
            <div className="w-full">
              <nav className="flex items-center justify-between navbar navbar-expand-md">
                <a className="mr-4 navbar-brand" href="/">
                  <img src={Logo} alt="Logo" />
                </a>
                <h1>
                  HERO {hero} {typeof hero} {JSON.stringify(props)}
                </h1>
                <button
                  className="block navbar-toggler focus:outline-none md:hidden"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="absolute left-0 z-30 hidden w-full px-5 py-3 duration-300 bg-white shadow md:opacity-100 md:w-auto collapse navbar-collapse md:block top-100 mt-full md:static md:bg-transparent md:shadow-none"
                  id="navbarOne"
                >
                  <ul className="items-center content-start mr-auto lg:justify-center md:justify-end navbar-nav md:flex">
                    <li className="nav-item active">
                      <a className="page-scroll" href="/">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/service">
                        SERVIZI
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/pricing">
                        PREZZI
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/testimonial">
                        COSA FACCIAMO
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="/contact">
                        CONTATTI
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="items-center justify-end hidden navbar-social lg:flex">
                  <span className="mr-4 font-bold text-gray-900 uppercase">
                    FOLLOW US
                  </span>
                  <SocialList></SocialList>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {hero && Hero}
    </header>
  );
};

export default Header;

import React from "react";
import SocialList from "./SocialList";
import LogoImage from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-gray-100 footer-area">
        <div className="mb-16 footer-widget">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="items-end justify-between block mb-8 footer-logo-support md:flex">
                  <div className="flex items-end footer-logo">
                    <a className="mt-8" href="/">
                      <img src={LogoImage} alt="Logo" />
                    </a>

                    <SocialList className="mt-8 ml-8 flex footer-social"></SocialList>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Con Met</h6>
                  <ul>
                    <li>
                      <a href="/about">Chi siamo</a>
                    </li>
                    <li>
                      <a href="/contact">Contatti</a>
                    </li>
                    <li>
                      <a href="/career">Offerte di lavoro</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Prodotti &amp; Servizi</h6>
                  <ul>
                    <li>
                      <a href="/products">Prodotti</a>
                    </li>
                    <li>
                      <a href="/business">Aziende</a>
                    </li>
                    <li>
                      <a href="/services">Servizi</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/4">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Aiuto &amp; Supporto</h6>
                  <ul>
                    <li>
                      <a href="https://www.aiutoveloce.it/">Aiuto</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Termini e condizioni</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
                <div className="mb-8 footer-newsletter">
                  <h6 className="footer-title">Subscribe Newsletter</h6>
                  <div className="newsletter">
                    <form action="#" className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 mt-3 mr-6 text-xl text-blue-600"
                      >
                        <i className="lni-angle-double-right"></i>
                      </button>
                    </form>
                  </div>
                  <p className="font-medium text-gray-900">
                    Subscribe weekly newsletter to stay upto date. We don’t send
                    spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 footer-copyright">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="py-6 text-center">
                  <p className="text-white">
                    Copyright © 2022 Connessioni Metropolitane srl.
                    <br /> Sede legale ed operativa: Via Valentini 14 - 59100
                    Prato (PO) <br />
                    tel. 0574 536553 fax. 0574 536554 <br />
                    P.IVA / C.F. 01712120979 - R.E.A. N. 463780 C.C.I.A.A. DI
                    PRATO <br /> Cap. sociale Euro 99.000,00 i.v.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a className="back-to-top" href="#">
        <i className="lni-chevron-up"></i>
      </a>
    </>
  );
};

export default Footer;

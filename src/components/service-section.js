import React from "react";
import serviceImage from "../assets/images/services.png";

const ServiceSection = () => {
  return (
    <section id="service" className="relative services-area py-120">
      <div className="container">
        <div className="flex">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 section-title">
              <h4 className="title">Crafted For</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn't get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full lg:w-2/3">
            <div className="row">
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <i className="lni-bolt"></i>
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Startup</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <i className="lni-bar-chart"></i>
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">SaaS Business</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <i className="lni-brush"></i>
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Agency</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <i className="lni-bulb"></i>
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">App Landing</h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-image">
        <div className="image">
          <img src={serviceImage} alt="Services" />
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;

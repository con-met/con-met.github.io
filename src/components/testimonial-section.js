import React from "react";
import author1Image from "../assets/images/author-1.jpg";
// import author2Image from "../assets/images/author-2.jpg";
import author3Image from "../assets/images/author-3.jpg";
import author4Image from "../assets/images/author-4.jpg";

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="testimonial-area py-120">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 text-center section-title">
              <h4 className="title">Testimonial</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn't get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="w-full">
            <div className="row testimonial-active">
              <div className="w-full lg:w-1/3">
                <div className="text-center single-testimonial">
                  <div className="testimonial-image">
                    <img src={author3Image} alt="Author" />
                  </div>
                  <div className="testimonial-content">
                    <p className="pb-5 mb-6 border-b border-gray-300">
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                    </p>
                    <h6 className="text-lg font-semibold text-gray-900">
                      Isabela Moreira
                    </h6>
                    <span className="text-sm text-gray-700">
                      CEO, GrayGrids
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="text-center single-testimonial">
                  <div className="testimonial-image">
                    <img src={author1Image} alt="Author" />
                  </div>
                  <div className="testimonial-content">
                    <p className="pb-5 mb-6 border-b border-gray-300">
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                    </p>
                    <h6 className="text-lg font-semibold text-gray-900">
                      Fiona
                    </h6>
                    <span className="text-sm text-gray-700">
                      Lead Designer, UIdeck
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="text-center single-testimonial">
                  <div className="testimonial-image">
                    <img src={author3Image} alt="Author" />
                  </div>
                  <div className="testimonial-content">
                    <p className="pb-5 mb-6 border-b border-gray-300">
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                    </p>
                    <h6 className="text-lg font-semibold text-gray-900">
                      Elon Musk
                    </h6>
                    <span className="text-sm text-gray-700">CEO, SpaceX</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="text-center single-testimonial">
                  <div className="testimonial-image">
                    <img src={author4Image} alt="Author" />
                  </div>
                  <div className="testimonial-content">
                    <p className="pb-5 mb-6 border-b border-gray-300">
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                      Stop wasting time and money designing and managing a
                      website that doesn't get results. Happiness guaranteed!
                    </p>
                    <h6 className="text-lg font-semibold text-gray-900">
                      Fajar Siddiq
                    </h6>
                    <span className="text-sm text-gray-700">
                      CEO, MakerFlix
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

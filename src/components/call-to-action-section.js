import React from "react";
import callToActionImage from "../assets/images/call-to-action.png";

const CallToActionSection = () => {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-blue-600 call-to-action"
    >
      <div className="absolute top-0 left-0 w-1/2 h-full call-action-image">
        <img src={callToActionImage} alt="call-to-action" />
      </div>

      <div className="container-fluid">
        <div className="justify-end row">
          <div className="w-full lg:w-1/2">
            <div className="py-32 mx-auto text-center call-action-content">
              <h2 className="mb-5 text-5xl font-semibold leading-tight text-white">
                Curious to Learn More? Stay Tuned
              </h2>
              <p className="mb-6 text-white">
                You let us know whenever you want us to update anything or think
                something can be optimized.
              </p>
              <form
                action="#"
                className="relative w-5/6 mx-auto md:w-2/3 call-newsletter"
              >
                <i className="absolute top-0 left-0 pt-3 pl-5 text-xl text-blue-600 lni-envelope"></i>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full py-3 pl-12 pr-40 bg-white rounded-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 px-6 py-2 mt-1 mr-1 font-bold text-white duration-300 bg-blue-600 rounded-full hover:bg-blue-500"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

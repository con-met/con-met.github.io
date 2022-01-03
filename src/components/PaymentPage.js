import React from "react";
import servicesImage from "../assets/images/services.png";
import PaymentElement from "@stripe/react-stripe-js";

const PaymentPage = () => {
  const importo = 1;

  return (
    <section id="service" className="relative services-area py-120">
      <div className="container">
        <div className="flex">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 section-title">
              <h4 className="title">Vuoi pagare la tua fattura?</h4>
              <p className="text">
                Utilizza la form per effettuare il pagamento.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full lg:w-2/3">
            <div className="row">
              <div className="w-full ">
                <div className="block mx-4 services-content sm:flex">
                  <div className="services-icon">
                    <i className="lni-bolt"></i>
                  </div>
                  <div className="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 className="services-title">Pagamento</h4>
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
          <img src={servicesImage} alt="Services" />
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;

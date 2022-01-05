import React from "react";
import clientLogo01Image from "../assets/images/client_logo_01.png";
import clientLogo02Image from "../assets/images/client_logo_02.png";
import clientLogo03Image from "../assets/images/client_logo_03.png";
import clientLogo04Image from "../assets/images/client_logo_04.png";

const ClientLogoSection = () => {
  return (
    <section id="client-logo" className="py-16 bg-gray-100 client-logo-area">
      <div className="container">
        <div className="items-center row">
          <div className="w-1/2 md:w-1/4">
            <div className="flex justify-center single-client">
              <img src={clientLogo01Image} alt="Logo" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4">
            <div className="flex justify-center single-client">
              <img src={clientLogo02Image} alt="Logo" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4">
            <div className="flex justify-center single-client">
              <img src={clientLogo03Image} alt="Logo" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4">
            <div className="flex justify-center single-client">
              <img src={clientLogo04Image} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientLogoSection;

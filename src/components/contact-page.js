import React from "react";
import GoogleMap from "./google-map";

const ContactPage = () => {
  console.log("API KEY", process.env.REACT_GOOGLE_MAPS_API_KEY);

  //className="bg-gray-100 pricing-area py-120
  return (
    <section id="contact-page" className="py-120">
      <div className="text-center py-120">
        <h2 className=" text-3xl pb-4">
          Grazie per aver visitato il nostro sito web.
        </h2>
        <p className="font-semibold w-3/6 mx-auto">
          Per contattarci, inviaci una mail all'indirizzo{" "}
          <a href="mailto:sales@conmet.it">
            <i class="lni lni-phone"></i>
          </a>{" "}
          sales@conmet.it oppure ci puoi chiamare al{" "}
          <a href="tel:0574536553">
            <i class="lni lni-phone"></i>
          </a>{" "}
          +39 0574536553
        </p>

        <GoogleMap></GoogleMap>
      </div>
    </section>
  );
};

export default ContactPage;

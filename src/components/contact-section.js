import React from "react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact-area py-120">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full mx-4 lg:w-1/2">
            <div className="pb-10 text-center section-title">
              <h4 className="title">Contattaci</h4>
              <p className="text">
                Non sprecare piu' il tuo tempo e i tuoi soldi in soluzioni
                obsolete che non ti danno risultati. Risultato garantito!
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center row">
          <div className="w-full lg:w-2/3">
            <div className="contact-form">
              <form
                id="contact-form"
                data-toggle="validator"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Il tuo nome"
                        data-error="Abbiamo bisogno del tuo nome."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="La tua email"
                        data-error="Questa e-mail non sembra valida."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Argomento"
                        data-error="Inserisci un argomento."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="mx-4 mb-6 single-form form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Telefono"
                        data-error="Abbiamo bisogno del tuo telefono."
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mx-4 mb-6 single-form form-group">
                      <textarea
                        rows="5"
                        placeholder="Il tuo messaggio"
                        name="message"
                        data-error="Ti preghiamo di lasciarci un messaggio."
                        required="required"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <p className="mx-4 form-message"></p>
                  <div className="w-full">
                    <div className="mx-4 mt-2 text-center single-form form-group">
                      <button
                        type="submit"
                        className="main-btn gradient-btn focus:outline-none"
                      >
                        invia il messaggio
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

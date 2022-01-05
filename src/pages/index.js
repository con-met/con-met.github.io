import React from "react";

import ServiceSection from "../components/service-section";
import PricingSection from "../components/pricing-section";
import CallToActionSection from "../components/call-to-action-section";
import TestimonialSection from "../components/testimonial-section";
import ClientLogoSection from "../components/client-logo-section";
import ContactSection from "../components/contact-section";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header hero={true}></Header>
      <main>
        <ServiceSection></ServiceSection>
        <PricingSection></PricingSection>
        <CallToActionSection></CallToActionSection>
        <TestimonialSection></TestimonialSection>
        <ClientLogoSection></ClientLogoSection>
        <ContactSection></ContactSection>
      </main>
      <Footer></Footer>
    </>
  );
}

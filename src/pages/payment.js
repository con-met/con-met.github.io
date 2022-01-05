import React from "react";
import Layout from "../components/layout";
import PaymentPage from "../components/payment";
import { Elements, loadStripe } from "@stripe/react-stripe-js";

const clientSecret = process.env.STRIPE_PUBLIC_KEY;

const options = {
  clientSecret,
};

const stripePromise = loadStripe(clientSecret);

const Payment = ({ hero = false }) => {
  return (
    <Layout>
      <Elements stripe={stripePromise} options={options}>
        <PaymentPage />
      </Elements>
    </Layout>
  );
};

export default Payment;

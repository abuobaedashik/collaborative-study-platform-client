import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./Payment/CheckoutForm";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
  const sessionData =useLoaderData()
  console.log(sessionData)
  return (
    <div className="pt-36">
      <Helmet>
        <title>Home | Payment</title>
      </Helmet>
      <div className="bg-[#ffffff] mx-12 my-6 text-white p-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm sessionData={sessionData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

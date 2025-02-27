import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure(); 
 

//   useEffect(() => {
//     // Sending request to backend to get clientSecret for payment
//     axiosSecure
//       .post("/create-payment-intent", { amount: 1000 }) 
//       .then((res) => {
//         setClientSecret(res.data.clientSecret);
//       })
//       .catch((err) => {
//         setError("Failed to create payment intent");
//       });
//   }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return; 
    }

    const card = elements.getElement(CardElement);
    if (!card) return; // Ensure CardElement exists

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card }
    });

    if (error) {
      setError(error.message);
      console.log(error.message) 
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("Payment succeeded!", paymentIntent);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="bg-blue-600 text-[#ffffff] px-4 py-1 mt-5 rounded-lg" type="submit" disabled={!stripe }>
        Pay
      </button>
      {error && <p>{error}</p>} {/* Show error if any */}
    </form>
  );
};

export default CheckoutForm;

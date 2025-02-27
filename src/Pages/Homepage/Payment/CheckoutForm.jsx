import React, { useContext, useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ sessionData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} =useContext(AuthContext)
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [TransactionId,setTransactionId]=useState("")
  const axiosSecure = useAxiosSecure();
  const navigate =useNavigate()
  const amount = sessionData?.fee * 100; 
  console.log(TransactionId)

  useEffect(() => {
    if (!amount) return;

    axiosSecure
      .post("/create-payment-intent", { amount }) 
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch(() => {
        setError("Failed to create payment intent");
      });
  }, [amount, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements || !clientSecret) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    if (error) {
      setError(error.message);
      console.log(error.message);
      setProcessing(false);
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log(" Payment succeeded!", paymentIntent);
        setTransactionId(paymentIntent.id);
        
        // You can use a callback or directly log inside a useEffect
        console.log("transactionId",paymentIntent.id);
      
        toast.success(`transactionId${paymentIntent.id}`, {
          position: "top-center",  
          autoClose: 5000, 
        });

        



        const successData = {
          Sessionid:sessionData._id,
          title:sessionData.title,
          Tutorname:sessionData.name,
          Tutoremail:sessionData.email,
          description:sessionData.description,
          startDate:sessionData.startDate,
          endDate:sessionData.endDate,
          duration:sessionData.duration,
          fee:sessionData.fee,
          banner:sessionData.banner,
          name:user?.displayName,
          email:user.email,
        }


        console.log("after payment data",successData)

       axiosSecure.post('afterPayment/sessionData',successData)
         .then(res=>{
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: " Get Session Data Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
         })

         navigate('/dashboard/ViewBookedSession')

      }      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-black font-bold text-xl mb-4">
        Pay for {sessionData?.title} - ${sessionData?.fee}
      </h2>

      <CardElement className="p-4 border rounded-md" />

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-5 rounded-lg"
        type="submit"
        disabled={!stripe || processing}
      >
        {processing ? "Processing..." : "Pay"}
      </button>

      <ToastContainer></ToastContainer>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default CheckoutForm;

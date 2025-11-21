import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Loading....</p>;
  }
  const handelPayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log("payment done", res.data);
    window.location.href =res.data.url
  };
  return (
    <div className="mx-10">
      <h1 className="text-center text-2xl font-bold">Please Payment</h1>
      <p>
        Please ${parcel.cost} {parcel.parcelName} Payment Need
      </p>
      <button onClick={handelPayment} className="btn bg-red-400  px-3">
        Pay
      </button>
    </div>
  );
};

export default Payment;

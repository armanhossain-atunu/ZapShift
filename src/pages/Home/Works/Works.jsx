import React from "react";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

const Works = () => {
  return (
    <di>
      <h1 className="text-3xl font-bold">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card  px-5 py-3 bg-base-100 shadow-xl">
          <FaCartFlatbedSuitcase />
          <h2 className="text-2xl">Booking Pick & Drop</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="card   px-5 py-3 bg-base-100 shadow-xl">
          <FaCartFlatbedSuitcase />
          <h2 className="text-2xl">Cash On Delivery</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="card   px-5 py-3 bg-base-100 shadow-xl">
          <FaCartFlatbedSuitcase />
          <h2 className="text-2xl">Delivery Hub</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="card   px-5 py-3 bg-base-100 shadow-xl">
          <FaCartFlatbedSuitcase />
          <h2 className="text-2xl">Booking SME & Corporate</h2>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </di>
  );
};

export default Works;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { BiSolidEdit } from "react-icons/bi";

import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";
const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });
  //  delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcel/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">{`My Parcels ${parcels.length}`}</h1>
      {parcels.length === 0 ? (
        <p>No Parcel Found </p>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Parcel Name</th>
                  <th>Parcel Type</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th>Delivery Status</th>
                  <th>Receiver Phone</th>
                  <th>Receiver Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel, i) => (
                  <tr key={parcel._id}>
                    <th>{i + 1}</th>
                    <td>{parcel.parcelName}</td>
                    <td>{parcel.parcelType}</td>
                    <td>{parcel.cost}</td>
                    <td>
                      {" "}
                      {parcel.paymentStatus === "paid" ? (
                        <p className="bg-green-400 ">Paid</p>
                      ) : (
                        <Link to={`/dashboard/payment/${parcel._id}`}>
                          <p className="bg-red-400 w-fit px-3">Pay</p>
                        </Link>
                      )}
                    </td>
                    <td>{parcel.receiverPhone}</td>
                    <td>{parcel.receiverEmail}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(parcel._id);
                        }}
                        className="btn btn-square"
                      >
                        <FcFullTrash className="text-2xl" />
                      </button>
                      <button className="btn btn-square mx-2">
                        <BiSolidEdit className="text-2xl " />
                      </button>
                      <button className="btn btn-square">
                        <FaMagnifyingGlass className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyParcels;

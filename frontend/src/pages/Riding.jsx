import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
            <i className="ri-home-line text-2xl font-medium"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-20"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Driver</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP 04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex flex-col jutify-between items-center gap-2">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-2-fill text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">562/11-A</h3>
                <p className="text-grey-600 text-sm -mt-1">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-currency-line text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">₹193.20</h3>
                <p className="text-grey-600 text-sm -mt-1">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-500 p-3 text-white font-semibold rounded-xl">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;

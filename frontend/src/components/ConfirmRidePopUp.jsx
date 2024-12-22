import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "./FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ConfirmRidePopUp = (props) => {

    const [otp,setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submit");
  };

  return (
    <div>
      <h5
        className="p-3 w-full text-center absolute top-0 text-2xl"
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2 mt-3">
        Confirm this ride to start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-200 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
            alt=""
          />
          <h2 className="text-lg font-medium">Driver Guy</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex flex-col jutify-between items-center gap-2 mt-2">
        <div className="w-full mt-3">
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
            <i className="ri-map-pin-user-fill text-lg"></i>
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
        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3"
              value={otp}
              onChange={(e) =>{
                setOtp(e.target.value);
              }}
              required
              placeholder="Enter OTP"
            />
            <Link
              to="/captain-riding"
              className="w-full text-lg mt-5 flex justify-center bg-green-500 p-3 text-white font-semibold rounded-xl"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full text-lg mt-5 bg-red-500 p-3 text-white font-semibold rounded-xl"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default ConfirmRidePopUp;

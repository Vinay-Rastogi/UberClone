import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-3 w-full text-center absolute top-0 text-2xl"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-2 mt-2">Confirm your ride</h2>
      <div className="flex flex-col jutify-between items-center gap-2">
        <img
          className="h-22 -ms-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt=""
        />
        <div className="w-full -mt-10">
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
        <button onClick={()=>{
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
        }}
        className="w-full mt-5 bg-green-500 p-3 text-white font-semibold rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;

import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-3 w-full text-center absolute top-0 text-2xl"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a ride</h2>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }}
      className="w-full mb-2 bg-grey-100 border-2 active:border-black rounded-xl p-3 flex items-center justify-between">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className=" text-xs text-grey-500">Affordable , compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }}
      className="w-full mb-2 border-2 active:border-black rounded-xl p-3 flex items-center justify-between">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className=" text-xs text-grey-500">
            Affordable , motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹65.80</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }}
      className="w-full mb-2 border-2 active:border-black rounded-xl p-3 flex items-center justify-between">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className=" text-xs text-grey-500">Affordable , Auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;

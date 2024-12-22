import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-3 w-full text-center absolute top-0 text-2xl"
        onClick={() => {
          props.setRidePopupPanel(false);
          console.log("buttonClicked");
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2 mt-3">New Ride Available</h3>
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

        <div className="mt-5 flex w-full items-center justify-evenly">
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className="bg-green-500 p-3 px-10 text-white font-semibold rounded-xl"
          >
            Accept
          </button>
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="bg-gray-300 p-3 px-10 text-gray-700 font-semibold rounded-xl"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;

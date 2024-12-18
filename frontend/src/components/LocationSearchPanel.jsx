import React from "react";

const LocationSearchPanel = (props) => {

  const locations = [
    "24B, Near Kapoor's Cafe , Shreyians Coding School , Bhopal",
    "21C, Near Malhotra's Cafe , Shreyians Coding School , Bhopal",
    "25B, Near Rastogi's farm , Shreyians Coding School , Bhopal",
    "37A, Near Gupta Residency , Shreyians Coding School , Bhopal",
  ];
  return (
    <div>
      {/* this is just a sample data*/}

      {locations.map((elem,idx) => {
        return (
          <div key={idx} onClick={() => {
             props.setVehiclePanelOpen(true)
             props.setPanelOpen(false)
          }}
          className="flex items-center my-2 justify-start gap-4 border-2 border-gray-200 active:border-black p-3 rounded-xl ">
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;

const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {

    if (!address) {
        throw new Error("Address is required for geocoding.");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const res = await axios.get(url);

        if (res.data.status === 'OK') {
            const location = res.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error("Unable to fetch coordinates. Check the address and API key.");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

module.exports.getDistanceTime = async(origin,destination) => {

     if(!origin || !destination){
        throw new Error("Origin and Destination is reuired"); 
     }

     const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

     try {

        const res = await axios.get(url);

        if(res.data.status === 'OK'){
                if(res.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                    throw new Error("No routes Found");
                }
            
            return res.data.rows[0].elements[0];

        } else {
            throw new Error("Unable to fetch distance and time");
        }

        
     } catch (err) {

        console.error(err)
        throw err;
     }
}

module.exports.getAutoCompleteSuggestions = async(input) => {

      if(!input){
        throw new Error("Query is required");
      }

      const apiKey = process.env.GOOGLE_MAPS_API;
      const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

      try {

        const res = await axios.get(url);

        if(res.data.status === 'OK'){
            return res.data.predictions;
        } else{
            throw new Error("Unable to fetch suggestions");
        }
        
      } catch (err) {

         console.error(err);
         
        throw err;
      }
}
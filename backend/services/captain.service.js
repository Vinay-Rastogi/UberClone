const captainMode = require("../models/captain.model");


module.exports.createCaptain = async({firstname,lastname,email,password,color,plate,capacity,vehicleType}) => {

      if(!firstname || !email || !password || !color || !capacity || !vehicleType){
        throw new Error("All fields are required");
      }

      const captain = captainMode.create({

         fullname : {
            firstname,
            lastname
         } ,
         email,
         password,
         vehicle : {
            color,
            plate,
            capacity,
            vehicleType
         }
      })

   return captain;   
}
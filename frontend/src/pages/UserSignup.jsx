import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {

    const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [firstName,setFirstName] = useState("");
        const [lastName,setLastName] = useState("");
        const [userData,setUserData] = useState({});

    const submitHandler = (e) => {

        

        e.preventDefault();

        setUserData({
            fullName:{
                firstName : firstName,
                lastName : lastName
            },
            email : email,
            password : password
        })


        //logic

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex mb-5">
            <input
              className="bg-[#eeeeee]  me-4 rounded px-4 py-2 border w-5/12 text-lg placeholder:text-base"
              required
              type="text"
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-7/12 text-lg placeholder:text-base"
              required
              type="text"
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Password"
          />
          <button className="bg-[#111] mt-5 mb-3 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-sm">
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{" "}
          <Link className="text-blue-600" to="/login">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

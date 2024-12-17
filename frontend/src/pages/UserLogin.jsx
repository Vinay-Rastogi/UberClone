import React, { useContext, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const {user,setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
       email:email,
       password : password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);

    if(response.status === 200){

       const data = response.data;
       setUser(data.user);
       localStorage.setItem('token',data.token);
       navigate('/home');

    }
    //logic

    setEmail("");
    setPassword("");
  };

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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button className="bg-[#111] mt-7 mb-3 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here ? {" "}
          <Link className="text-blue-600" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center mb-5 mt-5 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

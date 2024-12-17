import {React,useState , useContext} from 'react'
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const {captain,setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);

    if(res.status == 200){
        const data = res.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        navigate('/captain-home');
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
          src="https://pngimg.com/d/uber_PNG24.png"
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
          Join a fleet ? {" "}
          <Link className="text-blue-600" to="/captain-signup">
             Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center mb-5 mt-5 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserDataContext} from "../context/UserContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserDataContext);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {

    if (!token) {
      navigate("/login");
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
       headers : {

            Authorization : `Bearer ${token}`
       }
    }).then((res) => {
        
        if(res.status == 200){
            setUser(res.user);
            setIsLoading(false);
        }
    }).catch((err) => {
        console.log(err);
        localStorage.removeItem('token');
        navigate('/login')
    })

  }, [token]); 

  if(isLoading){
    return <div>
      Loading...
    </div>
  }

  return <div>{children}</div>;
};

export default UserProtectedWrapper;
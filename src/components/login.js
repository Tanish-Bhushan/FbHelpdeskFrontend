import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toSignUpPage = () => {
    navigate("/signup");
  };

  const submitDetails = async (e) => {
    console.log("here");
    e.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(response.data.message);
      if (response.data.message === "300") {
        alert("User not found");
      } else if (response.data.message === "400") {
        alert("Wrong password");
      } else {
        alert(response.data.message);
        navigate("/clientDesk");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#1E4D91] h-[100vh] overflow-hidden font-[Poppins]">
      <div className="mt-[10%] ml-auto mr-auto w-[30%] items-center text-center bg-white rounded-lg p-4">
        <h1 className="text-2xl mt-2">LogIn to your account</h1>
        <form action="" className="w-[80%] ml-auto mr-auto flex flex-col">
          <label className="mt-4 text-lg mr-auto">Email</label>
          <input
            type="text"
            className="mt-1 w-full h-10 text-lg border-2"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="mt-4 text-lg mr-auto">Password</label>
          <input
            type="password"
            className="mt-1 w-full h-10 text-lg border-2"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="flex left-0 mt-4 mb-5 gap-2">
            <input type="checkbox" />
            <h1>Remember Me</h1>
          </div>
          <button
            className="bg-blue-500 mt-4 rounded-md text-white w-full p-2 mb-2"
            onClick={submitDetails}
          >
            Login
          </button>
        </form>
        <h1 className="m-2">
          New to our app?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={toSignUpPage}>
            SignUp
          </span>
        </h1>
        <div className="logo-img w-32 h-10 bg-cover ml-auto rounded-lg"></div>
      </div>
    </div>
  );
};

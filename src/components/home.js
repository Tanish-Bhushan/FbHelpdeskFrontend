import React from "react";
import {useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const toLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="bg-[#1E4D91] h-[100vh] overflow-hidden font-[Poppins]">
      <div className="mt-[10%] ml-auto mr-auto w-[40%] items-center text-center bg-white rounded-lg p-4">
        <h1 className="text-2xl">Facebook Message Helpdesk</h1>
        <h1 className="mt-5">Start by creating an account</h1>
        <button
          className="bg-blue-500 m-5 p-3 rounded-md text-white px-6"
          onClick={toLoginPage}
        >
          Start &#8594;
        </button>
        <div className="logo-img w-32 h-10 bg-cover ml-auto rounded-lg"></div>
      </div>
    </div>
  );
};

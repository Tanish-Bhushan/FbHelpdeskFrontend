import React from "react";
import { IoChatbox } from "react-icons/io5";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Inbox = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  };
  return (
    <div className="w-[5%]  h-[100vh] overflow-hidden border-r-2 border-black/20 flex-col text-5xl ">
      <IoChatbox
        className="mt-8 ml-auto mr-auto hover:text-blue-500 cursor-pointer"
        onClick={() => {
          navigate("/clientDesk");
        }}
      />

      <RiInboxArchiveFill
        className="mt-5 ml-auto mr-auto hover:text-blue-500 cursor-pointer"
        onClick={() => {
          navigate("/inbox");
        }}
      />
      <IoIosContacts
        className="mt-5 ml-auto mr-auto hover:text-blue-500 cursor-pointer"
        onClick={() => {
          navigate("/contacts");
        }}
      />
      <DiGoogleAnalytics
        className="mt-5 ml-auto mr-auto text-6xl hover:text-blue-500 cursor-pointer"
        onClick={() => {
          navigate("/analytics");
        }}
      />
      <AiOutlineLogout
        className="mt-10 ml-auto mr-auto text-red-500 cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};

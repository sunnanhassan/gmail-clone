import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();

  const email = {
    id: 1,
    to: "johndoe@example.com",
    message:
      "This is a sample email message for preview purposes. It demonstrates how the UI will look without needing Redux or live data.",
    createdAt: {
      seconds: 1721409600, // Equivalent to a date like July 19, 2024
    },
  };

  const openMail = () => {
    navigate("/mail/1");
  };

  return (
    <div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-semibold">{email.to}</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
          {email.message.length > 130
            ? `${email.message.substring(0, 130)}...`
            : email.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <p>{new Date(email.createdAt.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
};

export default Message;

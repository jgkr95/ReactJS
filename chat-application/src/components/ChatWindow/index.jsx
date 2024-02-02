import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatHeader from "./chatHeader";
import { useChat } from "../../context/ChatContext";

const ChatWindow = () => {
  // const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const {
    messages,
    setMessages,
    selectedUser,
    // setSelectedUser,
    chatUsers,
  } = useChat();

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObj = {
        user: "You", // For simplicity, assuming the user is always 'You'
        timestamp: new Date().toLocaleTimeString(),
        content: newMessage,
        isCurrUser: true,
      };

      const replyMessageObj = {
        user: selectedUser, // For simplicity, assuming the user is always 'You'
        timestamp: new Date().toLocaleTimeString(),
        content: "Hey! This is automated response...",
        isCurrUser: false,
      };

      setMessages((prev) => [...prev, newMessageObj]);
      setTimeout(() => {
        setMessages((prev) => [...prev, replyMessageObj]);
      }, 1000);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="h-screen relative flex flex-col justify-between">
      {/* <SideHeader /> */}
      <ChatHeader />
      <div className="overflow-y-auto h-[90%] fixed bottom-[60] w-[65%] pl-10">
        <div
          className="overflow-y-auto  flex flex-col justify-end"
          style={{ minHeight: `calc(100vh - 150px)` }}
        >
          {messages.map((message) => {
            return (
              <div
                className={`bg-[#599389] px-3 rounded-sm m-2 w-auto overflow flex flex-col text-black py-2 ${
                  !message?.isCurrUser
                    ? "items-start bg-[#fff]"
                    : "text-right bg-[#ddd]"
                }`}
              >
                <p className="text-lg">{message.content}</p>
                <p className="text-sm">{message.timestamp}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-4 p-4 bg-[#1f2c33] h-[60] fixed bottom-0 w-[62%]">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            class="rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500 w-[100%] bg-[#2a3942]"
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

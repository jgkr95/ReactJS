import React, { createContext, useContext, useState } from "react";

// Create a context
const ChatContext = createContext();

// Create a provider component that will wrap your app
export const ChatProvider = ({ children }) => {
  const [showNewchat, setShowNewchat] = useState(false);
  const [newChatUser, setNewChatUser] = useState("");
  const [chatUsers, setChatUsers] = useState({});
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  // Create an object to hold the state and functions
  const chatContextValue = {
    showNewchat,
    setShowNewchat,
    newChatUser,
    setNewChatUser,
    chatUsers,
    setChatUsers,
    messages,
    setMessages,
    selectedUser,
    setSelectedUser,
  };

  return (
    <ChatContext.Provider value={chatContextValue}>
      {children}
    </ChatContext.Provider>
  );
};

// Create a hook to use the context
export const useChat = () => {
  return useContext(ChatContext);
};

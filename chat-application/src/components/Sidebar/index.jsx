import React, { useState } from "react";
import Header from "./header";
import { useChat } from "../../context/ChatContext";
import { useEffect } from "react";
import { generateUniqueId } from "../../utils/utils";
const Sidebar = () => {
  const {
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
  } = useChat();
  //

  const handldeSelect = (uid) => {
    const chatUsersCopy = { ...chatUsers };
    chatUsersCopy[selectedUser]["messages"] = messages;

    setChatUsers(chatUsersCopy);
    setMessages([]);
    setSelectedUser(uid);
  };

  const handleAddNewUser = (e) => {
    if (e.key === "Enter") {
      if (selectedUser) {
        const chatUsersCopy = { ...chatUsers };
        chatUsersCopy[selectedUser]["messages"] = messages;

        setChatUsers(chatUsersCopy);
      }
      // sendMessage();
      const uid = generateUniqueId();
      const newChatUserObj = {
        id: uid,
        name: newChatUser,
        profileUrl: `https://i.pravatar.cc/150?u=${newChatUser}&set=male`,
        messages: [],
      };
      const chatUsersCopy = { ...chatUsers };
      chatUsersCopy[uid] = newChatUserObj;
      // handldeSelect(uid);

      setChatUsers(chatUsersCopy);
      setSelectedUser(uid);
      setNewChatUser("");
      // setShowNewchat(false);
    }
  };

  // useEffect(() => {
  //   setMessages(chatUsers?.[selectedUser]?.[messages] || []);
  // }, [selectedUser]);

  useEffect(() => {
    setMessages(chatUsers?.[selectedUser]?.messages || []);
  }, [selectedUser]);

  return (
    <div className="h-screen font-bold border-r border-solid border-gray-500">
      <div className="h-20">
        <Header />
      </div>
      <div className="flex flex-col gap-2">
        <button className=" items-center" onClick={() => setShowNewchat(true)}>
          New chat +
        </button>
        {showNewchat && (
          <div className="flex justify-center mb-4">
            <input
              type="text"
              className="rounded-md w-[90%] h-10 px-4 bg-[#1f2c33]"
              value={newChatUser}
              autoFocus
              onChange={(e) => {
                setNewChatUser(e.target.value);
              }}
              onKeyPress={handleAddNewUser}
            />
          </div>
        )}
        <div
          className="overflow-auto"
          style={{ height: `calc(100vh - 175px)` }}
        >
          {Object.keys(chatUsers)?.map((uid) => {
            return (
              <div
                className={`flex justify-evenly py-2 border-b cursor-pointer hover:bg-[#202c33] ${
                  selectedUser == uid ? "bg-[#2a3942]" : ""
                }`}
                onClick={() => {
                  if (selectedUser != uid) handldeSelect(uid);
                }}
                key={uid}
              >
                <div className="w-[10%]">
                  <img
                    className="w-10 h-10 rounded-[50%]"
                    src={chatUsers?.[uid]?.profileUrl}
                    // src={`https://i.pravatar.cc/150?u=${user}`}
                  />
                </div>
                <div className="w-[80%] text-ellipsis truncate">
                  {chatUsers?.[uid]?.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

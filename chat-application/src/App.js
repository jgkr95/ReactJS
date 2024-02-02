import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./context/ChatContext"; // Import the context

function App() {
  return (
    <ChatProvider>
      <div className="flex bg-[#111b21] my-0 mx-auto text-white">
        <div className="w-1/3">
          <Sidebar />
        </div>
        <div className="w-2/3">
          <ChatWindow />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;

import React, { useState } from "react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full w-14 h-14 shadow-xl flex items-center justify-center text-xl hover:bg-green-700 transition z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-72 bg-white rounded-xl shadow-xl overflow-hidden z-50">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-3 font-semibold">
            Support Chat
          </div>

          {/* Messages Area */}
          <div className="h-64 p-3 overflow-y-auto text-sm text-gray-700">
            <p className="bg-gray-100 p-2 rounded-lg w-fit mb-2">
              Hi 👋 How can we help you today?
            </p>
          </div>

          {/* Input */}
          <div className="border-t p-2 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 outline-none text-sm px-2"
            />
            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

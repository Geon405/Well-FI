import React, { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "How can I assist you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Simulate AI Response
    setTimeout(() => {
      const aiResponse = { text: "I'm here to help!", sender: "ai" };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-start">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col overflow-hidden border mt-4">
          {/* Header */}
          <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
            <span className="font-bold">AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto h-60">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-3/4 ${
                  msg.sender === "ai" ? "bg-gray-200 text-gray-800 self-start" : "bg-blue-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Leave a comment..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";

const ChatUI = ({ setShowChat }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_OPENAI_KEY; // Ensure you have your API key set in .env file

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: input }]
            }
          ]
        }
      );

      const reply =
        res.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI.";
      const formattedReply = reply.replace(/\*/g, "");
      setMessages([...newMessages, { role: "assistant", content: formattedReply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Something went wrong." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 text-black right-10 w-[350px] h-[70vh] bg-white border border-gray-300 shadow-lg rounded-xl flex flex-col z-50">
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center rounded-t-xl">
        <h2 className="font-bold text-lg">AI Chat</h2>
        <button onClick={() => setShowChat(false)} className="text-white text-lg">
          ✖
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md max-w-[80%] ${
              msg.role === "user"
                ? "bg-blue-400 text-right self-end ml-auto"
                : "bg-gray-200 text-left self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <p className="text-gray-400">AI is typing...</p>}
      </div>

      <div className="flex items-center p-2 border-t border-gray-200">
        <input
          className="flex-1 p-2 border rounded-md mr-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;

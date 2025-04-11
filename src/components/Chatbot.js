import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // (optional, for styling)

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to chat
    const newChat = [...chat, { sender: 'user', text: message }];

    try {
      const response = await axios.post('http://localhost:8080/api/chat', {
        message: message
      });

      // Add bot response to chat
      setChat([...newChat, { sender: 'bot', text: response.data.response }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setChat([...newChat, { sender: 'bot', text: "Sorry, there was an error." }]);
    }

    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <h2>💬 Your Financial Advisor</h2>
      <div className="chatbox">
        {chat.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <strong>{msg.sender === 'user' ? 'You' : 'Advisor'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me anything about saving, investing..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
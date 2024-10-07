// src/components/Mailbox.js
import React, { useState } from 'react';
import '../styles/Mailbox.css';

const Mailbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', subject: '안녕하세요', content: '반갑습니다!' },
    { id: 2, sender: 'Bob', subject: '업데이트', content: '프로젝트 업데이트 완료되었습니다.' },
  ]);
  const [newMessage, setNewMessage] = useState({ sender: '', subject: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMessage((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.sender && newMessage.subject && newMessage.content) {
      setMessages([...messages, { id: messages.length + 1, ...newMessage }]);
      setNewMessage({ sender: '', subject: '', content: '' });
    }
  };

  return (
    <div className="mailbox-container">
      <h3>편지함</h3>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.sender}</strong>: {msg.subject}
            <p>{msg.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="sender"
          placeholder="보낸 사람"
          value={newMessage.sender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="제목"
          value={newMessage.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="내용"
          value={newMessage.content}
          onChange={handleChange}
          required
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default Mailbox;
// src/components/Board.js
import React, { useState } from 'react';
import '../styles/Board.css';

const Board = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 게시글', content: '내용 1' },
    { id: 2, title: '두 번째 게시글', content: '내용 2' },
  ]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="board-container">
      <h3>게시판</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={newPost.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="내용"
          value={newPost.content}
          onChange={handleChange}
          required
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default Board;
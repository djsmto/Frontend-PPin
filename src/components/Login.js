import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password); // 부모 컴포넌트의 로그인 핸들러 호출
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="사용자 이름" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="비밀번호" 
        required 
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
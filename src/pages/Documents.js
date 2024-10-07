import React, { useState } from 'react';
import NavBar from '../components/NavBar'; // 네비바 컴포넌트 가져오기
import '../styles/Documents.css'; // Documents에 대한 사용자 정의 스타일

const Documents = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [department, setDepartment] = useState([]);
  const [position, setPosition] = useState([]);
  const [file, setFile] = useState(null); // 파일 상태 추가

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // 첫 번째 파일만 저장
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('department', department);
    formData.append('position', position);
    formData.append('file', file); // 파일을 FormData에 추가

    // 서버로 파일과 다른 데이터를 전송하는 API 호출
    fetch('/api/documents', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('문서 작성 완료:', data);
      })
      .catch((error) => {
        console.error('문서 작성 중 오류 발생:', error);
      });
  };

  return (
    <div className="documents-page">
      <NavBar />
      <div className="documents-content">
        <h1>문서 작성</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>제목:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label>내용:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div>
            <label>부서:</label>
            <select multiple onChange={(e) => setDepartment(Array.from(e.target.selectedOptions, option => option.value))}>
              <option value="연구소">연구소</option>
              <option value="경영지원">경영지원</option>
              <option value="인사">인사</option>
              <option value="영업">영업</option>
              <option value="품질">품질</option>
              <option value="자재">자재</option>
              <option value="생산">생산</option>
            </select>
          </div>
          <div>
            <label>직급:</label>
            <select multiple onChange={(e) => setPosition(Array.from(e.target.selectedOptions, option => option.value))}>
              <option value="부장">부장</option>
              <option value="차장">차장</option>
              <option value="팀장">팀장</option>
              <option value="대리">대리</option>
              <option value="사원">사원</option>
            </select>
          </div>
          <div>
            <label>문서 첨부:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button className="documents-submit-button" type="submit">저장</button>
        </form>
      </div>
    </div>
  );
};

export default Documents;
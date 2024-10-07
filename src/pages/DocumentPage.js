import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import NavBar from '../components/NavBar'; // 네비바 컴포넌트 가져오기
import '../styles/DocumentPage.css'; // DocumentPage에 대한 사용자 정의 스타일

const DocumentPage = () => {
  const navigate = useNavigate(); // navigate 함수 초기화

  // 예시 문서 데이터 (이 부분은 나중에 DB에서 가져와야 함)
  const [documents, setDocuments] = useState([
    { id: 1, title: '문서 1', author: '홍길동', createdAt: new Date() },
    { id: 2, title: '문서 2', author: '김철수', createdAt: new Date() },
    // ... 더 많은 문서 추가 가능
  ]);

  // 문서 작성 페이지로 이동하는 함수
  const handleCreateDocument = () => {
    navigate('/documents/create'); // 문서 작성 페이지로 이동
  };

  return (
    <div className="document-page">
      <NavBar />
      <div className="document-content">
        <h1>문서함</h1>
        <button className="create-document-button" onClick={handleCreateDocument}>
          문서 작성
        </button>
        <table className="document-table">
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {documents.slice(0, 20).map((doc) => (
              <tr key={doc.id}>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.createdAt.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentPage;
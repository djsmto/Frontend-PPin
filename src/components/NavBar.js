import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaHome, FaCog, FaInfoCircle, FaSignOutAlt, FaBars, FaFileAlt, FaDollarSign } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();  // useNavigate 훅을 NavBar 내부에서 호출

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
    const overlay = document.querySelector('.overlay');
    if (overlay) {
      overlay.classList.toggle('active', !isCollapsed);
    }
  };

  const handleLogout = () => {
    // 로그아웃 로직 추가 (예: 세션 삭제, 토큰 제거)
    console.log('Logging out...');
    
    // 로그아웃 후 로그인 페이지로 리디렉션
    navigate('/');
  };

  return (
    <>
      <div className={`overlay ${!isCollapsed ? 'active' : ''}`} onClick={toggleNavbar}></div>
      <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
        <ul className="nav-items">
          <li className="nav-item">
            <FaBars className="nav-icon" onClick={toggleNavbar} />
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <FaHome className="nav-icon" />
              <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>홈</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calendar" className="nav-link">
              <FaCalendarAlt className="nav-icon" />
              <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>일정</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/documentPage" className="nav-link">
            <FaFileAlt className="nav-icon" /> {/* 적당한 아이콘 추가 */}
            <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>문서함</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mypay" className="nav-link">
            <FaDollarSign className="nav-icon" />
            <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>급여 & 근태</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/attendance" className="nav-link">
              <FaUser className="nav-icon" />
              <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>근태</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <FaCog className="nav-icon" />
              <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>개인설정</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/organization" className="nav-link">
            {/* organizational chart = 조직도 */}
              <FaInfoCircle className="nav-icon" />
              <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>조직도</span>
            </Link>
          </li>
          <li className="nav-item">
            <button className="logout-button" onClick={handleLogout}>
              <FaSignOutAlt className="nav-icon" />
              <span className={`nav-name ${isCollapsed ? 'hidden' : ''}`}>로그아웃</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
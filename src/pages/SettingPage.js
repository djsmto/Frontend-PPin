import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';
import '../styles/SettingPage.css'; // CSS 파일을 포함

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="settings-page">
      <NavBar />
      <h2>설정</h2>
      
      {/* 사용자 계정 관리 섹션 */}
      <section>
        <h3>사용자 계정 관리</h3>
        <Profile />  {/* 프로필 관리 컴포넌트 */}
      </section>

      {/* 알림 설정 섹션 */}
      <section>
        <h3>알림 설정</h3>
        {/* 알림 설정 컴포넌트 추가 */}
      </section>

      {/* 테마 및 레이아웃 섹션 */}
      <section>
        <h3>테마 및 레이아웃</h3>
        <div className="theme-toggle">
          <span>라이트 모드</span>
          <div className={`switch ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
            <div className="slider" />
          </div>
          <span>다크 모드</span>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
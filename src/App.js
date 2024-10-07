import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import DocumentPage from './pages/DocumentPage'; // 문서함 페이지
import Documents from './pages/Documents'; // 문서 작성 페이지
import CalendarPage from './pages/CalendarPage';
import MySalaryPage from './pages/MySalaryPage';
import OrganizationChart from './pages/OrganizationChart';
import SettingsPage from './pages/SettingPage';
import AttendancePage from './pages/AttendancePage';

import './App.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documentpage" element={<DocumentPage />} /> {/* 문서함 페이지 */}
        <Route path="/documents/create" element={<Documents />} /> {/* 문서 작성 페이지 */}
        <Route path="/mypay" element={<MySalaryPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/organization" element={<OrganizationChart />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        {/* 필요에 따라 다른 라우트를 추가하세요 */}
      </Routes>
    </Router>
  );
};

export default App;
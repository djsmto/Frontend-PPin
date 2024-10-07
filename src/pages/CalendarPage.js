import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // react-calendar의 기본 스타일 적용
import '../styles/CalendarPage.css'; // CalendarPage에 대한 사용자 정의 스타일
import NavBar from '../components/NavBar'; // NavBar 컴포넌트 추가

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-page">
      <NavBar /> {/* 네비게이션 바 추가 */}
      <h1>일정 관리</h1>
      <div className="calendar-container">
        <Calendar onChange={onDateChange} value={date} />
      </div>
      <div className="selected-date">
        선택된 날짜: {date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default CalendarPage;
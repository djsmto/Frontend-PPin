// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css'; // CSS 파일 임포트
import Modal from 'react-modal';
import axios from 'axios';

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: new Date(),
  });

  // 모달 설정
  Modal.setAppElement('#root');

  // 일정 데이터 가져오기
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('일정을 가져오는 데 실패했습니다:', error);
    }
  };

  // 일정 추가
  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/events', newEvent);
      setEvents([...events, response.data]);
      setModalIsOpen(false);
      setNewEvent({ title: '', description: '', date: new Date() });
    } catch (error) {
      console.error('일정을 추가하는 데 실패했습니다:', error);
    }
  };

  // 일정 선택 시 상세 보기 (옵션)
  const handleEventClick = (event) => {
    alert(`제목: ${event.title}\n내용: ${event.description}`);
  };

  // 특정 날짜의 일정 필터링
  const getEventsForDate = (date) => {
    return events.filter(
      (event) =>
        new Date(event.date).toDateString() === date.toDateString()
    );
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setCurrentDate}
        value={currentDate}
        tileContent={({ date, view }) => {
          const dayEvents = getEventsForDate(date);
          return (
            <div>
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-item"
                  onClick={() => handleEventClick(event)}
                >
                  {event.title}
                </div>
              ))}
            </div>
          );
        }}
      />
      <button className="add-event-button" onClick={() => setModalIsOpen(true)}>
        일정 추가
      </button>

      <div className="event-list">
        <h3>{currentDate.toDateString()}의 일정</h3>
        {getEventsForDate(currentDate).map((event) => (
          <div
            key={event.id}
            className="event-item"
            onClick={() => handleEventClick(event)}
          >
            {event.title}
          </div>
        ))}
      </div>

      {/* 일정 추가 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="일정 추가"
      >
        <div className="modal-content">
          <h2 className="modal-header">일정 추가</h2>
          <form className="modal-form" onSubmit={handleAddEvent}>
            <label>제목:</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              required
            />

            <label>내용:</label>
            <textarea
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              required
            />

            <label>날짜:</label>
            <input
              type="date"
              value={newEvent.date.toISOString().split('T')[0]}
              onChange={(e) => setNewEvent({ ...newEvent, date: new Date(e.target.value) })}
              required
            />

            <button type="submit">추가</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
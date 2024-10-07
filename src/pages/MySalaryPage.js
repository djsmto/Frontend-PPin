import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'; // 네비게이션 바 컴포넌트
import '../styles/MySalaryPage.css'; // 스타일 추가

const MySalaryPage = () => {
  const [salary, setSalary] = useState(0);
  const [workTime, setWorkTime] = useState(0);

  useEffect(() => {
    // 백엔드에서 급여 및 근태 정보를 가져오는 로직 추가
    // 예시:
    // fetch('/api/salary')
    //   .then(response => response.json())
    //   .then(data => {
    //     setSalary(data.salary);
    //     setWorkTime(data.workTime);
    //   });
  }, []);

  return (
    <div className="my-salary-page">
      <NavBar />
      <div className="salary-content">
        <h1>급여 & 근태 정보</h1>
        <p>총 급여: {salary}원</p>
        <p>근무 시간: {workTime}시간</p>
      </div>
    </div>
  );
};

export default MySalaryPage;
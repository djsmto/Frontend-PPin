// src/pages/OrganizationChart.js
import React from 'react';
import '../styles/OrganizationChart.css';
import NavBar from '../components/NavBar'; // 네비게이션 바 컴포넌트

const mockData = [
  {
    id: 100,
    name: '김철수',
    position: 'CEO',
    department: '경영',
    reportsTo: null,
  },
  {
    id: 201,
    name: '이영희',
    position: 'CTO',
    department: '기술',
    reportsTo: 100,
  },
  {
    id: 301,
    name: '박민수',
    position: 'CFO',
    department: '재무',
    reportsTo: 100,
  },
  {
    id: 202,
    name: '최지훈',
    position: '팀장',
    department: '기술',
    reportsTo: 201,
  },
];

const OrganizationChart = () => {
  const renderChart = (employee) => {
    const subordinates = mockData.filter((person) => person.reportsTo === employee.id);

    return (
      <div className="employee-node" key={employee.id}>
        <NavBar />
        <div className="employee-info">
          <p>{employee.name}</p>
          <p>{employee.position}</p>
          <p>{employee.department}</p>
          <p>내선번호: {employee.id}</p>
        </div>
        {subordinates.length > 0 && (
          <div className="subordinates">
            {subordinates.map((subordinate) => renderChart(subordinate))}
          </div>
        )}
      </div>
    );
  };

  // 최상위 직원(CEO) 찾기
  const topLevelEmployee = mockData.find((person) => person.reportsTo === null);

  return (
    <div className="organization-chart">
      {topLevelEmployee ? renderChart(topLevelEmployee) : <p>No data available</p>}
    </div>
  );
};

export default OrganizationChart;
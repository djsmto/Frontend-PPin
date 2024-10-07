// src/components/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/WeatherWidget.css'; // 스타일링을 위해 CSS 파일을 생성할 예정

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // OpenWeatherMap API 키 (임시로 여기 입력하세요)
  const API_KEY = 'd93597ece441ee67a28754ea98bfa0ca'; // 실제 API 키로 교체하세요
  const CITY = 'Busan';
  const COUNTRY_CODE = 'KR';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // OpenWeatherMap API 호출
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=metric&lang=kr`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('날씨 데이터를 가져오는 데 실패했습니다:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY]);

  if (loading) {
    return <div className="weather-widget">로딩 중...</div>;
  }

  if (error || !weatherData) {
    return <div className="weather-widget">날씨 정보를 불러올 수 없습니다.</div>;
  }

  const { main, weather, name } = weatherData;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-widget">
      <h3>부산 날씨</h3>
      <div className="weather-info">
        <img src={icon} alt={description} />
        <div>
          <p>{temperature}°C</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
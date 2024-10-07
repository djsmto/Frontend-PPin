// src/components/ExchangeRateWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ExchangeRateWidget.css';

const ExchangeRateWidget = () => {
  const [exchangeData, setExchangeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const [amount, setAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState('USD'); // 기본 값 설정
  const [convertedAmount, setConvertedAmount] = useState(0);

  const API_KEY = '206ac03032ccbabc112930a6'; // 실제 API 키로 교체하세요
  const BASE_CURRENCY = 'KRW';
  const TARGET_CURRENCIES = ['USD', 'EUR', 'JPY', 'CNY'];

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`
        );
        setExchangeData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('환율 데이터를 가져오는 데 실패했습니다:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [API_KEY]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const calculateExchange = () => {
    const exchangeRate = exchangeData.conversion_rates[targetCurrency];
    setConvertedAmount(amount * exchangeRate);
  };

  if (loading) {
    return <div className="exchange-widget">로딩 중...</div>;
  }

  if (error || !exchangeData || exchangeData.result !== 'success') {
    return <div className="exchange-widget">환율 정보를 불러올 수 없습니다.</div>;
  }

  const { conversion_rates, time_last_update_utc } = exchangeData;

  return (
    <div className="exchange-widget">
      <h3>환율 정보 (기준: {BASE_CURRENCY})</h3>
      <p>마지막 업데이트: {new Date(time_last_update_utc).toLocaleString()}</p>
      <ul>
        {TARGET_CURRENCIES.map(currency => (
          <li key={currency}>
            {currency}: {conversion_rates[currency]} {BASE_CURRENCY}
          </li>
        ))}
      </ul>
      <div>
        <h4>환율 계산기</h4>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="금액을 입력하세요"
        />
        <select value={targetCurrency} onChange={handleCurrencyChange}>
          {TARGET_CURRENCIES.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={calculateExchange}>환산하기</button>
        <p>
          {amount} {BASE_CURRENCY} = {convertedAmount.toFixed(2)} {targetCurrency}
        </p>
      </div>
    </div>
  );
};

export default ExchangeRateWidget;
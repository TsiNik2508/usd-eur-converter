import React from 'react';
import useCurrencyStore from '../store/store';
import './CurrencyConverter.css';

const CurrencyConverter: React.FC = () => {
  const { usd, eur, error, setUSD, setEUR, clearError } = useCurrencyStore();

  return (
    <div className="currency-converter">
      <div className="input-group">
        <label htmlFor="usd-input">USD</label>
        <input
          id="usd-input"
          type="text"
          value={usd}
          onChange={(e) => {
            clearError(); // Очищаем ошибку перед изменением значения
            const value = e.target.value;
            if (/^\d*\.?\d*$/.test(value)) {
              setUSD(value); // Устанавливаем новое значение USD
            }
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="eur-input">EUR</label>
        <input
          id="eur-input"
          type="text"
          value={eur}
          onChange={(e) => {
            clearError(); // Очищаем ошибку перед изменением значения
            const value = e.target.value;
            if (/^\d*\.?\d*$/.test(value)) {
              setEUR(value); // Устанавливаем новое значение EUR
            }
          }}
        />
      </div>
      {error && <div className="error-message">{error}</div>} {/* Проверяем наличие ошибки для отображения */}
    </div>
  );
};

export default CurrencyConverter;

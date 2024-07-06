import React from 'react';
import useCurrencyStore from '../store/store';
import './CurrencyConverter.css';

const CurrencyConverter: React.FC = () => {
  // Используем наше Zustand хранилище для управления состоянием
  const { usd, eur, error, setUSD, setEUR, clearError } = useCurrencyStore();

  return (
    <div className="currency-converter">
      {/* Поле ввода для USD */}
      <div className="input-group">
        <label htmlFor="usd-input">USD</label>
        <input
          id="usd-input"
          type="text"
          value={usd}
          // При изменении значения USD вызываем setUSD и очищаем ошибки
          onChange={(e) => {
            clearError(); // Очищаем ошибку перед изменением значения
            setUSD(e.target.value); // Устанавливаем новое значение USD
          }}
        />
      </div>
      {/* Поле ввода для EUR */}
      <div className="input-group">
        <label htmlFor="eur-input">EUR</label>
        <input
          id="eur-input"
          type="text"
          value={eur}
          // При изменении значения EUR вызываем setEUR и очищаем ошибки
          onChange={(e) => {
            clearError(); // Очищаем ошибку перед изменением значения
            setEUR(e.target.value); // Устанавливаем новое значение EUR
          }}
        />
      </div>
      {/* Выводим сообщение об ошибке, если есть */}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CurrencyConverter;

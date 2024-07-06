import create from 'zustand';

// Определяем интерфейс состояния для валютного конвертера
interface CurrencyState {
  usd: string; // Значение в долларах США
  eur: string; // Значение в евро
  error: string; // Сообщение об ошибке
  setUSD: (value: string) => void; // Функция для установки значения USD
  setEUR: (value: string) => void; // Функция для установки значения EUR
  clearError: () => void; // Функция для очистки ошибки
}

// Константа для курса обмена
const exchangeRate = 1.07;

// Создаем Zustand store с начальным состоянием
const useCurrencyStore = create<CurrencyState>((set) => ({
  usd: '', // Начальное значение для USD
  eur: '', // Начальное значение для EUR
  error: '', // Начальное значение для ошибки
  // Функция для установки значения USD и автоматического пересчета EUR
  setUSD: (value: string) => set(() => {
    const parsedValue = parseFloat(value); // Парсим введенное значение в число
    // Если введенное значение не число и не пустое, устанавливаем ошибку
    if (isNaN(parsedValue) && value !== '') {
      return { error: 'Введите число' };
    }
    // Если значение пустое, очищаем USD и EUR и ошибку
    if (value === '') {
      return { usd: value, eur: '', error: '' };
    }
    // Вычисляем EUR по курсу обмена и устанавливаем новые значения
    return { usd: value, eur: (parsedValue / exchangeRate).toFixed(2), error: '' };
  }),
  // Функция для установки значения EUR и автоматического пересчета USD
  setEUR: (value: string) => set(() => {
    const parsedValue = parseFloat(value); // Парсим введенное значение в число
    // Если введенное значение не число и не пустое, устанавливаем ошибку
    if (isNaN(parsedValue) && value !== '') {
      return { error: 'Введите число' };
    }
    // Если значение пустое, очищаем EUR и USD и ошибку
    if (value === '') {
      return { eur: value, usd: '', error: '' };
    }
    // Вычисляем USD по курсу обмена и устанавливаем новые значения
    return { eur: value, usd: (parsedValue * exchangeRate).toFixed(2), error: '' };
  }),
  // Функция для очистки ошибки
  clearError: () => set({ error: '' }),
}));

export default useCurrencyStore;

import create from 'zustand';

interface CurrencyState {
  usd: string;
  eur: string;
  error: string;
  setUSD: (value: string) => void;
  setEUR: (value: string) => void;
  clearError: () => void;
}

const exchangeRate = 1.07;

const useCurrencyStore = create<CurrencyState>((set) => ({
  usd: '',
  eur: '',
  error: '',
  setUSD: (value: string) => set((state) => {
    const parsedValue = parseFloat(value);
    const isValid = /^\d*\.?\d*$/.test(value);

    if (!isValid) {
      return { error: 'Введите числовое значение' };
    }

    return { usd: value, eur: (parsedValue / exchangeRate).toFixed(2), error: '' };
  }),
  setEUR: (value: string) => set((state) => {
    const parsedValue = parseFloat(value);
    const isValid = /^\d*\.?\d*$/.test(value);

    if (!isValid) {
      return { error: 'Введите числовое значение' };
    }

    return { eur: value, usd: (parsedValue * exchangeRate).toFixed(2), error: '' };
  }),
  clearError: () => set({ error: '' }),
}));

export default useCurrencyStore;

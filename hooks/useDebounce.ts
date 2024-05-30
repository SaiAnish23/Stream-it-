import { useState, useEffect } from 'react';

/**
 * Custom hook for debouncing a value.
 *
 * @template T - The type of the value to be debounced.
 * @param value - The value to be debounced.
 * @param delay - The delay in milliseconds for debouncing. Defaults to 500 milliseconds.
 * @returns - The debounced value.
 */
const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

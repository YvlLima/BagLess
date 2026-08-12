import { useState, useEffect } from 'react';

/**
 * Custom hook encapsulating useState and localStorage read/write synchronization.
 *
 * @param {string} key - LocalStorage key
 * @param {any|Function} defaultValue - Default state or initializer function
 * @returns {[any, Function]} - State and setter function
 */
export function usePersistentState(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved === null) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      }
      if (typeof defaultValue === 'boolean') {
        return saved === 'true';
      }
      return JSON.parse(saved);
    } catch (error) {
      console.error(`[usePersistentState] Error reading "${key}":`, error);
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof state === 'boolean') {
        localStorage.setItem(key, String(state));
      } else {
        localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (error) {
      console.error(`[usePersistentState] Error writing "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}

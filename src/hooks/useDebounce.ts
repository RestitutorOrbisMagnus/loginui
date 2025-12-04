import { useState, useEffect } from 'react';

export function useDebounce(value:string, delay:number= 500):string {
  const [debouncedValue, setDebouncedValue] = useState(value);
 useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);

  return debouncedValue;
}
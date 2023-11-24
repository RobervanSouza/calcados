"use client";
import { useState, useEffect } from "react";

export function useLocalStorage<T>(itens: string) {
  const storedValue = localStorage.getItem(itens);
  const initialValue = storedValue ? JSON.parse(storedValue) : [];

  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    localStorage.setItem(itens, JSON.stringify(value));
  }, [itens, value]);

  return {
    value,
    setValue,
  };
}

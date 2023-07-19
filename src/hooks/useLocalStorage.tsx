"use client";
import { useState } from "react";

export function useLocalStorage<T>(itens: string) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(itens) ?? "")
  );

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(itens, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}

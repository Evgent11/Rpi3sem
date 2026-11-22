import { useEffect, useState } from "react";

// Читает значение из localStorage. Если ключа нет или в нём битый JSON,
// возвращает initialValue — страница не должна падать из-за хранилища.
const read = (key, initialValue) => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? initialValue : JSON.parse(raw);
  } catch {
    return initialValue;
  }
};

// useState, который сохраняет значение в localStorage и переживает
// перезагрузку страницы. API совпадает с useState:
//   const [value, setValue] = useLocalStorage("ключ", initialValue);
// setValue принимает и новое значение, и функцию-апдейтер.
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => read(key, initialValue));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Приватный режим или переполненное хранилище:
      // продолжаем работать как обычный useState.
    }
  }, [key, value]);

  return [value, setValue];
};

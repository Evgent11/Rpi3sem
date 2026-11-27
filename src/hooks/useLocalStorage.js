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
//
// initialValue лучше держать константой вне компонента: от его ссылки
// зависит подписка на изменения хранилища из других вкладок.
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

  // Если значение поменяли в другой вкладке, браузер присылает событие
  // storage — подхватываем его, чтобы вкладки не расходились.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === key || event.key === null) {
        setValue(read(key, initialValue));
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, initialValue]);

  return [value, setValue];
};

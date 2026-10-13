import { useEffect, useState } from "react";

// Маршрутизация без сторонних библиотек: на основе window.location.hash.
// Ссылки вида <a href="#/lectors/3"> работают без перезагрузки страницы.
const read = () => {
  const path = window.location.hash.replace(/^#/, "") || "/";
  return { path, parts: path.split("/").filter(Boolean) };
};

export const useHashRoute = () => {
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
};

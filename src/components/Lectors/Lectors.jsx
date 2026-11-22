import { useState } from "react";
import { lecturers } from "../../data/lecturers";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Lector } from "./Lector";
import "./Lectors.css";

// Избранное хранится в localStorage списком id лекторов.
const FAVORITES_KEY = "lectors:favorites";

export const Lectors = () => {
  const [favorites, setFavorites] = useLocalStorage(FAVORITES_KEY, []);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );

  const shown = onlyFavorites
    ? lecturers.filter((lecturer) => favorites.includes(lecturer.id))
    : lecturers;

  return (
    <>
      <div className="lectors__toolbar">
        <p className="lectors__hint">
          Отметьте лектора сердечком — избранное сохранится в браузере.
        </p>
        <div className="lectors__actions">
          <button
            type="button"
            className="lectors__filter"
            aria-pressed={onlyFavorites}
            onClick={() => setOnlyFavorites((prev) => !prev)}
          >
            Избранное · {favorites.length}
          </button>
          {favorites.length > 0 && (
            <button
              type="button"
              className="lectors__clear"
              onClick={() => setFavorites([])}
            >
              Очистить
            </button>
          )}
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="lectors">
          {shown.map((lecturer) => (
            <Lector
              key={lecturer.id}
              lecturer={lecturer}
              isFavorite={favorites.includes(lecturer.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="lectors__empty frame">
          <p className="lectors__empty-title">В избранном пока пусто</p>
          <p className="lectors__empty-text">
            Нажмите на сердечко в карточке лектора — он появится здесь и
            сохранится после перезагрузки страницы.
          </p>
          <button
            type="button"
            className="cta"
            onClick={() => setOnlyFavorites(false)}
          >
            Показать всех лекторов
          </button>
        </div>
      )}
    </>
  );
};

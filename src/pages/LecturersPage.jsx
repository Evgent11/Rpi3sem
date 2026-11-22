import { useState } from "react";
import { lecturers } from "../data/lecturers";
import { Lector } from "../components/Lectors/Lector";
import "./Pages.css";

export const LecturersPage = () => {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const filtered = lecturers.filter((lecturer) => {
    if (!normalized) return true;
    const text = [
      lecturer.name,
      ...lecturer.disciplines.map((d) => d.title),
    ]
      .join(" ")
      .toLowerCase();
    return text.includes(normalized);
  });

  return (
    <section className="lecturers-page">
      <div className="lecturers-search frame">
        <label className="lecturers-search__label" htmlFor="lecturer-search">
          Поиск лектора
        </label>
        <input
          id="lecturer-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите ФИО или дисциплину..."
        />
      </div>

      {filtered.length > 0 ? (
        <div className="lectors">
          {filtered.map((l) => (
            <Lector key={l.id} lecturer={l} />
          ))}
        </div>
      ) : (
        <p className="frame lecturers-empty">Лекторы по запросу не найдены.</p>
      )}
    </section>
  );
};

import { useNavigate, useParams } from "react-router-dom";
import { lecturers } from "../data/lecturers";
import { LectorDetails } from "../components/Lectors/Lector";
import "./Pages.css";

export const LecturerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturers.find((l) => l.id === Number(id));

  if (!lecturer) {
    return (
      <section className="frame not-found">
        <h1>Лектор не найден</h1>
        <p className="not-found__text">
          Возможно, лектор с таким идентификатором не существует.
        </p>
        <button
          type="button"
          className="cta"
          onClick={() => navigate("/lecturers")}
        >
          Назад к списку
        </button>
      </section>
    );
  }

  return (
    <section className="frame lector-detail">
      <button
        type="button"
        className="cta lector-detail__back"
        onClick={() => navigate("/lecturers")}
      >
        ← Назад к списку
      </button>
      <h1 className="lector-detail__title">{lecturer.name}</h1>
      <LectorDetails lecturer={lecturer} />
    </section>
  );
};

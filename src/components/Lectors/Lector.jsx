import { useState } from "react";
import { Photo } from "./Photo";
import { Modal } from "../Modal/Modal";
import { formatPrice } from "../../utils";

// Карточка лектора. Подробности открываются в модальном окне.
export const Lector = ({ lecturer }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="lector-card frame">
      <Photo className="lector-card__photo" id={lecturer.id} name={lecturer.name} />
      <div className="lector-card__body">
        <h2 className="lector-card__name">{lecturer.name}</h2>
        <p className="lector-card__meta">
          {lecturer.degree !== "нет" ? lecturer.degree : lecturer.education}
          {" · "}
          {lecturer.experience}
        </p>
        <button type="button" className="cta" onClick={() => setOpen(true)}>
          Подробнее
        </button>
      </div>

      {open && (
        <Modal title={lecturer.name} onClose={() => setOpen(false)}>
          <LectorDetails lecturer={lecturer} />
        </Modal>
      )}
    </article>
  );
};

const LectorDetails = ({ lecturer }) => (
  <div className="lector">
    <div className="lector__top">
      <div className="lector__photo-wrap">
        <Photo className="lector__photo" id={lecturer.id} name={lecturer.name} />
        <span className="rainbow lector__line" />
      </div>
      <div className="lector__info">
        <p className="lector__facts">
          <span>
            <b>Образование:</b> {lecturer.education}
          </span>
          <span>
            <b>Стаж:</b> {lecturer.experience}
          </span>
          <span>
            <b>Учёная степень:</b> {lecturer.degree}
          </span>
        </p>
      </div>
    </div>

    <h3 className="lector__subtitle">Преподаваемые дисциплины:</h3>
    {lecturer.disciplines.map((d) => (
      <div className="lector__discipline" key={d.title}>
        <p>
          <b>{d.title}</b> — {d.description}
        </p>
        <ol>
          {d.topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
      </div>
    ))}

    <h3 className="lector__subtitle">Тарифы:</h3>
    <ul className="lector__tariffs">
      {lecturer.tariffs.map((t) => (
        <li key={t.title}>
          {t.title}: {formatPrice(t.price, t.from)}
        </li>
      ))}
    </ul>
  </div>
);

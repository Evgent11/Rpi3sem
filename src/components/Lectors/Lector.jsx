import { Photo } from "./Photo";
import { formatPrice } from "../../utils";

// Один блок лектора — фрейм «Лекторы» из макета
export const Lector = ({ lecturer }) => (
  <section className="lector frame">
    <div className="lector__top">
      <div className="lector__photo-wrap">
        <Photo className="lector__photo" id={lecturer.id} name={lecturer.name} />
        <span className="rainbow lector__line" />
      </div>
      <div className="lector__info">
        <h2 className="lector__name">{lecturer.name}</h2>
        <p className="lector__facts">
          <span><b>Образование:</b> {lecturer.education}</span>
          <span><b>Стаж:</b> {lecturer.experience}</span>
          <span><b>Учёная степень:</b> {lecturer.degree}</span>
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
  </section>
);

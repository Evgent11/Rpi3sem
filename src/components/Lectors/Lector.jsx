import { useRef, useState } from "react";
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

const LectorDetails = ({ lecturer }) => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    // после прокрутки переводим фокус на первое поле
    setTimeout(() => formRef.current?.querySelector("input")?.focus({ preventScroll: true }), 400);
  };

  return (
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
          <button type="button" className="cta lector__signup" onClick={scrollToForm}>
            Записаться
          </button>
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

      <SignupForm formRef={formRef} lecturer={lecturer} />
    </div>
  );
};

const initialForm = { name: "", phone: "", tariff: "", comment: "" };

const SignupForm = ({ lecturer, formRef }) => {
  const [form, setForm] = useState({
    ...initialForm,
    tariff: lecturer.tariffs[0]?.title ?? "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заявка:", { lecturerId: lecturer.id, ...form });
    setSent(true);
  };

  return (
    <section className="signup" ref={formRef}>
      <span className="rainbow signup__line" />
      <h3 className="lector__subtitle">Записаться к лектору</h3>

      {sent ? (
        <p className="signup__done">
          Спасибо, {form.name}! Мы свяжемся с вами по номеру {form.phone}.
        </p>
      ) : (
        <form className="signup__form" onSubmit={handleSubmit}>
          <label className="signup__field">
            <span>Ваше имя</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              autoComplete="name"
              placeholder="Иван Иванов"
            />
          </label>

          <label className="signup__field">
            <span>Телефон</span>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={update("phone")}
              autoComplete="tel"
              placeholder="+7"
            />
          </label>

          <label className="signup__field">
            <span>Электронная почта</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              autoComplete="email"
              placeholder="info@company.com"
            />
          </label>
              

          <label className="signup__field">
            <span>Комментарий</span>
            <textarea rows={5} value={form.comment} onChange={update("comment")} />
          </label>

          <button type="submit" className="cta signup__submit">
            Отправить заявку
          </button>
        </form>
      )}
    </section>
  );
};

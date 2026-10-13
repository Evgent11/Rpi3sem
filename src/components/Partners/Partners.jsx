import iclLogo from "../../assets/icl.svg";
import tatneftLogo from "../../assets/tatneft.svg";
import { partners } from "../../data/partners";
import "./Partners.css";

const logos = { icl: iclLogo, tatneft: tatneftLogo };

const Arrow = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M6 22L22 6M22 6H9M22 6v13" stroke="#000" strokeWidth="2" />
  </svg>
);

export const Partners = () => {
  return (
    <section className="partners frame">
      {partners.map((p) => (
        <article className="partner" key={p.id}>
          <div className="partner__head">
            <img className="partner__logo" src={logos[p.logo]} alt={p.name} />
            <a
              className="partner__arrow"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Перейти на сайт ${p.name}`}
            >
              <Arrow />
            </a>
          </div>
          <p className="partner__text">{p.description}</p>
        </article>
      ))}
    </section>
  );
};

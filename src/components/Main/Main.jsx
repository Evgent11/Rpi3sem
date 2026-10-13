import image from "../../assets/hero.jpg";
import "./Main.css";

export const Main = () => {
  return (
    <section className="main frame">
      <img className="image" src={image} alt="Лектор у доски" />
      <p className="main__text">
        <span className="main__lead">Наши лекторы — </span>
        <span>
          признанные специалисты в своих областях, готовые делиться опытом и
          знаниями.
        </span>
      </p>
      <a className="cta main__cta" href="#lectors">
        Найти лектора
      </a>
    </section>
  );
};

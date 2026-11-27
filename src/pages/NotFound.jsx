import { Link } from "react-router-dom";
import "./Pages.css";

export const NotFound = () => {
  return (
    <section className="frame not-found">
      <p className="not-found__code">404</p>
      <h1>Страница не найдена</h1>
      <p className="not-found__text">
        Такой страницы не существует или она была перемещена.
      </p>
      <Link to="/" className="cta">
        На главную
      </Link>
    </section>
  );
};

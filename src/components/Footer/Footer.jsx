import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Footer.css";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <img src={logo} alt="" width="43" height="40" />
        <p>
          Учебная платформа: подбор, бронирование и организация лекций онлайн и
          офлайн.
        </p>
      </div>
      <nav className="footer__col" aria-label="Разделы сайта">
        <h4>Разделы</h4>
        <Link to="/">Главная</Link>
        <Link to="/lecturers">Лекторы</Link>
        <Link to="/about">О нас</Link>
      </nav>
      <div className="footer__col">
        <h4>Контакты</h4>
        <a href="mailto:11evgent11@gmail.com">11evgent11@gmail.com</a>
        <a href="tel:+79648510745">8 (964) 851-07-45</a>
      </div>
    </div>
    <p className="container footer__copy">
      © {new Date().getFullYear()} Учебная платформа
    </p>
  </footer>
);

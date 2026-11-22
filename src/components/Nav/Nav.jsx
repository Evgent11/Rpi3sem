import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Nav.css";

const items = [
  { to: "/", label: "Главная" },
  { to: "/lecturers", label: "Лекторы" },
  { to: "/about", label: "О нас" },
];

export const Nav = () => {
  const { pathname } = useLocation();

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo-link" aria-label="На главную">
        <img className="logo" alt="Logo" src={logo} />
      </Link>
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={
                isActive(item.to)
                  ? "nav__link nav__link--active"
                  : "nav__link"
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
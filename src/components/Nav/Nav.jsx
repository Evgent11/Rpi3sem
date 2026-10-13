import logo from "../../assets/Logo.svg";
import "./Nav.css";

const items = [
  { href: "#home", label: "Главная" },
  { href: "#partners", label: "Партнеры" },
  { href: "#about", label: "О нас" },
  { href: "#lectors", label: "Лекторы" },
];

export const Nav = () => {
  return (
    <nav className="nav">
      <a href="#home" className="nav__logo-link" aria-label="На главную">
        <img className="logo" alt="Logo" src={logo} />
      </a>
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
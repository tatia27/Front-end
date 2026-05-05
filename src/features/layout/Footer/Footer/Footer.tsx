import { NavLink } from "react-router";
import { Logo } from "../../Header/Logo/Logo";
import { Contacts } from "../Contacts/Contacts";
import s from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__left}>
        <div className={s.logo}>
          <Logo />
          <p>
            сервис для поиска
            <br /> и организции IT-стажировок
          </p>
        </div>
        <div className={s.links}>
          <ul>
            <li>
              <NavLink to="/internships">Стажировки</NavLink>
            </li>
            <li>
              <NavLink to="/login">Войти</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Contacts />
    </footer>
  );
};

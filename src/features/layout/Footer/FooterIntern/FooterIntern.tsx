import { NavLink } from "react-router";
import { Logo } from "../../Header/Logo/Logo";
import { Contacts } from "../Contacts/Contacts";
import s from "../styles/Footer.module.scss";

export const FooterIntern = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__left}>
        <div className={s.logo}>
          <Logo />
          <span>
            сервис для поиска
            <br /> и организции IT-стажировок
          </span>
        </div>
        <div className={s.links}>
          <ul>
            <li>
              <NavLink to="/internships">Разместить стажировку</NavLink>
            </li>
            <li>
              <NavLink to="/login">Стажировки</NavLink>
            </li>
          </ul>
        </div>

        <Contacts />
      </div>
    </footer>
  );
};

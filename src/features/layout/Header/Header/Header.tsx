import { NavLink, useNavigate } from "react-router";
import { Logo } from "../Logo/Logo";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { ROUTER_PATH } from "../../../../app/router/path";
import s from "../styles/Header.module.scss";

export const Header = () => {
  const nav = useNavigate();

  const navigateToLogin = () => nav(ROUTER_PATH.login.page);

  return (
    <header className={s.wrapper}>
      <Logo />

      <div className={s.items}>
        <NavLink
          to="/internships"
          className={({ isActive }) =>
            isActive
              ? `${s.items__link} ${s.items__link_active}`
              : s.items__link
          }
        >
          Стажировки
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? `${s.items__link} ${s.items__link_active}`
              : s.items__link
          }
        >
          Регистрация
        </NavLink>

        <CustomButton
          variant="contained"
          color="button"
          size="small"
          onClick={navigateToLogin}
        >
          Вход
        </CustomButton>
      </div>
    </header>
  );
};

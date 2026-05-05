import { NavLink, useNavigate } from "react-router";
import { Logo } from "../Logo/Logo";
import { ROUTER_PATH } from "../../../../app/router/path";
import { useLogout } from "../hooks/useLogout";
import ProfileSVG from "../../../../shared//assets//profile.svg?react";
import s from "../styles/Header.module.scss";

export const HeaderIntern = () => {
  const nav = useNavigate();

  const { logout } = useLogout();

  const navigateToProfile = () => nav(ROUTER_PATH.profile.intern);

  return (
    <header className={s.wrapper}>
      <Logo />
      <div className={s.items}>
        <NavLink
          to="/my"
          className={({ isActive }) =>
            isActive
              ? `${s.items__link} ${s.items__link_active}`
              : s.items__link
          }
        >
          Мои заявки
        </NavLink>
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
          to="login"
          className={({ isActive }) =>
            isActive
              ? `${s.items__link} ${s.items__link_active}`
              : s.items__link
          }
          onClick={logout}
        >
          Выйти
        </NavLink>
        <ProfileSVG className={s.profile} onClick={navigateToProfile} />
      </div>
    </header>
  );
};

import { useNavigate } from "react-router";
import { ROUTER_PATH } from "../../../../app/router/path";
import LogoSVG from "../../../../shared/assets/logo.svg?react";
import s from "./Logo.module.scss";

export const Logo = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => navigate(ROUTER_PATH.main.page);

  return <LogoSVG fill="red" onClick={navigateToMainPage} className={s.logo} />;
};

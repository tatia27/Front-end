import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../../app/router/path";
import s from "./Info.module.scss";

export const Info = () => {
  const nav = useNavigate();

  const navigateToLogin = () => nav(ROUTER_PATH.login.page);

  return (
    <div className={s.info}>
      Уже есть аккаунт?{" "}
      <span className={s.info__text} onClick={navigateToLogin}>
        Войдите
      </span>
    </div>
  );
};

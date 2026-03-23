import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { ROUTER_PATH } from "../../../../app/router/path";
import userIcon from "../../../../shared/assets/user.png";
import s from "./Profile.module.scss";

export const Profile = () => {
  const nav = useNavigate();

  const navigateToResume = () =>
    nav(ROUTER_PATH.intern.page + ROUTER_PATH.intern.update);

  return (
    <div className={s.wrapper}>
      <img src={userIcon} alt="Профиль пользователя" />
      <CustomButton
        variant="contained"
        color="button"
        size="large"
        onClick={navigateToResume}
      >
        Добавить информацию
      </CustomButton>
    </div>
  );
};

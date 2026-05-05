import { useNavigate } from "react-router-dom";
import { PopularInternships } from "../PopularInternships/PopularInternships";
import { ROUTER_PATH } from "../../../../app/router/path";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { RunningLine } from "../RunningLine/ui/RunningLine/RunningLine";
import s from "./MainPage.module.scss";

export const MainPage = () => {
  const nav = useNavigate();

  const navigateToInternships = () => nav(ROUTER_PATH.internships.page);

  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <p className={s.title}>
          Найди свою первую
          <br /> стажировку в IT
        </p>
        <p className={s.info}>
          Просматривайте стажировки от ведущих
          <br /> компаний и начните карьеру уже сегодня
        </p>

        <CustomButton
          variant="contained"
          color="button"
          size="large"
          onClick={navigateToInternships}
        >
          Найти стажировку
        </CustomButton>
      </div>

      <RunningLine />
      <PopularInternships />
    </div>
  );
};

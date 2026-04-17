import { TextField } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../app/context/userContext/userContext";
import { ROUTER_PATH } from "../../../../app/router/path";
import s from "./CompanySearch.module.scss";

export const CompanySearch = () => {
  const nav = useNavigate();

  const { user } = useUser();

  const isCompany = user?.role === "company";

  const navigateToCreateInternship = () => {
    if (isCompany) {
      nav(ROUTER_PATH.internships.addInternship);
    } else {
      nav(ROUTER_PATH.login.page);
    }
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.main}>
          <p className={s.main__title}>Разместите вакансию</p>
          <p className={s.main__info}>
            И находите сотрудников среди тех, кто хочет у вас работать
          </p>
        </div>

        <CustomButton
          variant="contained"
          color="button"
          size="large"
          onClick={navigateToCreateInternship}
        >
          Разместить вакансию
        </CustomButton>
      </div>
      <div className={s.search}>
        <p className={s.main__title}>
          Скажите, кого и где ищете — <br /> покажем кандидатов
        </p>

        <div className={s.info}>
          <TextField
            id="outlined-basic"
            label="Профессия или должность"
            variant="outlined"
          />
          <CustomButton variant="contained" color="button" size="large">
            Найти
          </CustomButton>
        </div>
      </div>
    </>
  );
};

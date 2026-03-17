import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import s from "./CompanySearch.module.scss";

export const CompanySearch = () => {
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
          type="submit"
        >
          Разместить вакансию
        </CustomButton>
      </div>
    </>
  );
};

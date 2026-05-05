import { Input } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { Info } from "../Register/ui/Info/Info";
import s from "../RegisterCompanyPage/RegisterCompanyPage.module.scss";

export const RegisterInternPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.wrapper__title}>Регистрация стажёра</p>

        <div className={s.inputs}>
          <Input placeholder="Фамилия" />
          <Input placeholder="Имя" />
          <Input placeholder="Отчество" />
          <Input placeholder="Email" />
          <Input placeholder="Пароль" />
        </div>

        <CustomButton variant="contained" color="button" size="large">
          Зарегистрироваться
        </CustomButton>

        <Info />
      </div>
    </div>
  );
};

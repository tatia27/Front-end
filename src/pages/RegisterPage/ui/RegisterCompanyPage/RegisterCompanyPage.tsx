import { Input } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { Info } from "../Register/ui/Info/Info";
import s from "./RegisterCompanyPage.module.scss";

export const RegisterCompanyPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.wrapper__title}>Регистрация компании</p>

        <div className={s.inputs}>
          <Input placeholder="Наименование компании" />
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

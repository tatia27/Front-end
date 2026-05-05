import { Card } from "../Card/Card";
import s from "./RegisterPage.module.scss";

export const RegisterPage = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.wrapper__title}>Регистрация</p>
      <div className={s.cards}>
        <Card title="Поиск стажировки" info="intern" />
        <Card title="Поиск сотрудников" info="company" />
      </div>
    </div>
  );
};

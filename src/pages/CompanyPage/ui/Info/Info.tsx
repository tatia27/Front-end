import s from "./Info.module.scss";

export const Info = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.wrapper__title}>Ланит-Терком</h2>

      <div className={s.wrapper__card}>Описание</div>
    </div>
  );
};

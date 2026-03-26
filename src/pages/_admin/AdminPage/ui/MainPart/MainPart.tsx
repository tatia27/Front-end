import s from "./MainPart.module.scss";

export const MainPart = () => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <p className={s.block__count}>21</p>
        <p className={s.block__title}>Всего стажировок</p>
      </div>
      <div className={s.block}>
        <p className={s.block__count}>56</p>
        <p className={s.block__title}>Активные стажировки</p>
      </div>
      <div className={s.block}>
        <p className={s.block__count}>555</p>
        <p className={s.block__title}>Всего компаний</p>
      </div>
      <div className={s.block}>
        <p className={s.block__count}>23</p>
        <p className={s.block__title}>Всего пользователей</p>
      </div>
    </div>
  );
};

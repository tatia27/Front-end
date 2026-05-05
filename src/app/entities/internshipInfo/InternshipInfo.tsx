import s from "./InternshipInfo.module.scss";

interface Props {
  salary: null | number;
  typeOfEmployment: string;
  schedule: string;
  styles?: string;
}

export const InternshipInfo = (props: Props) => {
  const {
    salary, //
    typeOfEmployment,
    schedule,
    styles,
  } = props;

  return (
    <div className={`${s.info} ${styles}`}>
      <p className={s.info__small}>
        {salary !== null ? "Оплачиваемая" : "Неоплачиваемая"}
      </p>

      <p className={s.info__small}>
        {typeOfEmployment === "Full" ? "Полный день" : "Неполный день"}
      </p>
      <p className={s.info__small}>
        {schedule === "Office" ? "В офиссе" : "Удалённо"}
      </p>
    </div>
  );
};

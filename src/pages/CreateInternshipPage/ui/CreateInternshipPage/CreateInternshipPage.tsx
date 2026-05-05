import { Checkbox, TextField } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import s from "./CreateInternshipPage.module.scss";

const TYPE_OF_EMPLOYMENT = [
  { id: 1, name: "Полная занятость" },
  { id: 2, name: "Частичная занятость" },
];

const WORK_SCHEDULE = [
  { id: 1, name: "В офисе" },
  { id: 2, name: "Удалённо" },
];

export const CreateInternshipPage = () => {
  return (
    <div>
      <p className={s.title}>Информация о стажировке</p>

      <div className={s.wrapper}>
        <TextField
          id="outlined-basic"
          label="Наименование стажировки"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Направление стажировки"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Компания" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Длительность"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Описание стажировки"
          variant="outlined"
        />

        <div className={s.salary}>
          <Checkbox size="medium" />
          <TextField id="outlined-basic" label="Зарплата" variant="outlined" />
        </div>

        <div className={s.columns}>
          <div className={s.columns__item}>
            <p>Тип занятости</p>
            {TYPE_OF_EMPLOYMENT.map((item) => (
              <div className={s.info}>
                <Checkbox size="medium" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          <div className={s.columns__item}>
            <p>График работы</p>
            {WORK_SCHEDULE.map((item) => (
              <div className={s.info}>
                <Checkbox size="medium" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <TextField id="outlined-basic" label="Навыки" variant="outlined" />
        <TextField id="outlined-basic" label="Условия" variant="outlined" />
      </div>

      <CustomButton variant="contained" color="button" size="small">
        Создать
      </CustomButton>
    </div>
  );
};

import * as yup from "yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { useMutation } from "@apollo/client";
import { CREATE_INTERNSHIP } from "../../../../app/graphql/queries/internshipApi";
import {
  OPTIONS,
  TYPE_OF_EMPLOYMENT,
  WORK_SCHEDULE,
} from "../../consts/consts";
import { FormProvider, useForm } from "react-hook-form";
import { UserContext } from "../../../../app/context/userContext/userContext";
import s from "./CreateInternshipPage.module.scss";

interface Inputs {
  title: string;
  company: string;
  focusOfInternship: string;
  durationOfInternship: string;
  salary?: number | null;
  skills: string;
  conditions: string;
}

const schema = yup.object().shape({
  title: yup
    .string()
    .min(1, "Минимум 1 символ")
    .max(30, "Максимум 30 символов")
    .required("Обязательное поле"),
  company: yup
    .string()
    .min(5, "Минимум 5 символов")
    .required("Обязательное поле"),
  durationOfInternship: yup.string().required("Обязательное поле"),
  focusOfInternship: yup.string().required("Обязательное поле"),
  skills: yup.string().required("Обязательное поле"),
  salary: yup
    .number()
    .nullable()
    .notRequired()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .min(0, "Salary cannot be negative"),
  conditions: yup.string().required("Обязательное поле"),
});

export const CreateInternshipPage = () => {
  const nav = useNavigate();
  const { user } = useContext(UserContext);

  // * Checkbox
  const [typeOfEmployment, setTypeOfEmployment] = useState("");
  const [schedule, setSchedule] = useState("");

  // * Api
  const [createInternship] = useMutation(CREATE_INTERNSHIP);

  const formMethods = useForm<Inputs>({
    defaultValues: {
      title: "",
      company: "",
      focusOfInternship: "",
      durationOfInternship: "",
      salary: null,
      skills: "",
      conditions: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register } = formMethods;

  const onSubmit = async (data: Inputs) => {
    const {
      title,
      company,
      focusOfInternship,
      durationOfInternship,
      salary,
      skills,
      conditions,
    } = data;

    const salaryNumber = Number(salary);

    try {
      if (
        !title ||
        !company ||
        !durationOfInternship ||
        !salary ||
        !skills ||
        !conditions
      ) {
        toast.info("Заполните все поля формы");
        return;
      }

      if (user?.id) {
        await createInternship({
          variables: {
            ...data,
            companyId: user?.id,
            typeOfEmployment: typeOfEmployment,
            schedule: schedule,
            salary: salaryNumber,
            title,
            company,
            focusOfInternship,
            durationOfInternship,
            skills,
            conditions,
          },
        });

        nav(`/company`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Стажировка не создана");
    }
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Информация о стажировке</p>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
          <TextField
            id="outlined-basic"
            label="Наименование стажировки"
            variant="outlined"
            {...register("title")}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Направление стажировки
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              {...register("focusOfInternship")}
            >
              {OPTIONS.map((item) => (
                <MenuItem value={item.value}>{item.title}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            label="Компания"
            variant="outlined"
            {...register("company")}
          />
          <TextField
            id="outlined-basic"
            label="Длительность"
            variant="outlined"
            {...register("durationOfInternship")}
          />

          <div className={s.salary}>
            <Checkbox size="medium" />
            <TextField
              id="outlined-basic"
              label="Зарплата"
              variant="outlined"
              {...register("salary")}
            />
          </div>
          <div className={s.columns}>
            <div className={s.columns__item}>
              <p>Тип занятости</p>
              {TYPE_OF_EMPLOYMENT.map((item) => (
                <div className={s.info}>
                  <Checkbox
                    size="medium"
                    value={item.id}
                    onChange={(e) => setTypeOfEmployment(e.target.value)}
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <div className={s.columns__item}>
              <p>График работы</p>
              {WORK_SCHEDULE.map((item) => (
                <div className={s.info}>
                  <Checkbox
                    size="medium"
                    value={item.id}
                    onChange={(e) => setSchedule(e.target.value)}
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <TextField
            id="outlined-basic"
            label="Навыки"
            variant="outlined"
            {...register("skills")}
          />
          <TextField
            id="outlined-basic"
            label="Условия"
            variant="outlined"
            {...register("conditions")}
          />
          <CustomButton
            variant="contained"
            color="button"
            size="small"
            type="submit"
          >
            Создать
          </CustomButton>
        </form>
      </FormProvider>
    </div>
  );
};

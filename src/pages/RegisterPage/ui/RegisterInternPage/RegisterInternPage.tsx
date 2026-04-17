import * as yup from "yup";
import { TextField } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { Info } from "../Register/ui/Info/Info";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_INTERN } from "../../../../app/graphql/queries/internApi";
import s from "../RegisterCompanyPage/RegisterCompanyPage.module.scss";
interface Inputs {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, "Минимум 1 символ")
    .max(30, "Максимум 30 символов")
    .required("Обязательное поле"),
  middleName: yup
    .string()
    .min(1, "Минимум 1 символ")
    .max(30, "Максимум 30 символов")
    .required("Обязательное поле"),
  lastName: yup
    .string()
    .min(1, "Минимум 1 символ")
    .max(30, "Максимум 30 символов")
    .required("Обязательное поле"),
  email: yup
    .string()
    .min(5, "Минимум 5 символов")
    .email("Введите корректный email адрес")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Обязательное поле"),
});

export const RegisterInternPage = () => {
  const nav = useNavigate();

  // * Api
  const [createIntern] = useMutation(CREATE_INTERN);

  const formMethods = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register } = formMethods;

  const onSubmit = async (data: Inputs) => {
    const {
      firstName, //
      middleName,
      lastName,
      email,
      password,
    } = data;

    try {
      if (!firstName || !middleName || !lastName || !email || !password) {
        toast.info("Заполните все поля формы");
        return;
      }

      await createIntern({
        variables: {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: email,
          password: password,
        },
      });

      nav(`/`);
    } catch (error) {
      console.log(error);
      toast.error("Стажёр не создан");
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.wrapper__title}>Регистрация стажёра</p>

        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputs}>
              <TextField
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                {...register("lastName")}
              />
              <TextField
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                {...register("firstName")}
              />
              <TextField
                id="outlined-basic"
                label="Отчество"
                variant="outlined"
                {...register("middleName")}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email")}
              />
              <TextField
                id="outlined-basic"
                label="Пароль"
                variant="outlined"
                {...register("password")}
              />
            </div>

            <CustomButton
              variant="contained"
              color="button"
              size="large"
              type="submit"
            >
              Зарегистрироваться
            </CustomButton>
          </form>
        </FormProvider>
        <Info />
      </div>
    </div>
  );
};

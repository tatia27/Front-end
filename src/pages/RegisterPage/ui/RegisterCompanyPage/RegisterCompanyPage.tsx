import * as yup from "yup";
import { TextField } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { Info } from "../Register/ui/Info/Info";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { CREATE_COMPANY } from "../../../../app/graphql/queries/companyApi";
import { useNavigate } from "react-router-dom";
import s from "./RegisterCompanyPage.module.scss";
interface Inputs {
  title: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  title: yup
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

export const RegisterCompanyPage = () => {
  const nav = useNavigate();

  // * Api
  const [createCompany] = useMutation(CREATE_COMPANY);

  const formMethods = useForm<Inputs>({
    defaultValues: {
      title: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register } = formMethods;

  const onSubmit = async (data: Inputs) => {
    const { title, email, password } = data;

    try {
      if (!title || !email || !password) {
        toast.info("Заполните все поля формы");
        return;
      }

      await createCompany({
        variables: {
          name: title,
          email: email,
          password: password,
        },
      });

      nav(`/`);
    } catch (error) {
      console.log(error);
      toast.error("Компания не создана");
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.wrapper__title}>Регистрация компании</p>

        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputs}>
              <TextField
                id="outlined-basic"
                label="Наименование компании"
                variant="outlined"
                {...register("title")}
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

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@mui/material";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IS_AUTH, LOGIN } from "../../../../app/graphql/queries/authApi";
import { useMutation, useQuery } from "@apollo/client";
// import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../../../app/context/userContext/userContext";
import { createAuthHeaders } from "../../../../apolloClient";
import s from "./AuthPage.module.scss";

interface Inputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .min(1, "Минимум 1 символ")
    .max(30, "Максимум 30 символов")
    .email("Введите корректный email (должен содержать @)")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .max(12, "Максимум 12 символов")
    .required("Обязательное поле"),
});

export const AuthPage = () => {
  const nav = useNavigate();

  const { setUser } = useContext(UserContext);

  // * Api
  const { data } = useQuery(IS_AUTH, {
    context: {
      headers: createAuthHeaders(),
    },
  });

  const [login] = useMutation(LOGIN);

  const formMethods = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register } = formMethods;

  const load = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      if (setUser && data.isAuth.id) {
        const { role, id } = data.isAuth;
        setUser({ role, id });
      }
    }
  };

  const onSubmit = async (data: Inputs) => {
    const { email, password } = data;

    // try {
    const result = await login({
      variables: {
        email: email,
        password: password,
      },
    });

    const { login: loginData } = result.data;

    if (loginData) {
      localStorage.setItem("token", loginData.token);
    }
    await load();
    nav("/");

    // }
    // } catch () {
    // const axiosError = error as AxiosError;
    // if (axiosError.response?.status === 401) {
    //   toast.error("Неверный пароль");
    // } else {
    //   toast.error("Неверный логин или пароль");
    // }
    // }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.wrapper__title}>Добро пожаловать в Internship</p>

        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputs}>
              <Input placeholder="Email" {...register("email")} />
              <Input placeholder="Пароль" {...register("password")} />
            </div>

            <CustomButton
              variant="contained"
              color="button"
              size="large"
              type="submit"
            >
              Войти
            </CustomButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

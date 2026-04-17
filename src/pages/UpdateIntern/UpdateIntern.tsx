import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { CustomButton } from "../../ui/_buttons/ContainedButton/ContainedButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useUser } from "../../app/context/userContext/userContext";
import { UPDATE_COMPANY } from "../../app/graphql/queries/companyApi";
import s from "./UpdateIntern.module.scss";

interface Inputs {
  name: string;
  description: string;
}

export const UpdateIntern = () => {
  const nav = useNavigate();
  const { user } = useUser();

  const userId = user?.id;

  // * Api
  const [UpdateCompany] = useMutation(UPDATE_COMPANY);

  const formMethods = useForm<Inputs>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { handleSubmit, register } = formMethods;

  const onSubmit = async (data: Inputs) => {
    const { name, description } = data;

    try {
      if (!name || !description) {
        toast.info("Заполните все поля формы");
        return;
      }

      if (user?.id) {
        await UpdateCompany({
          variables: {
            ...data,
            id: userId,
          },
        });

        nav(`/company`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Информация не обновлена");
    }
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Обновить информацию</p>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
          <TextField
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            {...register("name")}
          />

          <TextField
            id="outlined-basic"
            label="Возраст"
            variant="outlined"
            {...register("name")}
          />

          <TextField
            id="outlined-basic"
            label="Местоположение"
            variant="outlined"
            {...register("name")}
          />

          <TextField
            id="outlined-basic"
            label="Уровень образования"
            variant="outlined"
            {...register("description")}
          />

          <TextField
            id="outlined-basic"
            label="Учебное заведение"
            variant="outlined"
            {...register("description")}
          />

          <TextField
            id="outlined-basic"
            label="Специализация"
            variant="outlined"
            {...register("description")}
          />

          <TextField
            id="outlined-basic"
            label="Hard skills"
            variant="outlined"
            {...register("description")}
          />

          <TextField
            id="outlined-basic"
            label="Soft skills"
            variant="outlined"
            {...register("description")}
          />

          <CustomButton
            variant="contained"
            color="button"
            size="small"
            type="submit"
          >
            Обновить
          </CustomButton>
        </form>
      </FormProvider>
    </div>
  );
};

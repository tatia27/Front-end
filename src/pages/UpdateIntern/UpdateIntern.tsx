import { FormProvider, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { CustomButton } from "../../ui/_buttons/ContainedButton/ContainedButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useUser } from "../../app/context/userContext/userContext";
import { UPDATE_INTERN } from "../../app/graphql/queries/internApi";
import s from "./UpdateIntern.module.scss";
interface Inputs {
  age: number | undefined;
  location: string;
  levelOfEducation: string;
  educationalInstitution: string;
  specialization: string;
  hardSkills: string;
  softSkills: string;
}

export const UpdateIntern = () => {
  const nav = useNavigate();
  const { user } = useUser();

  const userId = user?.id;

  // * Api
  const [UpdateIntern] = useMutation(UPDATE_INTERN);

  const formMethods = useForm<Inputs>({
    defaultValues: {
      age: undefined,
      location: "",
      levelOfEducation: "",
      educationalInstitution: "",
      specialization: "",
      hardSkills: "",
      softSkills: "",
    },
  });

  const { handleSubmit, register } = formMethods;

  const onSubmit = async (data: Inputs) => {
    const {
      age,
      location,
      levelOfEducation,
      educationalInstitution,
      specialization,
      hardSkills,
      softSkills,
    } = data;

    try {
      if (
        age === undefined ||
        !location ||
        !levelOfEducation ||
        !educationalInstitution ||
        !specialization ||
        !hardSkills ||
        !softSkills
      ) {
        toast.info("Заполните все поля формы");
        return;
      }

      if (user?.id) {
        await UpdateIntern({
          variables: {
            id: userId,
            input: {
              cv: {
                age: Number(age),
                location,
                levelOfEducation,
                educationalInstitution,
                specialization,
                hardSkills,
                softSkills,
              },
            },
          },
        });

        nav(`/intern`);
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
          {/* <TextField
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            {...register("name")}
          /> */}
          <TextField
            id="outlined-basic"
            label="Возраст"
            variant="outlined"
            {...register("age")}
          />
          <TextField
            id="outlined-basic"
            label="Местоположение"
            variant="outlined"
            {...register("location")}
          />
          <TextField
            id="outlined-basic"
            label="Уровень образования"
            variant="outlined"
            {...register("levelOfEducation")}
          />
          <TextField
            id="outlined-basic"
            label="Учебное заведение"
            variant="outlined"
            {...register("educationalInstitution")}
          />
          <TextField
            id="outlined-basic"
            label="Специализация"
            variant="outlined"
            {...register("specialization")}
          />
          <TextField
            id="outlined-basic"
            label="Hard skills"
            variant="outlined"
            {...register("hardSkills")}
          />
          <TextField
            id="outlined-basic"
            label="Soft skills"
            variant="outlined"
            {...register("softSkills")}
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

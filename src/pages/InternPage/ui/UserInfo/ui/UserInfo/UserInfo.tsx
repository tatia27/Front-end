import { useUser } from "../../../../../../app/context/userContext/userContext";
import { Favorites } from "../../../Favorites/Favorites";
import { useQuery } from "@apollo/client";
import { GET_INTERN } from "../../../../../../app/graphql/queries/internApi";
import { LoadingSpinner } from "../../../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import s from "./UserInfo.module.scss";

export const UserInfo = () => {
  const { user } = useUser();
  const userId = user?.id || "";

  // * Api
  const { data, loading } = useQuery(GET_INTERN, {
    variables: {
      id: userId,
    },
  });

  if (loading || !data) return <LoadingSpinner />;

  const userInfo = data.getIntern;
  const { firstName, middleName, lastName, cv, email } = userInfo;

  return (
    <div>
      <div className={s.info}>
        <p
          className={s.info__title}
        >{`${lastName} ${firstName} ${middleName || ""}`}</p>
        <div className={s.info__block}>
          <p>Возраст: {cv.age || "-"}</p>
          <p>Email: {email}</p>
          <p>Местоположение: {cv.location || "-"}</p>
          <p>Учебное заведение: {cv.educationalInstitution || "-"}</p>
          <p>Специализация: {cv.specialization || "-"}</p>
        </div>
      </div>

      <div className={s.skills}>
        {cv.hardSkills && (
          <div className={s.hardSkills}>
            <p className={s.hardSkills__title}>Hard skills</p>
            {cv.hardSkills}
          </div>
        )}

        {cv.softSkills && (
          <div className={s.hardSkills}>
            <p className={s.hardSkills__title}>Soft skills</p>
            {cv.softSkills}
          </div>
        )}
      </div>
      <Favorites internId={userId} />
    </div>
  );
};

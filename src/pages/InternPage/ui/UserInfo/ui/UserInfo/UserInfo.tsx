import { useUser } from "../../../../../../app/context/userContext/userContext";
import { Favorites } from "../../../Favorites/Favorites";
import { Skills } from "../Skills/Skills";
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

      {cv.hardSkills && (
        <div className={s.skills}>
          {cv.hardSkills.map((item: string) => (
            <Skills key={item} title={item} />
          ))}
        </div>
      )}
      {cv.softSkills && (
        <div className={s.skills}>
          {cv.softSkills.map((item: string) => (
            <Skills key={item} title={item} />
          ))}
        </div>
      )}

      <Favorites internId={userId} />
    </div>
  );
};

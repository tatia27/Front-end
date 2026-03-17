import { useQuery } from "@apollo/client";
import { GET_POPULAR_INTERNSHIPS } from "../../../../app/graphql/queries/internshipApi";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { Internship } from "../Internship/Internship";
import type { Internships } from "../../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { LoadingSpinner } from "../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { useContext } from "react";
import { UserContext } from "../../../../app/context/userContext/userContext";
import s from "./PopularInternships.module.scss";

export const PopularInternships = () => {
  const { user } = useContext(UserContext);
  const isIntern = user?.role === "intern";

  // * Api
  const { data, loading } = useQuery(GET_POPULAR_INTERNSHIPS);

  const internships = data.getPopularInternships;

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className={s.info}>
        <p className={s.info__title}>Популярные стажировки</p>
        {isIntern && <p className={s.info__addition}>Специально для вас</p>}
      </div>

      <div className={s.columns}>
        {internships.map((item: Internships) => (
          <Internship key={item.id} {...item} />
        ))}
      </div>

      <div className={s.button}>
        <CustomButton variant="outlined" color="button" size="large">
          Показать больше
        </CustomButton>
      </div>
    </div>
  );
};

import { useQuery } from "@apollo/client";
import { GET_POPULAR_INTERNSHIPS } from "../../../../app/graphql/queries/internshipApi";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { Internship } from "../Internship/Internship";
import type { Internships } from "../../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import s from "./PopularInternships.module.scss";

export const PopularInternships = () => {
  const { data, loading } = useQuery(GET_POPULAR_INTERNSHIPS);

  if (loading) return <p>Loading...</p>;

  const internships = data.getPopularInternships;

  return (
    <div>
      {/* <Tabss /> */}
      <div>Табы</div>
      <div className={s.info}>
        <p className={s.info__title}>Популярные стажировки</p>
        <p className={s.info__addition}>Специально для вас</p>
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

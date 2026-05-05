import { useQuery } from "@apollo/client";
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { useUser } from "../../../app/context/userContext/userContext";
import { Internship } from "../../../pages/MainPage/ui/Internship/Internship";
import { GET_RECOMMENDED_INTERNSHIPS } from "../../../app/graphql/queries/internshipApi";
import type { Internships } from "../../../pages/InternshipsPage/ui/InternshipsPage/InternshipsPage";
import s from "./RecommendedInternships.module.scss";

export const RecommendedInternships: React.FC = () => {
  const { user } = useUser();

  const { data, loading, error } = useQuery(GET_RECOMMENDED_INTERNSHIPS, {
    variables: { internId: user?.id },
    skip: !user?.id,
  });

  if (!user || user.role !== "admin") return null;
  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className={s.error}>Ошибка загрузки рекомендаций.</div>;

  const internships = data?.getRecommendedInternships;

  return (
    <div className={s.wrapper}>
      <h2>Специально для вас</h2>
      <p className={s.subtitle}>Основано на ваших интересах</p>

      <div className={s.cards}>
        {internships.length > 0 ? (
          internships.map((internship: Internships) => (
            <Internship key={internship.id} {...internship} />
          ))
        ) : (
          <p>
            Пока нет подходящих рекомендаций. Заполните ваше резюме подробне.
          </p>
        )}
      </div>
    </div>
  );
};

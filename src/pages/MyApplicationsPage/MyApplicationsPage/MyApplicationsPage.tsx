import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { UserContext } from "../../../app/context/userContext/userContext";
import { GET_MY_INTERNSHIPS } from "../../../app/graphql/queries/internshipApi";
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner";
import type { Internships } from "../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { Application } from "../Application/Application";
import s from "./MyApplicationsPage.module.scss";

export const MyApplicationsPage = () => {
  const { user } = useContext(UserContext);

  const internId = user?.id;

  const { data, loading } = useQuery(GET_MY_INTERNSHIPS, {
    variables: {
      internId: internId,
    },
    skip: !internId,
  });

  if (loading) return <LoadingSpinner />;

  const applications = data?.getInternshipsForIntern ?? [];

  const isApplications = applications.length !== 0;

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Мои заявки</p>

      <div className={s.internships}>
        {isApplications ? (
          applications.map((item: Internships) => (
            <Application key={item.id} {...item} />
          ))
        ) : (
          <p className={s.internships__info}>
            Здесь будут отображаться заявки на стажировку, на которые вы
            отклкинитесь. Скоро с вами свяжутся, вам придёт письмо на почту.
          </p>
        )}
      </div>
    </div>
  );
};

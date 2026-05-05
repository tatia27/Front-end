import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_MY_INTERNSHIPS } from "../../app/graphql/queries/internshipApi";
import { UserContext } from "../../app/context/userContext/userContext";

import s from "./MyApplicationsPage.module.scss";
import { Application } from "./Application/Application";
import type { Internships } from "../InternshipsPage/ui/InternshipsPage/InternshipsPage";

export const MyApplicationsPage = () => {
  const { user } = useContext(UserContext);

  const internId = user?.id;

  console.log(user?.id);
  console.log(internId);

  // console.log("userId", userId);

  const { data } = useQuery(GET_MY_INTERNSHIPS, {
    variables: {
      internId: internId,
    },
  });

  // const { data } = useQuery(GET_MY_INTERNSHIPS, {
  //   variables: {
  //     internId: internId,
  //   },
  //   skip: !user?.id,
  // });

  const applications = data?.getInternshipsForIntern ?? [];
  console.log(data.getInternshipsForIntern);

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Мои заявки</p>

      <div className={s.internships}>
        <p className={s.internships__info}>
          Здесь будут отображаться заявки на стажировку, на которые вы
          отклкинитесь. Скоро с вами свяжутся, вам придёт письмо на почту.
        </p>

        {applications.map((item: Internships) => (
          <Application {...item} />
        ))}
      </div>
    </div>
  );
};

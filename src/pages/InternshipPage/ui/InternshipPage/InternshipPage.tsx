import { useParams } from "react-router-dom";
import { GET_INTERNSHIP } from "../../../../app/graphql/queries/internshipApi";
import { useQuery } from "@apollo/client";
import { InternshipInfo } from "../../../../app/entities/internshipInfo/InternshipInfo";
import s from "./InternshipPage.module.scss";

export const InternshipPage = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_INTERNSHIP, {
    variables: {
      id: id,
    },
  });

  if (loading || !data) return null;

  const internship = data.getInternship;

  return (
    <div className={s.card}>
      <div className={s.card__top}>
        <p className={s.title}>{internship.title}</p>
        <p className={s.info}>{internship.company}</p>
      </div>

      <InternshipInfo
        salary={internship.salary}
        typeOfEmployment={internship.typeOfEmployment}
        schedule={internship.schedule}
      />

      <div className={s.card__middle}>
        <div>
          <p>Длительность</p>
          <p>{internship.durationOfInternship}</p>
        </div>
        <div>
          <p>Оплата</p>
          <p>
            {internship.salary !== 0
              ? `${internship.salary} руб.`
              : "Не оплачивается"}
          </p>
        </div>
      </div>
      <div>
        <p>Навыки</p>
        <p>{internship.skills}</p>
      </div>
      <div>
        <p>Описание</p>
        <p>{internship.conditions}</p>
      </div>
    </div>
  );
};

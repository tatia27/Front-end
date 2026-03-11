import { useContext } from "react";
import s from "./ActiveInternships.module.scss";
import { UserContext } from "../../../../app/context/userContext/userContext";
import { useQuery } from "@apollo/client";
import { LoadingSpinner } from "../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { GET_INTERNSHIPS_FOR_COMPANY } from "../../../../app/graphql/queries/internshipApi";
import { Internship } from "../../../InternshipsPage/ui/Internship/Internship";
import type { Internships } from "../../../InternshipsPage/ui/InternshipsPage/InternshipsPage";

export const ActiveInternships = () => {
  const { user } = useContext(UserContext);

  const companyId = user?.id;

  const { data, loading } = useQuery(GET_INTERNSHIPS_FOR_COMPANY, {
    variables: {
      id: companyId,
    },
    skip: !companyId,
  });

  if (loading) return <LoadingSpinner />;

  const company = data.getInternshipsForCompany;
  const isCompany = company.length >= 0;

  return (
    <div>
      <p className={s.title}>Активные стажировки</p>
      <div className={s.list}>
        {isCompany &&
          company.map((item: Internships) => <Internship {...item} />)}
      </div>
    </div>
  );
};

import { useUser } from "../../../../app/context/userContext/userContext";
import { useQuery } from "@apollo/client";
import { LoadingSpinner } from "../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { GET_INTERNSHIPS_FOR_COMPANY } from "../../../../app/graphql/queries/internshipApi";
import { Internship } from "../../../InternshipsPage/ui/Internship/Internship";
import type { Internships } from "../../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import s from "./ActiveInternships.module.scss";

export const ActiveInternships = () => {
  const { user } = useUser();

  const companyId = user?.id;

  const { data, loading } = useQuery(GET_INTERNSHIPS_FOR_COMPANY, {
    variables: {
      id: companyId,
    },
    skip: !companyId,
  });

  if (loading) return <LoadingSpinner />;

  if (!data.getInternshipsForCompany) {
    return;
  }

  const company = data.getInternshipsForCompany;
  const isCompany = company.length >= 0;

  return (
    <div className={s.list}>
      {isCompany &&
        company.map((item: Internships) => (
          <Internship key={item.id} {...item} />
        ))}
    </div>
  );
};

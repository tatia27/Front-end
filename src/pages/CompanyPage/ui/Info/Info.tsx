import { useContext } from "react";
import { UserContext } from "../../../../app/context/userContext/userContext";
import { useQuery } from "@apollo/client";
import { GET_COMPANY } from "../../../../app/graphql/queries/companyApi";
import { LoadingSpinner } from "../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import s from "./Info.module.scss";

export const Info = () => {
  const { user } = useContext(UserContext);

  const companyId = user?.id;

  const { data, loading } = useQuery(GET_COMPANY, {
    variables: {
      id: companyId,
    },
    skip: !companyId,
  });

  if (loading) return <LoadingSpinner />;

  const company = data.getCompany;

  return (
    <div className={s.wrapper}>
      <h2 className={s.wrapper__title}>{company.name}</h2>

      <p className={s.wrapper__card}>{company.description}</p>
    </div>
  );
};

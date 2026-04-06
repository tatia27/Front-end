import { useQuery } from "@apollo/client";
import { GET_INTERNS } from "../../../../../app/graphql/queries/internApi";
import { CompanyTable } from "../../../AdminCompaniespage/ui/CompanyTable/CompanyTable";
import { LoadingSpinner } from "../../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import s from "./AdminInternsPage.module.scss";
import { InternTable } from "../InternTable/InternTable";

export const AdminInternsPage = () => {
  const { data, loading } = useQuery(GET_INTERNS, {});

  if (loading) {
    return <LoadingSpinner />;
  }

  const interns = data.interns;
  const internshipsLength = interns.length;

  return (
    <div className={s.wrapper}>
      <p>Пользователи {`(${internshipsLength})`}</p>

      <InternTable />
    </div>
  );
};

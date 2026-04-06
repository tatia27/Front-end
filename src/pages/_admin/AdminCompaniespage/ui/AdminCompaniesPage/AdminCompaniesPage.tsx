import { useQuery } from "@apollo/client";
import { GET_COMPANIES } from "../../../../../app/graphql/queries/companyApi";
import { CompanyTable } from "../CompanyTable/CompanyTable";
import { LoadingSpinner } from "../../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import s from "./AdminCompaniesPage.module.scss";

export const AdminCompaniesPage = () => {
  const { data, loading } = useQuery(GET_COMPANIES, {});

  if (loading) {
    return <LoadingSpinner />;
  }

  const companies = data.companies;
  const internshipsLength = companies.length;

  return (
    <div className={s.wrapper}>
      <p>Компании {`(${internshipsLength})`}</p>

      <CompanyTable />
    </div>
  );
};

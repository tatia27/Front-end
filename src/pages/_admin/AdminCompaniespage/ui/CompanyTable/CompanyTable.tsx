import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_COMPANY,
  GET_COMPANIES,
} from "../../../../../app/graphql/queries/companyApi";
import { LoadingSpinner } from "../../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { ROUTER_PATH } from "../../../../../app/router/path";
import { useNavigate } from "react-router-dom";
import s from "./CompanyTable.module.scss";

export const CompanyTable = () => {
  // * Api
  const { data, refetch, loading } = useQuery(GET_COMPANIES, {});
  const [deleteCompany] = useMutation(DELETE_COMPANY);

  const nav = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }

  const rows = data.companies.map((c) => ({
    id: c.id,
    name: c.name,
    status: "Активна",
    // date: new Date(c.createdAt).toLocaleDateString(),
    // interns: c.internshipsCount,
  }));

  const handleDelete = async (id: string) => {
    await deleteCompany({ variables: { id } });
    refetch(); // обновить таблицу
  };

  const handleMessage = (id: string) => {
    nav(`${ROUTER_PATH.admin.companies}/${id}`);
  };

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Компания</th>
            <th>Статус</th>
            {/* <th>Дата регистрации</th>
            <th>Стажировки</th> */}
            <th>Стажировки</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>
                <span className={s.status}>{item.status}</span>
              </td>

              {/* <td>{item.date}</td>
              <td>{item.interns}</td> */}

              <td className={s.actions}>
                <button onClick={() => handleDelete(item.id)}>Удалить</button>
                <button onClick={() => handleMessage(item.id)}>
                  Просмотреть
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

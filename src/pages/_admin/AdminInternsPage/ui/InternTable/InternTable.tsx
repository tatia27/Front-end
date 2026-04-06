import { useMutation, useQuery } from "@apollo/client";
import { LoadingSpinner } from "../../../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { ROUTER_PATH } from "../../../../../app/router/path";
import { useNavigate } from "react-router-dom";
import s from "./InternTable.module.scss";
import {
  DELETE_INTERN,
  GET_INTERNS,
} from "../../../../../app/graphql/queries/internApi";

export const InternTable = () => {
  // * Api
  const { data, loading, refetch } = useQuery(GET_INTERNS, {});
  const [deleteCompany] = useMutation(DELETE_INTERN);

  const nav = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }

  const rows = data.interns.map((c) => ({
    id: c.id,
    lastName: `${c.lastName} ${c.firstName} ${c.middleName || ""}`,
    // date: new Date(c.createdAt).toLocaleDateString(),
    // interns: c.internshipsCount,
  }));

  const handleDelete = async (id: string) => {
    await deleteCompany({ variables: { id } });
    refetch();
  };

  const handleMessage = (id: string) => {
    nav(`${ROUTER_PATH.admin.companies}/${id}`);
  };

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Пользователи</th>
            <th>Статус</th>
            {/* <th>Дата регистрации</th>
            <th>Стажировки</th> */}
            <th>Откликов</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <td>{item.lastName}</td>

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

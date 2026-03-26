import { Sidebar } from "../../../Sidebar/Sidebar/Sidebar";
import { MainPart } from "../MainPart/MainPart";
import s from "./AdminPage.module.scss";

export const AdminPage = () => {
  return (
    <div className={s.container}>
      <Sidebar />
      <MainPart />
    </div>
  );
};

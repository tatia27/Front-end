import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PopularInternships } from "../PopularInternships/PopularInternships";
import { ROUTER_PATH } from "../../../../app/router/path";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { RunningLine } from "../RunningLine/ui/RunningLine/RunningLine";
import { LineTabs } from "../../../../ui/LineTabs/LineTabs";
import { CompanySearch } from "../CompanySearch/CompanySearch";
import { useUser } from "../../../../app/context/userContext/userContext";
import s from "./MainPage.module.scss";
import { RecommendedInternships } from "../../../../features/internships/RecommendedInternships/RecommendedInternships";

const TABS = [
  {
    id: "intern",
    name: "Я соискатель",
  },
  {
    id: "company",
    name: "Я ищу сотрудника",
  },
];

export const MainPage = () => {
  const nav = useNavigate();

  const { user } = useUser();

  const [activeTab, setActiveTab] = useState("intern");

  const navigateToInternships = () => nav(ROUTER_PATH.internships.page);

  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <p className={s.title}>
          Найди свою первую
          <br /> стажировку в IT
        </p>
        <p className={s.info}>
          Просматривайте стажировки от ведущих
          <br /> компаний и начните карьеру уже сегодня
        </p>

        <CustomButton
          variant="contained"
          color="button"
          size="large"
          onClick={navigateToInternships}
        >
          Найти стажировку
        </CustomButton>
      </div>

      <RunningLine />

      <LineTabs
        tabs={TABS}
        activeTabId={activeTab}
        setActiveTabId={setActiveTab}
      />

      {activeTab === "intern" && user?.role === "admin" && (
        <RecommendedInternships />
      )}

      {activeTab === "intern" && user?.role !== "admin" && (
        <PopularInternships />
      )}

      {activeTab === "company" && <CompanySearch />}
    </div>
  );
};

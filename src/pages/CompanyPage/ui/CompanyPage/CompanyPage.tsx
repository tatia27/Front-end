import { useState } from "react";
import { ActiveInternships } from "../ActiveInternships/ActiveInternships";
import { Info } from "../Info/Info";
import { Profile } from "../Profile/Profile";
import { LineTabs } from "../../../../ui/LineTabs/LineTabs";
import { FutureInterns } from "../FutureInterns/FutureInterns";
import s from "./CompanyPage.module.scss";

const TABS = [
  {
    id: "active",
    name: "Активные стажировки",
  },
  {
    id: "candidates",
    name: "Кандидаты",
  },
];

export const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className={s.wrapper}>
      <Profile />
      <div className={s.info}>
        <Info />

        <LineTabs
          tabs={TABS}
          activeTabId={activeTab}
          setActiveTabId={setActiveTab}
        />

        {activeTab === "active" && <ActiveInternships />}

        {activeTab === "candidates" && <FutureInterns />}
      </div>
    </div>
  );
};

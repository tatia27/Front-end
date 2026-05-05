import { ActiveInternships } from "../ActiveInternships/ActiveInternships";
import { Info } from "../Info/Info";
import { Profile } from "../Profile/Profile";
import s from "./CompanyPage.module.scss";

export const CompanyPage = () => {
  return (
    <div className={s.wrapper}>
      <Profile />
      <div>
        <ActiveInternships />
        <Info />
      </div>
    </div>
  );
};

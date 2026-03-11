import { ActiveInternships } from "../ActiveInternships/ActiveInternships";
import { Info } from "../Info/Info";
import { Profile } from "../Profile/Profile";
import s from "./CompanyPage.module.scss";
// import { UserContext } from "../../../../app/context/userContext/userContext";
// import { useQuery } from "@apollo/client";
// import { LoadingSpinner } from "../../../../shared/ui/LoadingSpinner/LoadingSpinner";
// import { GET_COMPANY } from "../../../../app/graphql/queries/companyApi";

export const CompanyPage = () => {
  return (
    <div className={s.wrapper}>
      <Profile />
      <div className={s.info}>
        <Info />
        <ActiveInternships />
      </div>
    </div>
  );
};

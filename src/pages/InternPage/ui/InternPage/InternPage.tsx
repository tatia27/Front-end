import { useToTopPage } from "../../../../shared/hooks/useToTopPage";
import { Profile } from "../Profile/Profile";
import { UserInfo } from "../UserInfo/ui/UserInfo/UserInfo";
import s from "./InternPage.module.scss";

export const InternPage = () => {
  useToTopPage();

  return (
    <div className={s.wrapper}>
      <Profile />
      <UserInfo />
    </div>
  );
};

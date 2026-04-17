import { Header } from "../Header/Header";
import { HeaderCompany } from "../HeaderCompany/HeaderCompany";
import { HeaderIntern } from "../HeaderIntern/HeaderIntern";
import { useUser } from "../../../../app/context/userContext/userContext";

export const useHeader = () => {
  const { user } = useUser();

  const renderHeader = () => {
    if (user?.role === "intern" || user?.role === "admin") {
      return <HeaderIntern />;
    } else if (user?.role === "company") {
      return <HeaderCompany />;
    } else {
      return <Header />;
    }
  };

  return { renderHeader };
};

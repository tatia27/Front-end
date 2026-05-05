import { useContext } from "react";
import { Header } from "../Header/Header";
import { HeaderCompany } from "../HeaderCompany/HeaderCompany";
import { HeaderIntern } from "../HeaderIntern/HeaderIntern";
import { UserContext } from "../../../../app/context/userContext/userContext";

export const useHeader = () => {
  const { user } = useContext(UserContext);

  const renderHeader = () => {
    if (user?.role === "intern") {
      return <HeaderIntern />;
    } else if (user?.role === "company") {
      return <HeaderCompany />;
    } else {
      return <Header />;
    }
  };

  return { renderHeader };
};

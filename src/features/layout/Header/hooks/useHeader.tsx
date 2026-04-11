import { Header } from "../Header/Header";
import { HeaderCompany } from "../HeaderCompany/HeaderCompany";
import { HeaderIntern } from "../HeaderIntern/HeaderIntern";
import { useUser } from "../../../../app/context/userContext/userContext";

export const useHeader = () => {
  const { user } = useUser();

  console.log("HEADER RENDER", user);

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

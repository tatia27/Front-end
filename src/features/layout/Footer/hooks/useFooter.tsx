import { useContext } from "react";
import { Footer } from "../Footer/Footer";
import { FooterCompany } from "../FooterCompany/FooterCompany";
import { FooterIntern } from "../FooterIntern/FooterIntern";
import { UserContext } from "../../../../app/context/userContext/userContext";

export const useFooter = () => {
  const { user } = useContext(UserContext);

  const renderFooter = () => {
    if (user?.role === "intern") {
      return <FooterIntern />;
    } else if (user?.role === "company") {
      return <FooterCompany />;
    } else {
      return <Footer />;
    }
  };

  return { renderFooter };
};

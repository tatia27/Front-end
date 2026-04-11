import { Footer } from "../Footer/Footer";
import { FooterCompany } from "../FooterCompany/FooterCompany";
import { FooterIntern } from "../FooterIntern/FooterIntern";
import { useUser } from "../../../../app/context/userContext/userContext";

export const useFooter = () => {
  const { user } = useUser();

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

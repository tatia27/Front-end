import { useState, type ReactNode } from "react";
import { CompanyContext, type Company } from "./companyContext";

interface CompanyContextProviderProps {
  children: ReactNode;
}

export const CompanyContextProvider = ({
  children,
}: CompanyContextProviderProps) => {
  const [company, setCompany] = useState<Company>({
    name: "",
    description: "",
    id: "",
  });
  const [internshipId, setInternshipId] = useState<string | null>(null);

  return (
    <CompanyContext.Provider
      value={{
        company,
        setCompany,
        internshipId,
        setInternshipId,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

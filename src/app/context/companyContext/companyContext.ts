import { createContext, type Dispatch, type SetStateAction } from "react";

export interface Company {
  name: string;
  description: string;
  id: string;
}

interface ICompany {
  company: Company;
  setCompany: Dispatch<SetStateAction<Company>>;
  internshipId: string | null;
  setInternshipId: Dispatch<SetStateAction<string | null>>;
}

export const defaultState = {
  company: { name: "", description: "", id: "" },
  setCompany: () => {},
  internshipId: null,
  setInternshipId: () => {},
};

export const CompanyContext = createContext<ICompany>(defaultState);

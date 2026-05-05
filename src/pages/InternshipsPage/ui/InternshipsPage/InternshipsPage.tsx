import { useToTopPage } from "../../../../shared/hooks/useToTopPage";
import { Filter } from "../Filter/Filter";
import { Internship } from "../Internship/Internship";
import { Pagination } from "../Pagination/Pagination";
import { useState } from "react";
import s from "./InternshipsPage.module.scss";

export interface Internships {
  id: string;
  title: string;
  company: string;
  focusOfInternship: string;
  typeOfInternship: string;
  schedule: string;
  typeOfEmployment: string;
  durationOfInternship: string;
  salary: number;
  participants?: string[];
  skills: string;
  conditions: string;
  isActive: boolean;
  companyId: string;
  onClick: () => void;
}

interface Filter {
  schedule: string[];
  salary: string[];
  typeOfEmployment: string[];
  focusOfInternship: string[];
  currentPage: number;
}

export const InternshipsPage = () => {
  useToTopPage();

  const [internships, setInternships] = useState<Internships[]>([]);
  const [totalDocuments, setTotalDocuments] = useState<number>(0);

  const [filter, setFilter] = useState<Filter>({
    schedule: [],
    salary: [],
    typeOfEmployment: [],
    focusOfInternship: [],
    currentPage: 1,
  });

  return (
    <div className={s.wrapper}>
      <Filter
        internships={internships}
        setInternships={setInternships}
        setFilter={setFilter}
        filter={filter}
        setTotalDocuments={setTotalDocuments}
      />
      <div className={s.internships}>
        {internships.map((item: Internships) => (
          <Internship key={item.id} {...item} />
        ))}

        <Pagination
          filter={filter}
          setFilter={setFilter}
          totalDocuments={totalDocuments}
        />
      </div>
    </div>
  );
};

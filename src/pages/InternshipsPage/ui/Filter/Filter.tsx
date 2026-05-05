import { useEffect, useState } from "react";
import type { Internships } from "../InternshipsPage/InternshipsPage";
import { Checkbox } from "@mui/material";
import {
  SPECIALIZATION,
  TYPE,
  TYPE_OF_INTERNSHIP,
  WORK_SCHEDULE,
} from "./consts/consts";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_INTERNSHIPS } from "../../../../app/graphql/queries/internshipApi";
import s from "./Filter.module.scss";

interface Filter {
  schedule: string[];
  salary: string[];
  typeOfEmployment: string[];
  focusOfInternship: string[];
  currentPage: number;
}

interface SearchFilterProps {
  internships: Internships[];
  setInternships: (internships: Internships[]) => void;
  setTotalDocuments: (page: number) => void;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const Filter = (props: SearchFilterProps) => {
  const {
    // internships, //
    setInternships,
    setTotalDocuments,
    setFilter,
    filter,
  } = props;

  const [checked, setChecked] = useState(false);

  console.log(checked);

  // const { data } = useQuery(GET_FILTERED_INTERNSHIPS, {
  //   variables: {
  //     page: filter.currentPage,
  //     focusOfInternship: filter.focusOfInternship,
  //     schedule: filter.schedule,
  //     typeOfEmployment: filter.typeOfEmployment,
  //     salary: filter.salary,
  //   },
  // });

  const { data } = useQuery(GET_FILTERED_INTERNSHIPS, {
    variables: {
      page: filter.currentPage,
      limit: 5,
    },
  });

  useEffect(() => {
    if (data?.getFilteredInternships) {
      setInternships(data?.getFilteredInternships.internships);
      setTotalDocuments(data?.getFilteredInternships.numberOfPages);
    }
  }, [data, setInternships, setTotalDocuments]);

  const resetFilter = () => {
    setFilter({
      schedule: [],
      salary: [],
      typeOfEmployment: [],
      focusOfInternship: [],
      currentPage: 1,
    });
    setChecked(false);
  };

  return (
    <div className={s.wrapper}>
      <div>
        <p className={s.title}>Специализация</p>
        {SPECIALIZATION.map((item) => (
          <div key={item.id} className={s.item}>
            <Checkbox size="medium" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div>
        <p className={s.title}>Вид стажировки</p>
        {TYPE.map((item) => (
          <div key={item.id} className={s.item}>
            <Checkbox size="medium" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div>
        <p className={s.title}>График работы</p>
        {WORK_SCHEDULE.map((item) => (
          <div key={item.id} className={s.item}>
            <Checkbox size="medium" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div>
        <p className={s.title}>Тип занятости</p>
        {TYPE_OF_INTERNSHIP.map((item) => (
          <div key={item.id} className={s.item}>
            <Checkbox size="medium" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <p className={s.reset} onClick={resetFilter}>
        Сбросить фильтр
      </p>
    </div>
  );
};

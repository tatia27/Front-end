import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../app/router/path";
import type { Internships } from "../InternshipsPage/InternshipsPage";
import { InternshipInfo } from "../../../../app/entities/internshipInfo/InternshipInfo";
import FavoriteSVG from "../../../../shared/assets/favorite.svg?react";
import BannerSVG from "../../../../shared/assets/banner.svg?react";
import LocationSVG from "../../../../shared/assets/location.svg?react";
import s from "./Internship.module.scss";

export const Internship = (props: Internships) => {
  const {
    id, //
    title,
    company,
    salary,
    typeOfEmployment,
    schedule,
  } = props;

  console.log(company);

  const nav = useNavigate();

  const navigateToInternship = () =>
    nav(`${ROUTER_PATH.internships.page}/${id}`);

  return (
    <div className={s.internship} onClick={navigateToInternship}>
      <div className={s.internship__top}>
        <div className={s.internship__title}>
          <BannerSVG />
          <h5>{company}</h5>
        </div>

        <div className={s.internship__info}>
          <FavoriteSVG className={s.favorite} />
        </div>
      </div>

      <p className={s.internship__title}>{title}</p>

      <div className={s.internship__location}>
        <LocationSVG />
        <p>Таганрог</p>
      </div>

      <InternshipInfo
        salary={salary}
        typeOfEmployment={typeOfEmployment}
        schedule={schedule}
        styles={s.button}
      />

      <CustomButton
        variant="outlined"
        color="button"
        size="small"
        className={s.button}
      >
        Откликнуться
      </CustomButton>
    </div>
  );
};

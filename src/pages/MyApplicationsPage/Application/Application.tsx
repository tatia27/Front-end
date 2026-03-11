import { useNavigate } from "react-router-dom";
import type { Internships } from "../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { ROUTER_PATH } from "../../../app/router/path";
import { CustomButton } from "../../../ui/_buttons/ContainedButton/ContainedButton";
import { InternshipInfo } from "../../../app/entities/internshipInfo/InternshipInfo";
import FavoriteSVG from "../../../shared/assets/favorite.svg?react";
import BannerSVG from "../../../shared/assets/banner.svg?react";
import LocationSVG from "../../../shared/assets/location.svg?react";
import s from "./Application.module.scss";

export const Application = (props: Internships) => {
  const {
    id, //
    title,
    typeOfEmployment,
    salary,
    schedule,
    company,
  } = props;

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

          <CustomButton variant="contained" color="button" size="small">
            Откликнуться
          </CustomButton>
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
      />
    </div>
  );
};

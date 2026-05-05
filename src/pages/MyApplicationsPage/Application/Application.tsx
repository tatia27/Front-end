import { useNavigate } from "react-router-dom";
import FavoriteSVG from "../../../shared/assets/favorite.svg?react";
import BannerSVG from "../../../shared/assets/banner.svg?react";
import LocationSVG from "../../../shared/assets/location.svg?react";
import s from "./Application.module.scss";
import type { Internships } from "../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { ROUTER_PATH } from "../../../app/router/path";
import { useQuery } from "@apollo/client";
import { GET_INTERNSHIP } from "../../../app/graphql/queries/internshipApi";
import { CustomButton } from "../../../ui/_buttons/ContainedButton/ContainedButton";

export const Application = (props: Internships) => {
  const {
    id, //
  } = props;

  const nav = useNavigate();

  const { data } = useQuery(GET_INTERNSHIP, {
    variables: {
      id: id,
    },
  });

  const internship = data.getInternship;

  console.log(internship);
  const navigateToInternship = () =>
    nav(`${ROUTER_PATH.internships.page}/${id}`);

  return (
    <div className={s.internship} onClick={navigateToInternship}>
      <div className={s.internship__top}>
        <div className={s.internship__title}>
          <BannerSVG />
          {/* <h5>{company}</h5> */}
        </div>

        <div className={s.internship__info}>
          <FavoriteSVG className={s.favorite} />

          <CustomButton variant="contained" color="button" size="small">
            Откликнуться
          </CustomButton>
        </div>
      </div>

      {/* <p className={s.internship__title}>{title}</p> */}

      <div className={s.internship__location}>
        <LocationSVG />
        <p>Таганрог</p>
      </div>

      <div className={s.internship__info}>
        {/* <p className={s.internship__info__item}>
          {salary !== null ? "Оплачиваемая" : "Неоплачиваемая"}
        </p>
        <p className={s.internship__info__item}>
          {typeOfEmployment === "Full" ? "Полный день" : "Неполный день"}
        </p>
        <p className={s.internship__info__item}>
          {schedule === "Office" ? "В офисе" : "Удалённо"}
        </p> */}
      </div>
    </div>
  );
};

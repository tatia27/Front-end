import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { isAuth } from "../../../../shared/lib/isAuth";
import { ROUTER_PATH } from "../../../../app/router/path";
import { InternshipInfo } from "../../../../app/entities/internshipInfo/InternshipInfo";
import { Skill } from "../../../../app/entities/Skills/Skills";
import type { Internships } from "../../../InternshipsPage/ui/InternshipsPage/InternshipsPage";
import companySVG from "../../../../shared/assets/logoSmall.svg";
import locationSVG from "../../../../shared/assets/location.svg";
import s from "./Internship.module.scss";

export const Internship = (props: Internships) => {
  const {
    id,
    title, //
    typeOfEmployment,
    salary,
    schedule,
    company,
    tags,
  } = props;

  const nav = useNavigate();

  const isTags = tags.length > 0;

  const navigateToInternship = () => {
    const res = isAuth();
    if (res) {
      nav(`${ROUTER_PATH.internships.page}/${id}`);
    } else {
      nav(ROUTER_PATH.login.page);
    }
  };

  return (
    <div className={s.card}>
      <div className={s.cardTop}>
        <div className={s.cardTop__logo}>
          <img src={companySVG} alt="Компания" />
          <div className={s.cardTop__company}>
            <h4 className={s.title}>{company}</h4>
            <div className={s.location}>
              <img src={locationSVG} alt="Локация" />
              <span>Таганрог</span>
            </div>
          </div>
        </div>
        {/* <Favorites item={internship} /> */}
      </div>

      <div className={s.cardMiddle}>
        <span className={s.cardMiddle__title}>{title}</span>

        <InternshipInfo
          salary={salary}
          typeOfEmployment={typeOfEmployment}
          schedule={schedule}
        />

        {isTags && (
          <div className={s.skills}>
            {tags.map((item) => (
              <Skill key={item} tag={item} />
            ))}
          </div>
        )}
      </div>

      <div className={s.buttons}>
        <CustomButton variant="contained" color="button" size="small">
          Отклкикнуться
        </CustomButton>

        <CustomButton
          variant="outlined"
          color="button"
          size="small"
          onClick={navigateToInternship}
        >
          Подробнее
        </CustomButton>
      </div>
    </div>
  );
};

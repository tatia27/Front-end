import { CustomButton } from "../../../../ui/_buttons/ContainedButton/ContainedButton";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../app/router/path";
import type { Internships } from "../InternshipsPage/InternshipsPage";
import { InternshipInfo } from "../../../../app/entities/internshipInfo/InternshipInfo";
import { useContext, useEffect } from "react";
import { useUser } from "../../../../app/context/userContext/userContext";
import { APPLY_FOR_INTERNSHIP } from "../../../../app/graphql/queries/internshipApi";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { CompanyContext } from "../../../../app/context/companyContext/companyContext";
import { Skill } from "../../../../app/entities/Skills/Skills";
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
    companyId,
    tags,
  } = props;

  const { setInternshipId } = useContext(CompanyContext);

  useEffect(() => {
    setInternshipId(id);
  }, [id, setInternshipId]);

  const nav = useNavigate();

  // * Api
  const [apply] = useMutation(APPLY_FOR_INTERNSHIP);

  const { user } = useUser();
  const userRole = user?.role;
  const userId = user?.id;
  const isIntern = userRole === "intern";

  const isTheSameCompany = companyId === userId;

  const navigateToInternship = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;

    nav(`${ROUTER_PATH.internships.page}/${id}`);
  };

  const navigateToParticipants = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setInternshipId(id);

    nav(
      `${ROUTER_PATH.internships.page}/${id}/${ROUTER_PATH.internships.participants}`,
    );
  };

  const applyToInternship = async (id: string, userId: string) => {
    const internshipId = id;
    const result = await apply({
      variables: { internshipId, userId },
    });

    const internshipData = result.data?.applyForInternship;

    if (internshipData) {
      toast.info("Заявка успешно подана");
    } else {
      toast.info("Не удалось подать заявку");
    }
  };

  return (
    <div className={s.internship} onClick={navigateToInternship}>
      <div className={s.internship__top}>
        <div className={s.internship__title}>
          <BannerSVG />
          <h5>{company}</h5>
        </div>

        {isIntern && (
          <div className={s.internship__info}>
            <FavoriteSVG className={s.favorite} />
          </div>
        )}
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

      {tags.length > 0 && (
        <div className={s.skills}>
          {tags.map((item) => (
            <Skill tag={item} />
          ))}
        </div>
      )}

      {isIntern && (
        <CustomButton
          variant="outlined"
          color="button"
          size="small"
          onClick={() => userId && applyToInternship(id, userId)}
          className={s.button}
        >
          Откликнуться
        </CustomButton>
      )}

      {!isIntern && isTheSameCompany && (
        <CustomButton
          variant="outlined"
          color="button"
          size="small"
          className={s.button}
          onClick={navigateToParticipants}
        >
          Показать участников
        </CustomButton>
      )}
    </div>
  );
};

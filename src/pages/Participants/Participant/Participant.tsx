import { useQuery } from "@apollo/client";
import { GET_INTERN } from "../../../app/graphql/queries/internApi";
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner";
import { CustomButton } from "../../../ui/_buttons/ContainedButton/ContainedButton";
import UserSVG from "../../../shared/assets/logoUser.svg?react";
import s from "./Participant.module.scss";

export const Participant = ({ id }: { id: string }) => {
  // * Api
  const { data, loading } = useQuery(GET_INTERN, {
    variables: {
      id: id,
    },
  });

  if (loading || !data) return <LoadingSpinner />;

  const userInfo = data.getIntern;
  const { firstName, middleName, lastName, cv, email } = userInfo;

  return (
    <div className={s.card}>
      <div className={s.card__info}>
        <UserSVG />
        <p
          className={s.title}
        >{`${lastName} ${firstName} ${middleName || ""}`}</p>
      </div>

      <CustomButton
        variant="outlined"
        color="button"
        size="small"
        // onClick={navigateToResume}
      >
        Просмотреть
      </CustomButton>
    </div>
  );
};

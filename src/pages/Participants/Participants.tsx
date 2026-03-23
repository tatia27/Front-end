import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../shared/ui/LoadingSpinner/LoadingSpinner";
import { GET_PARTICIPANTS_OF_INTERNSHIP } from "../../app/graphql/queries/internApi";
import { Participant } from "./Participant/Participant";
import s from "./Participants.module.scss";

export const Participants = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_PARTICIPANTS_OF_INTERNSHIP, {
    variables: {
      id: id,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  const participants = data.participantsOfInternship;

  return (
    <div className={s.container}>
      <p className={s.container__title}>Участники стажировки</p>

      {participants.map((item: string) => (
        <Participant key={item} id={item} />
      ))}
    </div>
  );
};

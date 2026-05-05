import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../../app/router/path";
import { CustomButton } from "../../../../../../ui/_buttons/ContainedButton/ContainedButton";
import s from "./Card.module.scss";

type Info = "company" | "intern";

interface Props {
  title: string;
  info: Info;
}

export const Card = (props: Props) => {
  const {
    title, //
    info,
  } = props;

  const navigate = useNavigate();

  const isIntern = info === "intern";

  const navigateToRegister = () => {
    if (isIntern) {
      navigate(ROUTER_PATH.register.page + ROUTER_PATH.register.intern);
    } else {
      navigate(ROUTER_PATH.register.page + ROUTER_PATH.register.company);
    }
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>{title}</span>

      <CustomButton
        variant="contained"
        color="button"
        size="small"
        onClick={navigateToRegister}
      >
        Продолжить как {isIntern ? "стажёр" : "компания"}
      </CustomButton>
    </div>
  );
};

import s from "./Skills.module.scss";

interface Props {
  title: string;
}

export const Skills = (props: Props) => {
  const { title } = props;

  return <li className={s.skill__title}>{title}</li>;
};

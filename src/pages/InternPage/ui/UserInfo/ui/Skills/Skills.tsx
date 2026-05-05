import s from "./Skills.module.scss";

interface Props {
  title: string;
}

export const Skills = (props: Props) => {
  const { title } = props;

  return (
    <div className={s.skill}>
      <p className={s.skill__title}>{title}</p>
      <p>ffff</p>
    </div>
  );
};

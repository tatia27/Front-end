import s from "./Skills.module.scss";

export const Skill = ({ tag }: { tag: string }) => {
  const firstLetterToUppercase = tag[0].toUpperCase() + tag.slice(1);

  return <p className={s.skill}>{firstLetterToUppercase}</p>;
};

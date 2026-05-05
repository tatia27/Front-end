import type { ItemLine } from "../RunningLine/RunningLine";
import s from "./Item.module.scss";

export const Item = (props: ItemLine) => {
  const { title } = props;

  return <p className={s.wrapper}>{title}</p>;
};

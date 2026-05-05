import { useRef } from "react";
import { useGsapAnimation } from "../../hook/useGsapAnimation";
import { Item } from "../Item/Item";
import s from "./RunningLine.module.scss";

export interface ItemLine {
  id: string;
  title: string;
}

const ITEMS: ItemLine[] = [
  { id: "front-end", title: "Front-end" },
  { id: "back-end", title: "Back-end" },
  { id: "qa", title: "QA-Engineer" },
  { id: "auto", title: "Automation QA" },
  { id: "ui", title: "UI/UX designer" },
  { id: "management", title: "Management" },
  { id: "devOps", title: "DevOps" },
  { id: "mobile", title: "Mobile development" },
  { id: "game", title: "Game developer" },
  { id: "analyst", title: "Data Analyst" },
];

const shuffledItems = [...ITEMS].sort(() => Math.random() - 0.5);

export const RunningLine = () => {
  const trackRefFirst = useRef<HTMLDivElement>(null);
  const trackRefSecond = useRef<HTMLDivElement>(null);

  useGsapAnimation(trackRefFirst, {
    x: "-50%",
    duration: 28,
  });

  useGsapAnimation(trackRefSecond, {
    x: "-50%",
    duration: 30,
  });

  return (
    <div className={s.wrapper}>
      <div className={s.list} ref={trackRefFirst}>
        {ITEMS.map((item: ItemLine) => (
          <Item key={item.id} {...item} />
        ))}

        {ITEMS.map((item: ItemLine) => (
          <Item key={"copy-" + item.id} {...item} />
        ))}
      </div>

      <div className={s.list} ref={trackRefSecond}>
        {shuffledItems.map((item: ItemLine) => (
          <Item key={item.id} {...item} />
        ))}

        {shuffledItems.map((item: ItemLine) => (
          <Item key={"copy-" + item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

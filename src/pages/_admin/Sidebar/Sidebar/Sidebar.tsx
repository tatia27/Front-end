import { useState } from "react";
import { Item } from "../Item/Item";
import s from "./Sidebar.module.scss";

const ITEMS = [
  {
    id: "review",
    title: "Обзор",
  },

  {
    id: "internships",
    title: "Стажировки",
  },
  {
    id: "companies",
    title: "Компании",
  },
  {
    id: "interns",
    title: "Стажёры",
  },
];

export const Sidebar = () => {
  const [activeId, setActiveId] = useState<string | null>(ITEMS[0].id);

  return (
    <div className={s.wrapper}>
      <div className={s.menu}>
        {ITEMS.map((item) => (
          <Item
            key={item.id}
            activeId={activeId}
            setActiveId={setActiveId}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

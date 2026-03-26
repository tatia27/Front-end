import { useNavigate } from "react-router-dom";
import { type Dispatch, type SetStateAction } from "react";
import { ROUTER_PATH } from "../../../../app/router/path";
import s from "./Item.module.scss";

interface Props {
  id: string;
  title: string;
  activeId: string | null;
  setActiveId: Dispatch<SetStateAction<string | null>>;
}
export const Item = (props: Props) => {
  const {
    id, //
    title,
    activeId,
    setActiveId,
  } = props;

  const nav = useNavigate();

  const navigateToPage = () => {
    setActiveId(id);

    switch (id) {
      case "review":
        nav(ROUTER_PATH.admin.review);
        setActiveId(null);
        break;

      case "internships":
        nav(ROUTER_PATH.admin.internships);
        setActiveId(null);
        break;

      case "companies":
        nav(ROUTER_PATH.admin.companies);
        setActiveId(null);
        break;

      case "interns":
        nav(ROUTER_PATH.admin.interns);
        setActiveId(null);
        break;

      default:
        nav(ROUTER_PATH.admin.page);
    }
  };

  return (
    <div
      className={`${s.item} ${activeId && s["item-active"]}`}
      onClick={navigateToPage}
    >
      {title}
    </div>
  );
};

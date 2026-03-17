import s from "./LineTabs.module.scss";

export interface SingleTab<T = string> {
  id: T;
  name: string;
  width?: number; // individual tab width in percent
}

interface Props<T> {
  tabs: SingleTab[];
  activeTabId: T;
  setActiveTabId: (activeTabId: T) => void;
}

export const LineTabs = (props: Props) => {
  const {
    tabs, //
    activeTabId,
    setActiveTabId,
  } = props;

  // * Render
  return (
    <div className={s.wrapper}>
      <ul className={s.tabsList}>
        {tabs &&
          tabs.map((option) => (
            <li
              className={`${s.tab} ${option.id === activeTabId && s.active}`}
              key={option.id}
              onClick={() => setActiveTabId(option.id)}
            >
              {option.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

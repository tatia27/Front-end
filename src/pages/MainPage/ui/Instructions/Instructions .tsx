import user from "../../../../shared/assets/addUser.svg";
import resume from "../../../../shared/assets/resume.svg";
import letter from "../../../../shared/assets/letter.svg";
import s from "./Instructions.module.scss";

export const Instructions = () => {
  return (
    <div className={s.instructions}>
      <div className={s.instructions__item}>
        <img src={user} alt="Пользователь" className={s.user} />
        <span className={s.textRegister}>Зарегистрируйся на сайте</span>
      </div>
      <hr />

      <div className={s.instructions__item}>
        <img src={resume} alt="Резюме" />
        <span className={s.text}>Загрузи резюме</span>
      </div>
      <hr />

      <div className={s.instructions__item}>
        <img src={letter} alt="Письмо" className={s.letter} />
        <span className={s.text}>Подай заявку</span>
      </div>
    </div>
  );
};

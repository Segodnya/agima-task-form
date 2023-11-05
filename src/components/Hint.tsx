import React, { FC, SetStateAction } from "react";
import arrow from "../assets/back.svg";
import styles from "./Hint.module.css";

interface IHintProps {
  setHintDisplayed: React.Dispatch<SetStateAction<boolean>>;
}

const Hint: FC<IHintProps> = ({ setHintDisplayed }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Что написать в сообщении или файле?</h2>
      <ol className={styles.list}>
        <li className={styles.element}>
          <h3>Чем вы занимаетесь?</h3>
          <p className={styles.p}>Расскажите о своей компании.</p>
          <p className={styles.p}>Как работаете, на чем зарабатываете?</p>
          <p className={styles.p}>Кто ваши конкуренты?</p>
          <p className={styles.p}>Чем вы от них отличаетесь?</p>
        </li>
        <li className={styles.element}>
          <h3>В чем ваша задача?</h3>
          <p className={styles.p}>Чего хотите достичь в ближайшем будущем?</p>
          <p className={styles.p}>Что вам мешает?</p>
        </li>
        <li className={styles.element}>
          <h3>Каким вы видите решение задачи?</h3>
          <p className={styles.p}>Как планируете достичь своих целей?</p>
          <p className={styles.p}>Какие решения пробовали раньше?</p>
        </li>
        <li className={styles.element}>
          <h3>Какие у вас ожидания от результата?</h3>
          <p className={styles.p}>
            {" "}
            В каком виде вы хотите видеть решение вашей задачи?
          </p>
          <p className={styles.p}>В какой срок?</p>
          <p className={styles.p}>
            Почему он важен? На что это должно быть похоже?
          </p>
        </li>
        <li className={styles.element}>
          <h3>Сколько денег планируете потратить?</h3>
          <p className={styles.p}>Каков ваш бюджет?</p>
          <p className={styles.p}>
            Почему вы готовы потратить именно такую сумму?
          </p>
        </li>
      </ol>

      <button
        className={styles.button}
        onClick={() => {
          setHintDisplayed(false);
        }}
      >
        <div className={styles.imageContainer}>
          <img className={styles.image} src={arrow} alt="Вернуться к анкете" />
        </div>
        Вернуться к заполнению
      </button>
    </div>
  );
};

export default Hint;

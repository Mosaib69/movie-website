import styles from "./Buttons.module.css";

const Buttons = ({ handlePrev, handleNext }) => {
  return (
    <div className={styles.buttonsContainer}>
      <a href="#" className={styles.button} onClick={handlePrev}>
        Prev
      </a>
      <a href="#" className={styles.button} onClick={handleNext}>
        Next
      </a>
    </div>
  );
};

export default Buttons;

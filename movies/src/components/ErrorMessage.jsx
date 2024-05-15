import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <h1>No Results Found</h1>
    </div>
  );
};

export default ErrorMessage;

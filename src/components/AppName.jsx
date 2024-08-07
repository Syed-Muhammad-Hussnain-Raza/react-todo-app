import styles from "./AppName.module.css";

function AppName() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.todoHeading}>
        TODO App <small>{`(Syed Muhammad Hussnain Raza)`}</small>
      </h1>
    </div>
  );
}

export default AppName;

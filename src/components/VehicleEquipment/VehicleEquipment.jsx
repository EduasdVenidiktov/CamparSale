import css from "./VehicleEquipment.module.css";
import styles from "../VehicleType/VehicleType.module.css";

export default function VehicleEquipment() {
  return (
    <div className={css.buttonContainer}>
      <h1>Vehicle equipment</h1>
      <div className={css.buttonBox}>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          AC
        </button>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          Automatic
        </button>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          Kitchen
        </button>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          TV
        </button>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          Shower/WC
        </button>
      </div>
    </div>
  );
}

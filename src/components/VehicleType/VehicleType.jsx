import css from "./VehicleType.module.css";
import styles from "../VehicleEquipment/VehicleEquipment.module.css";
export default function VehicleType() {
  return (
    <div className={css.buttonContainer}>
      <h2>Vehicle type</h2>
      <div className={styles.separator}></div>
      <div className={css.buttonBox}>
        <button className={css.buttonText}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-camper"></use>
          </svg>
          Van
        </button>
        <button className={css.buttonText}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-camper"></use>
          </svg>
          Fully Integrated
        </button>
        <button className={css.buttonText}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-camper"></use>
          </svg>
          Alcove
        </button>
      </div>
    </div>
  );
}

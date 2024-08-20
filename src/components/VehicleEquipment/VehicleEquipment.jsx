import css from "./VehicleEquipment.module.css";
import styles from "../VehicleType/VehicleType.module.css";
import { LuShowerHead } from "react-icons/lu";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";

export default function VehicleEquipment() {
  return (
    <div className={css.buttonContainer}>
      <h3 className={css.filterText}> Filters</h3>
      <h2>Vehicle equipment</h2>
      <div className={css.separator}></div>
      <div className={css.buttonBox}>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#"></use>
          </svg>
          AC
        </button>
        <button className={styles.buttonText}>
          <TbAutomaticGearbox className={css.iconLarge} />
          Automatic
        </button>
        <button className={styles.buttonText}>
          <TbToolsKitchen2 className={css.iconLarge} />
          Kitchen
        </button>
        <button className={styles.buttonText}>
          <svg className={styles.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-TV"></use>
          </svg>
          TV
        </button>
        <button className={styles.buttonText}>
          <LuShowerHead className={css.iconLarge} />
          Shower/WC
        </button>
      </div>
    </div>
  );
}

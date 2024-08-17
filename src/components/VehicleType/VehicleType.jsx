import css from "./VehicleType.module.css";
// import styles from "../CamperCard/CamperCard.module.css";
export default function VehicleType() {
  return (
    <>
      <h1>Vehicle type</h1>
      <div className={css.buttonBox}>
        <button className={css.buttonText}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          Van
        </button>
        <button className={css.buttonText}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          Fully Integrated
        </button>
        <button className={css.buttonText}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Heart"></use>
          </svg>
          Alcove
        </button>
      </div>
    </>
  );
}

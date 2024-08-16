import css from "./CamperCard.module.css";
// import { ReactComponent as Icon } from "../images/svg/Vector.svg";
const CamperCard = ({ camper }) => {
  return (
    <div className={css.camperCard}>
      <img src={camper.gallery[0]} alt={camper.name} className={css.imgCard} />

      <div className={css.textCard}>
        <div className={css.horizontContainer}>
          <div className={css.iconPrice}>
            <h2>{camper.name}</h2>
          </div>

          <div className={css.iconPrice}>
            <h2>€{camper.price}</h2>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Heart"></use>
            </svg>
          </div>
        </div>

        <div className={css.iconLocation}>
          <svg className={css.iconStyle}>
            <use href="/src/components/images/icons.svg#icon-Vector"></use>
          </svg>
          <p>{camper.rating}</p>
          <p> {camper.location}</p>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.buttonBox}>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Users"></use>
            </svg>
            {camper.adults}
          </button>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Container"></use>
            </svg>
            {camper.children}
          </button>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Vector"></use>
            </svg>
            {camper.engine}
          </button>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Container"></use>
            </svg>
            {camper.transmission}
          </button>
        </div>

        <button type="submit" className={css.btnShowSearch}>
          Shoe more
        </button>
      </div>
    </div>
  );
};
export default CamperCard;

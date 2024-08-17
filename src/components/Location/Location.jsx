import css from "./Location.module.css";
import { GrLocation } from "react-icons/gr";

function Location() {
  return (
    <div className={css.container}>
      <p className={css.text}>Location</p>
      <div className={css.inputWrapper}>
        <GrLocation className={css.iconStyle} />
        <input className={css.inputField} type="text" placeholder="City" />
      </div>
    </div>
  );
}

export default Location;

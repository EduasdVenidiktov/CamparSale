import css from "./VehicleType.module.css";
export default function VehicleType() {
  return (
    <>
      <h1>Vehicle type</h1>
      <div className={css.buttonBox}>
        <button>Van</button>
        <button>Fully Integrated</button>
        <button>Alcove</button>
      </div>
    </>
  );
}

import css from "./VehicleEquipment.module.css";

export default function VehicleEquipment() {
  return (
    <>
      <h1>Vehicle equipment</h1>
      <div className={css.buttonBox}>
        <button>AC</button>
        <button>Automatic</button>
        <button>Kitchen</button>
        <button>TV</button>
        <button>Shower/WC</button>
      </div>
    </>
  );
}

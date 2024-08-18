import BookingForm from "./BookingForm/BookingForm";
import css from "./Features.module.css"; // Добавьте или обновите CSS файл

const Features = ({ equipment = [], camper = {} }) => {
  return (
    <div className={css.featuresContainer}>
      <div className={css.leftSection}>
        <h2>Vehicle Equipment</h2>
        <ul>
          {equipment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>Vehicle camper</h2>
        <ul>
          <li>
            <strong>Form:</strong> {camper.form}
          </li>

          <li>
            <strong>Length:</strong> {camper.length}
          </li>

          <li>
            <strong>Width:</strong> {camper.width}
          </li>

          <li>
            <strong>Height:</strong> {camper.height}
          </li>

          <li>
            <strong>Tank:</strong> {camper.tank}
          </li>
          <li>
            <strong>Consumption:</strong> {camper.consumption}
          </li>
        </ul>
      </div>
      <div className={css.rightSection}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
        <BookingForm />
      </div>
    </div>
  );
};
export default Features;

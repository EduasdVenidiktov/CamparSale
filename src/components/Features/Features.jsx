import BookingForm from "./BookingForm/BookingForm";
import css from "./BookingForm/BookingForm.module.css";

const Features = () => {
  return (
    <div className={css.featuresContainer}>
      <div>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>

        <BookingForm />
      </div>
    </div>
  );
};
export default Features;

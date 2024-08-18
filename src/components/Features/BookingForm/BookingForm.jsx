import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBooking } from "../../../redux/Booking/bookingSlice";
import styles from "../../CamperCard/CamperCard.module.css";

const initialValues = {
  Name: "",
  Email: "",
  BookingDate: "",
  Comment: "",
};

const BookingForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = nanoid();
  const bookingDateFieldId = nanoid();
  const commentFieldId = nanoid();

  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    Email: Yup.string().email("Invalid email format").required("Required"),
    BookingDate: Yup.date().required("Required").nullable(),
    Comment: Yup.string().max(500, "Comment too long").nullable(),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addBooking(values)); // Відправляє дані до Redux Store

    actions.resetForm(); // Очищає форму
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}></label>
          <Field
            className={css.field}
            type="text"
            name="Name"
            id={nameFieldId}
            placeholder="Name"
          />
          <ErrorMessage name="Name" component="p" className={css.errorMess} />
        </div>
        <div>
          <label htmlFor={emailFieldId}></label>
          <Field
            className={css.field}
            type="email"
            name="Email"
            id={emailFieldId}
            placeholder="Email"
          />
          <ErrorMessage name="Email" component="p" className={css.errorMess} />
        </div>
        <div>
          <label htmlFor={bookingDateFieldId}></label>
          <Field
            className={css.field}
            type="date"
            name="BookingDate"
            id={bookingDateFieldId}
            placeholder="Booking Date"
          />
          <ErrorMessage
            name="BookingDate"
            component="p"
            className={css.errorMess}
          />
        </div>
        <div>
          <label htmlFor={commentFieldId}></label>
          <Field
            className={css.field}
            as="textarea"
            name="Comment"
            id={commentFieldId}
            placeholder="Comment"
          />
          <ErrorMessage
            name="Comment"
            component="p"
            className={css.errorMess}
          />
          <button className={styles.btnShowSearch} type="submit">
            Send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;

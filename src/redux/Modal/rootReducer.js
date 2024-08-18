import { combineReducers } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice"; // Імпортуйте ваш bookingReducer

// Додайте інші редуктори тут, якщо є
// import anotherReducer from "./anotherReducer";

const rootReducer = combineReducers({
  booking: bookingReducer, // Додайте bookingReducer сюди
  // Додайте інші редуктори, якщо є
  // another: anotherReducer,
});

export default rootReducer;

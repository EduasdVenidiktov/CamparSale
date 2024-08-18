import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    formData: {
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    },
    errors: {},
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearForm: (state) => {
      state.formData = {
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      };
      state.errors = {};
    },
  },
});

export const { updateFormData, setErrors, clearForm } = bookingSlice.actions;
export default bookingSlice.reducer;

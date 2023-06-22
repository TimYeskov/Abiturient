import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  firstNameError: "",
  lastName: "",
  lastNameError: "",
  mail: "",
  mailError: "",
  password: "",
  passwordError: "",
  repeatPassword: "",
  repeatPasswordError: "",
  group: 0,
};

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload;
      if (state.firstName.trim() === "") {
        state.firstNameError = "";
      } else if (!/^\p{L}+$/u.test(state.firstName)) {
        state.firstNameError = "Пожалуйста, введите  буквы";
      } else {
        state.firstNameError = "";
      }
    },
    setLastName(state, action) {
      state.lastName = action.payload;
      if (state.lastName.trim() === "") {
        state.lastNameError = "";
      } else if (!/^\p{L}+$/u.test(state.lastName)) {
        state.lastNameError = "Пожалуйста, введите  буквы";
      } else {
        state.lastNameError = "";
      }
    },
    setMail(state, action) {
      state.mail = action.payload;
      if (state.mail.trim() === "") {
        state.mailError = "";
      } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/u.test(state.mail)) {
        state.mailError = "-";
      } else {
        state.mailError = "";
      }
    },
    setPassword(state, action) {
      state.password = action.payload;
      if (state.password.trim() === "") {
        state.passwordError = "";
      } else if (action.payload.length < 8) {
        state.passwordError = "Не менее 8 символов";
      } else {
        state.passwordError = "";
      }
    },
    setRepeatPassword(state, action) {
      state.repeatPassword = action.payload;
      if (state.repeatPassword.trim() === "") {
        state.repeatPasswordError = "";
      } else if (action.payload !== state.password) {
        state.repeatPasswordError = "-";
      } else {
        state.repeatPasswordError = "";
      }
    },
    setGroup(state, action) {
      state.group = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFirstName,
  setLastName,
  setMail,
  setPassword,
  setRepeatPassword,
} = signUpSlice.actions;

export default signUpSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  userList: [],
};

const counter = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
    setNumber: (state, action) => {
      return { ...state, count: action.payload };
    },
  },
});

export default counter.reducer;

export const { decrement, increment, setNumber } = counter.actions;

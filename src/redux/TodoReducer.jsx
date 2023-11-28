import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: { today: [], tomorrow: [], week: [] },
  reducers: {
    addtodayTask: (state, action) => {
      state.today = [
        ...state.today,
        { id: uuidv4(), name: action.payload, completed: false },
      ];
    },

    removetodayTask: (state, action) => {
      state.today = state.today.filter((e) => e.id !== action.payload);
    },

    modifytodayTask: (state, action) => {
      state.today = state.today.map((e) =>
        e.id === action.payload ? { ...e, completed: !e.completed } : e
      );
    },
    //Tomorrow Tasks :
    addtomorrowTask: (state, action) => {
      state.tomorrow = [
        ...state.tomorrow,
        { id: uuidv4(), name: action.payload, completed: false },
      ];
    },

    removetomorrowTask: (state, action) => {
      state.tomorrow = state.tomorrow.filter((e) => e.id !== action.payload);
    },

    modifytomorrowTask: (state, action) => {
      state.tomorrow = state.tomorrow.map((e) =>
        e.id === action.payload ? { ...e, completed: !e.completed } : e
      );
    },
    //this week tasks :
    addweekTask: (state, action) => {
      state.week = [
        ...state.week,
        { id: uuidv4(), name: action.payload, completed: false },
      ];
    },

    removeweekTask: (state, action) => {
      state.week = state.week.filter((e) => e.id !== action.payload);
    },

    modifyweekTask: (state, action) => {
      state.week = state.week.map((e) =>
        e.id === action.payload ? { ...e, completed: !e.completed } : e
      );
    },
  },
});


export const {
  //today Actions
  addtodayTask,
  removetodayTask,
  modifytodayTask,
  //tomorrow Actions
  addtomorrowTask,
  removetomorrowTask,
  modifytomorrowTask,
  //week Actions
  addweekTask,
  removeweekTask,
  modifyweekTask
} = todoSlice.actions;
export default todoSlice.reducer;

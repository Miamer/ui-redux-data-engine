import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from 'dayjs';
import { RootState } from "../../app/store";

export interface IinputForm {
  city: string;
  dateRef: Dayjs;
  years: number[];
  CminDay: boolean;
  CmaxDay: boolean;
  rangeForecastWeather: number;
}

const initialState: IinputForm = {
  city: "London, UK",
  dateRef: dayjs('2022-01-01T01:00:00'),
  years: [2000, 2022],
  CminDay: true,
  CmaxDay: true,
  rangeForecastWeather: 3,
};

export const inputFormSlice = createSlice({
  name: "inputForm",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    addDateRef: (state, action: PayloadAction<Dayjs>) => {
      state.dateRef = action.payload;
    },
    addYears: (
      state,
      action: PayloadAction<number[]>
    ) => {
      state.years[0] = action.payload[0];
      state.years[1] = action.payload[1];
    },
    addCminDay: (state) => {
      state.CminDay = !state.CminDay;
    },
    addCmaxDay: (state) => {
      state.CmaxDay = !state.CmaxDay;
    },
    addRangeForecastWeather: (state, action: PayloadAction<number>) => {
      state.rangeForecastWeather = action.payload;
    },
  },
});

export const {
  addCity,
  addDateRef,
  addYears,
  addCminDay,
  addCmaxDay,
  addRangeForecastWeather,
} = inputFormSlice.actions;

export const inputForm = (state: RootState) => state.inputForm;

export default inputFormSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RatesInitialState {
  defaultRate: number
  extraRate: number
  holidayRate: number
  sickRate: number
}

const initialState: RatesInitialState = {
  defaultRate: 300,
  extraRate: 400,
  holidayRate: 400,
  sickRate: 60
}

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setDefaultRate: (state, action: PayloadAction<number>) => {
      state.defaultRate = action.payload
    },
    setExtraRate: (state, action: PayloadAction<number>) => {
      state.extraRate = action.payload
    },
    setHolidayRate: (state, action: PayloadAction<number>) => {
      state.holidayRate = action.payload
    },
    setSickRate: (state, action: PayloadAction<number>) => {
      state.sickRate = action.payload
    }
  }
})

export const { setDefaultRate, setExtraRate, setHolidayRate, setSickRate } = ratesSlice.actions
export default ratesSlice.reducer


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RatesInitialState {
  defaultRate: number
  extraRate: number
  montageRate: number
  montageExtraRate: number
  pauseRate: number
  sickRate: number
}

const initialState: RatesInitialState = {
  defaultRate: 350,
  extraRate: 450,
  montageRate: 400,
  montageExtraRate: 500,
  pauseRate: 250,
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
    setMontageRate: (state, action: PayloadAction<number>) => {
      state.montageRate = action.payload
    },
    setMontageExtraRate: (state, action: PayloadAction<number>) => {
      state.montageExtraRate = action.payload
    },
    setPauseRate: (state, action: PayloadAction<number>) => {
      state.pauseRate = action.payload
    },
    setSickRate: (state, action: PayloadAction<number>) => {
      state.sickRate = action.payload
    }

  }
})

export const { setDefaultRate, setExtraRate, setPauseRate, setSickRate, setMontageExtraRate, setMontageRate } = ratesSlice.actions
export default ratesSlice.reducer

import dayjs from 'dayjs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PopupState {
  isOpen: boolean
  data: DayMenuData | null
  callback: ((value: 1 | 2 | 3 | 4) => void) | null
  extraCallback: ((value: number) => void) | null
}

export interface MonthFilterState {
  showMonth: number
  showType: number
  showOne: boolean
}

export interface AppInitialState {
  isMenuOpen: boolean
  popup: PopupState
  monthFilter: MonthFilterState
  showAbout: boolean
}

export interface DayMenuData {
  currActivity: null | 1 | 2 | 3 | 4
  currDay: number
  currDayIndex: number
  currExtra: number
  currHDay: boolean
  currMoney: number
  currMonth: number
  currI: number
}

export interface TogglePopupPayload {
  isOpen: boolean
  data?: DayMenuData | null
  callback?: ((value: 1 | 2 | 3 | 4) => void) | null
  extraCallback?: ((value: number) => void) | null
}

export interface ToggleFilterPayload {
  showMonth: number
  showType: number
  showOne: boolean
}

const init: AppInitialState = {
  isMenuOpen: false,
  popup: { isOpen: false, data: null, callback: null, extraCallback: null },
  monthFilter: { showMonth: dayjs().month(), showType: 0, showOne: false },
  showAbout: true
}

export const appSlice = createSlice({
  name: 'app',
  initialState: init,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    togglePopup: (state, action: PayloadAction<TogglePopupPayload>) => {
      state.popup.isOpen = action.payload.isOpen
      state.popup.data = action.payload.data ?? null
      state.popup.callback = action.payload.callback ?? null
      state.popup.extraCallback = action.payload.extraCallback ?? null
    },
    setFilter: (state, action: PayloadAction<ToggleFilterPayload>) => {
      state.monthFilter.showMonth = action.payload.showMonth
      state.monthFilter.showType = action.payload.showType
      state.monthFilter.showOne = action.payload.showOne
    },
    toggleAbout: (state) => {
      state.showAbout = !state.showAbout
    }

  }
})

export const { toggleMenu, togglePopup, setFilter, toggleAbout } = appSlice.actions
export default appSlice.reducer

import dayjs from 'dayjs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PopupState {
  isOpen: boolean
  data: string | null
  callBack: (() => void) | null
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

export interface TogglePopupPayload {
  isOpen: boolean
  data: string
  callback: () => void
}

export interface ToggleFilterPayload {
  showMonth: number
  showType: number
  showOne: boolean
}

const init: AppInitialState = {
  isMenuOpen: false,
  popup: { isOpen: false, data: null, callBack: null },
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
      state.popup.isOpen = !state.popup.isOpen
      state.popup.data = action.payload.data
      state.popup.callBack = action.payload.callback
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

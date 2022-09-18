
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { YearType } from '../../types/calendar'
export interface CalendarInitialState {
  calendar: YearType
}

const initialState: CalendarInitialState = {
  calendar: []
}
export interface SetDayPayload {
  month: number
  day: number
  activity: null | 1 | 2 | 3 | 4
  extra: number | null
  i?: number
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDay: (state, { payload }: PayloadAction<SetDayPayload>) => {
      const m = payload.month ?? 0
      const i = payload.i ?? 0
      state.calendar[m][i] = { ...state.calendar[m][i], activity: payload.activity, extra: payload.extra }
    },
    resetCalendar: (state, action: PayloadAction<YearType>) => {
      state.calendar = action.payload
    }
  }
})

export const { setDay, resetCalendar } = calendarSlice.actions
export default calendarSlice.reducer

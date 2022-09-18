
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
  activity: number
  extra: boolean
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDay: (state, { payload }: PayloadAction<SetDayPayload>) => {
      state.calendar.forEach((month, monthIndex) => {
        if (monthIndex === payload.month) {
          month.forEach((day) => {
            if (day.day === payload.day) {
              day.month = payload.month
              day.activity = payload.activity
              day.extra = payload.extra
            }
          })
        }
      })
    },
    resetCalendar: (state, action: PayloadAction<YearType>) => {
      state.calendar = action.payload
    }

  }
})

export const { setDay, resetCalendar } = calendarSlice.actions
export default calendarSlice.reducer

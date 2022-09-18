export interface DayType {
  hDay: boolean
  day: number | null
  dayIndex?: number
}

export type MonthType = DayType[]

export type YearType = MonthType[]

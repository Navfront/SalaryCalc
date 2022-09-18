export interface DayType {
  hDay: boolean
  day: number | null
  dayIndex?: number
  month?: number
  activity?: number
  extra?: boolean
}

export type MonthType = DayType[]

export type YearType = MonthType[]

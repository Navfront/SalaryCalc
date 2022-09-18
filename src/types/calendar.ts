export interface DayType {
  hDay: boolean | null
  day: number | null
  dayIndex?: number
  month?: number
  activity?: number
  extra?: boolean
  money?: number
  hday?: boolean | null
}

export type MonthType = DayType[]

export type YearType = MonthType[]

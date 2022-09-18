export interface DayType {
  i?: number
  hDay: boolean | null
  day: number | null
  dayIndex?: number
  month?: number
  activity?: null | 1 | 2 | 3 | 4
  extra?: number | null
  money?: number
  hday?: boolean | null
}

export type MonthType = DayType[]

export type YearType = MonthType[]

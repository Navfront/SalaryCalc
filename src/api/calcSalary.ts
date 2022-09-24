import { MONTHS } from '../mocks/mocks'
import { RatesInitialState } from '../redux/slices/rates-slice'
import { DayType } from './../types/calendar'

const calcSalary = async (monthNumber = 0, rates: RatesInitialState, monthData: DayType[]): Promise<string> => {
  const { defaultRate, extraRate, sickRate, pauseRate, montageExtraRate, montageRate } = rates

  return await new Promise((resolve, reject) => {
    if (defaultRate === 0) {
      reject(new Error(`Ошибка подсчета ${MONTHS[monthNumber]}`))
    }
    let salary = 0
    monthData.forEach((dayItem) => {
      if (dayItem?.activity !== null && dayItem?.activity !== undefined && dayItem.activity > 0) {
        switch (dayItem.activity) {
          case 1:
            // выходной день каждый обычный час - переработка
            if (dayItem.hDay !== undefined && (dayItem.hDay ?? true) && (typeof dayItem.extra !== 'undefined')) {
              salary = salary + Math.round(8 * extraRate + (Number(dayItem.extra) * extraRate))
              break
            }

            // Обычные 8 + переработка extra
            salary =
                Number(dayItem.extra) > 0
                  ? salary + Math.round(8 * defaultRate + Number(dayItem.extra) * extraRate)
                  : Math.round(salary + 8 * defaultRate)
            break

          case 2:
            // болезнь
            salary = salary + Math.round(((8 * defaultRate) / 100) * sickRate)
            break

          case 3:
            // отпуск
            salary = salary + Math.round(8 * defaultRate)
            break

          case 4:
            // простой
            salary = salary + Math.round((8 * pauseRate))
            break

          default:
            // выходной день каждый монтаж час - монтаж переработка
            if (dayItem.hDay !== undefined && (dayItem.hDay ?? true) && (typeof dayItem.extra !== 'undefined')) {
              salary = salary + Math.round(8 * montageExtraRate + (Number(dayItem.extra) * montageExtraRate))
              break
            }

            // монтаж 8 + монтаж переработка extra
            salary =
              Number(dayItem.extra) > 0
                ? salary + Math.round(8 * montageRate + Number(dayItem.extra) * montageExtraRate)
                : Math.round(salary + 8 * montageRate)
            break
        }
      }
    })
    resolve(`Зарплата за ${MONTHS[monthNumber]}:${salary}`)
  })
}

export default calcSalary

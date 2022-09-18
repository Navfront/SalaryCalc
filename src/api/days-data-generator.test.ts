/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import DaysDataGenerator from './days-data-generator'
import { twentytwo } from '../mocks/mocks'

const dIns = new DaysDataGenerator()

const TWTWO =
  '11111111100000110000011000001100000110000011000001100100110000001110001100000110000011000001100000110000011000001100000111100011110001100000110000011000001100000111000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100000110000011000001100001110000011000001100000110000011000001100000110000011000001'

describe('Тест класса генерации данных', () => {
// -----------------------------------------------------------------------------
  // test('Фетч выходных дней ок', async () => {
  //   const fResult = await dIns._getHolidaysFetch(2022)
  //   expect(fResult).toEqual(TWTWO)
  // })

  // -----------------------------------------------------------------------------
  // test('Читаем данные с локалстора или фетчим', async () => {
  //   expect(await dIns._getLocalHolidaysData(2022)).toEqual(TWTWO)
  // })

  // -----------------------------------------------------------------------------
  test('Создаем правильные данные на год', async () => {
    expect(JSON.stringify(await dIns.getData())).toEqual(JSON.stringify(twentytwo))
  })
})

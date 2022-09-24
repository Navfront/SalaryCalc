import dayjs from 'dayjs'
import { useAppDispatch, useAppSelector } from './../../../redux/reduxHooks'
import { setFilter } from '../../../redux/slices/app-slice'
import { StyledMonthFilter } from './styled'
import { MONTHS } from '../../../mocks/mocks'

function MonthFilter (): JSX.Element {
  const filter = useAppSelector(state => state.app.monthFilter)
  const currentMonth = dayjs().month()
  const dispatch = useAppDispatch()

  return (
    <StyledMonthFilter>
      <h3 className='visually-hidden'>Фильтр по месяцам</h3>
      <form action="#" method="get">
        <div className="monthFilterWrapper">
          <button
          aria-label='Показать все месяца'
            type="button" onClick={() =>
              dispatch(setFilter({
                showMonth: 0,
                showType: 0,
                showOne: false
              }))
          }>
            Все месяца
          </button>
          <button
            aria-label='Показать текущий месяц.'
            type="button"
            onClick={() =>
              dispatch(setFilter({
                showMonth: currentMonth,
                showType: 2,
                showOne: true
              }))
            }
          >
            Текущий
          </button>
          <button
            aria-label='Показать текущий месяц и предыдущий.'
            type="button"
            onClick={() =>
              dispatch(setFilter({
                showMonth: currentMonth,
                showType: 1,
                showOne: false
              }))
            }
          >
            Тек.+ пред.
          </button>
        </div>
        {filter.showType > 0 &&
          <select
          size={1}
          onChange={(evt) =>
            dispatch(setFilter({
              showMonth: Number(evt.currentTarget.value),
              showType: 2,
              showOne: false
            }))
          }
          defaultValue={currentMonth}
        >
          { MONTHS.map((item, index) => (
            <option key={`${index}option`} value={index}>
              {item}
            </option>
          ))}
        </select>
          }
      </form>
      {filter.showType > 0
        ? <div className="monthFilterNextWrapper">
          <button
            aria-label='Предыдущий месяц'
            disabled={filter.showMonth === 0}
            type="button"
            className="buttonToLeft"
            onClick={() =>
              dispatch(setFilter({
                showMonth: filter.showMonth - 1,
                showType: filter.showType,
                showOne: filter.showOne
              }))
            }
          >
            Предыдущий
          </button>
          <button
            aria-label='Следующий месяц'
            disabled={filter.showMonth > 10}
            type="button"
            className="buttonToRight"
            onClick={() =>
              dispatch(setFilter({
                showMonth: filter.showMonth + 1,
                showType: filter.showType,
                showOne: filter.showOne
              }))
            }
          >
            Следующий
    </button>
          </div >
        : ''}

    </StyledMonthFilter>
  )
}

export default MonthFilter

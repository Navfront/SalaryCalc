import { StyledMonthFilter } from './styled'
import { MONTHS } from '../../../mocks/mocks'
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilterShow } from '../../../redux/actions';
// import moment from 'moment'

function MonthFilter (): JSX.Element {
  // const showObj = useSelector((state) => state.appReducer.monthFilter)
  // const currentMonth = moment().month()
  const currentMonth = 0
  // const handlerOnFilter = useDispatch()

  return (
    <StyledMonthFilter>
      <h3 className='visually-hidden'>Фильтр по месяцам</h3>
      <form action="#" method="get">
        <div className="monthFilterWrapper">
          <button type="button" onClick={() =>
            console.log('click')
            // handlerOnFilter(setFilterShow({ showMonth: 0, showType: 0 }))

          }>
            Все месяца
          </button>
          <button
            type="button"
            onClick={() =>
              console.log('click')
              // handlerOnFilter(setFilterShow({ showMonth: currentMonth, showType: 2 }))
            }
          >
            Текущий
          </button>
          <button
            type="button"
            onClick={() =>
              console.log('click')
              // handlerOnFilter(setFilterShow({ showMonth: currentMonth, showType: 1 }))
            }
          >
            Тек.+ пред.
          </button>
        </div>
        <select
          size={1}
          onChange={(evt) =>
            console.log('click')
            // handlerOnFilter(setFilterShow({ showMonth: Number(evt.target.value), showType: 2 }))
          }
          defaultValue={currentMonth}
        >
          {MONTHS.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      </form>
      {/* {showObj.showType > 0
        ? (
        <div className="monthFilterNextWrapper">
          <button
            disabled={showObj.showMonth === 0}
            type="button"
            className="buttonToLeft"
            onClick={() =>
              console.log('click')
              handlerOnFilter(setFilterShow({ showMonth: Number(showObj.showMonth) - 1, showType: showObj.showType }))
            }
          >
            Предыдущий
          </button>
          <button
            disabled={showObj.showMonth > 10}
            type="button"
            className="buttonToRight"
            onClick={() =>
              console.log('click')
              handlerOnFilter(setFilterShow({ showMonth: Number(showObj.showMonth) + 1, showType: showObj.showType }))
            }
          >
            Следующий
          </button>
        </div>
          )
        : null} */}
    </StyledMonthFilter>
  )
}

export default MonthFilter

import IndexPage from './pages/index/indexPage'
import defaultTheme from './theme/defaultTheme'
import { BodyWrapper } from './theme/bodyWrapper'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../redux/store'
import { useEffect } from 'react'
import { resetCalendar } from '../redux/slices/calendar-slice'
import { twentytwo } from '../mocks/mocks'
import { useAppDispatch } from './../redux/reduxHooks'
import dayjs from 'dayjs'

function App (): JSX.Element {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const currentYear = dayjs().year().toString()
    if (localStorage.getItem(`persist:${currentYear}`) === null) {
      dispatch(resetCalendar(twentytwo))
    }
  }, [])

  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={defaultTheme}>
        <BodyWrapper >
          <IndexPage />
        </BodyWrapper>
      </ThemeProvider>
    </PersistGate>
  )
}

export default App

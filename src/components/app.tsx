import IndexPage from './pages/index/indexPage'
import defaultTheme from './theme/defaultTheme'
import { BodyWrapper } from './theme/bodyWrapper'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../redux/store'

function App (): JSX.Element {
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

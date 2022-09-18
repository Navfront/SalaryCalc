import IndexPage from './pages/index/indexPage'
import defaultTheme from './theme/defaultTheme'
import { BodyWrapper } from './theme/bodyWrapper'
import { ThemeProvider } from 'styled-components'

function App (): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <BodyWrapper scrollOff={popupObject.isOpen}> */}
      <BodyWrapper >
        <IndexPage />
      </BodyWrapper>
    </ThemeProvider>
  )
}

export default App

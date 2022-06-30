import { styled } from './theme/theme'
import MainPage from './page/MainPage'

const AppContainer = styled('section', {
  width: '100vw',
  minWidth: '1200px',
})

function App() {
  return (
    <AppContainer className="App">
      <MainPage />
    </AppContainer>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.js'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import SignUp from './pages/SignUp/signUp.jsx'
// import SigIn from './pages/SigIn/sigIn.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      {/* <SigIn/> */}
      <SignUp/>
      <GlobalStyles/>
    </StrictMode>
  </ThemeProvider>
)

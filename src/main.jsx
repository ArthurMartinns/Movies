import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import SigIn from './pages/SigIn/sigIn.jsx'
import GlobalStyles from './styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SigIn/>
    <GlobalStyles/>
  </StrictMode>,
)

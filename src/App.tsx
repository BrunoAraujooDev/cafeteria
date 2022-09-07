import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { MenuContextProvider } from "./context/MenuContext"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MenuContextProvider>
          <Router/>
        </MenuContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

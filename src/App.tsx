import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"


function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>pode pah meu</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

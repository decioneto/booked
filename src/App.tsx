import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { SearchContextProvider } from './context/SearchContext'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </SearchContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

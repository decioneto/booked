import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import { SearchPage } from './Pages/Searchpage'
import { MainPage } from './Pages/MainPage'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <MainPage /> }/>
            <Route path="/search/:q" element={ <SearchPage /> }/>
          </Routes>
        </BrowserRouter>

        <GlobalStyle />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

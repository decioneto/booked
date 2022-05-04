import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import SearchPage from './Pages/Searchpage'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        {/* <MainPage /> */}

        <SearchPage />

        <GlobalStyle />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import { MainPage } from './Pages/MainPage'
import { SearchPage } from './Pages/Searchpage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <MainPage /> }/>
      <Route path="/search/:q" element={ <SearchPage /> }/>
      <Route path="/search/:q/details/:bookId" element={ <div>detalhes</div> }/>
    </Routes>
  )
}
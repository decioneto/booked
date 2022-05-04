import Header from '../../components/Header'
import Searchlist from '../Searchlist'

import {
  Container
} from './styles'

function SearchPage() {
  return (
    <Container>
      <Header />

      <Searchlist />
    </Container>
  )
}

export default SearchPage
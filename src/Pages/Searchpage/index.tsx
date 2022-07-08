import { Header } from '../../components/Header'
import { Searchlist } from '../../components/Searchlist'

import {
  Container
} from './styles'

export function SearchPage() {
  return (
    <Container>
      <Header />
      <Searchlist />
    </Container>
  )
}
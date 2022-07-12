import { CardItem } from '../CardItem'
import { FilterBox } from '../FilterBox'
import { Container, CardGrid } from './styles'

export function Searchlist() {
  return (
    <Container>
      <FilterBox />
      
      <CardGrid>
        <CardItem />
        <CardItem />
        <CardItem />
      </CardGrid>
    </Container>
  )
}


import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Searchlist } from '../../components/Searchlist'
import { Container } from '../../styles/componentStyles'

export function SearchPage() {
  return (
    <Container>
      <Header />
      <Searchlist />
      <Footer />
    </Container>
  )
}
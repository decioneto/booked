import { SearchInput } from "../../components/SearchInput"

import LogoImage from '../../assets/images/logo-light.png'
import CanvasImage from '../../assets/images/Draw.png'

import {
  Container,
  MainPageContainer,
  Logo,
  Title,
  Canvas
} from './styles'

export function MainPage() {
  const imageURL = String(CanvasImage);

  return (
    <Container>
      <MainPageContainer>
        <Logo>
          <img src={LogoImage} alt="" />
        </Logo>

        <Title>
          <p>What do you want to</p>
          <p>read?</p>
        </Title>

        <SearchInput autoWidth isHome/>        

      </MainPageContainer>
      
      <Canvas imagem={imageURL}/>
    </Container>
  )
}
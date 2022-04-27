import SearchInput from "../../components/SearchInput"

import LogoImage from '../../assets/images/logo-light.png'
import CanvasImage from '../../assets/images/Draw.png'

import {
  Container,
  MainPageContainer,
  Logo,
  Title,
  Separator,
  Canvas
} from './styles'

function MainPage() {
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

        <SearchInput autoWidth />        

      </MainPageContainer>
      
      <Canvas imagem={imageURL}/>
    </Container>
  )
}

export default MainPage
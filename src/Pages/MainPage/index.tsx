import SearchInput from "../../components/SearchInput"

import LogoImage from '../../assets/images/logo-light.png'
import CanvasImage from '../../assets/images/Draw.png'

import {
  Container,
  MainPageContainer,
  Logo,
  Title,
  Separator,
  LoginBox,
  LoginButton,
  Canvas
} from './styles'

function MainPage() {
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

        <SearchInput />        
        <Separator />

        <LoginBox>
          <h5>Not Logged yet?</h5>
          <p>
            Login with your google account and descover, save and make your
            own library to keep your reading organized.
          </p>

          <LoginButton>
            <img src="" alt="" />
            Sign in with Google
          </LoginButton>
        </LoginBox>
      </MainPageContainer>
      
      <Canvas imagem=""/>
    </Container>
  )
}

export default MainPage
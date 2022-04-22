import LogoImage from '../../assets/images/logo-light.png'
import CanvasImage from '../../assets/images/Draw.png'
import GoogleIcon from '../../assets/images/google.png'

import {
  Container,
  MainPageContainer,
  Logo,
  Title,
  SearchComponent,
  Separator,
  LoginBox,
  LoginButton,
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

        <SearchComponent />        
        <Separator />

        <LoginBox>
          <h5>Not logged yet?</h5>
          <p>
            Login with your google account and descover, save and make your
            own library to keep your reading organized.
          </p>

          <LoginButton>
            <img src={GoogleIcon} alt="" />
            Sign in with Google
          </LoginButton>
        </LoginBox>
      </MainPageContainer>
      
      <Canvas imagem={imageURL}/>
    </Container>
  )
}

export default MainPage
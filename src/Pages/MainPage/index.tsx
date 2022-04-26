import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import SearchInput from "../../components/SearchInput"
import UserBox from "../../components/UserBox"

import LogoImage from '../../assets/images/logo-light.png'
import CanvasImage from '../../assets/images/Draw.png'
import GoogleIcon from '../../assets/images/google.png'

import {
  Container,
  MainPageContainer,
  Logo,
  Title,
  Separator,
  LoginBox,
  LinkLogout,
  LoginButton,
  Canvas
} from './styles'

function MainPage() {
  const { signInWithGoogle, user, logout } = useContext(AuthContext)
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
        <Separator />

        {
          user
            ? (
              <LoginBox>
                <UserBox />
                <LinkLogout onClick={logout}>
                  Sign out
                </LinkLogout>
              </LoginBox>
            )
            : (
              <LoginBox>
                <h5>Not logged yet?</h5>
                <p>
                  Login with your google account and discover, save and make your
                  own library to keep your reading organized.
                </p>

                <LoginButton onClick={signInWithGoogle}>
                  <img src={GoogleIcon} alt="" />
                  Sign in with Google
                </LoginButton>
              </LoginBox>
            )
        }
      </MainPageContainer>
      
      <Canvas imagem={imageURL}/>
    </Container>
  )
}

export default MainPage
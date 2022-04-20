import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Switch from '@radix-ui/react-switch'
import SearchInput from '../SearchInput'

import logoLight from '../../assets/images/logo-light.png'
import logoDark from '../../assets/images/logo-dark.png'

import { 
  Container, 
  LogoHeader, 
  LoginButton,
  Avatar,
  AvatarImage 
} from './styles'

function Header() {
  return (
    <Container>
      <LogoHeader>
        <img 
          src={logoLight} 
          alt="Logotype being a open book on the left with the text Bokeed on the right" 
        />

        <LoginButton href='/login' inMobile>Login with Google</LoginButton>
      </LogoHeader>
      
      <SearchInput />

      <LoginButton href='/login'>Login with Google</LoginButton>

      {/* <DropdownMenu.Root>
        <BtnLogin>
          <Avatar>
            <span>Login with Google</span>
            <AvatarImage></AvatarImage>
          </Avatar>
        </BtnLogin>

        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <label htmlFor="theme-switch">
              Dark mode
            </label>
            <Switch.Root>
              <Switch.Thumb id='theme-switch' />
            </Switch.Root>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root> */}

    </Container>
  )
}

export default Header
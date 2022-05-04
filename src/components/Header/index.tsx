import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import SearchInput from '../SearchInput'
import UserBox from '../UserBox'

import logoLight from '../../assets/images/logo-light.png'
import GoogleIcon from '../../assets/images/google.png'
import logoDark from '../../assets/images/logo-dark.png'

import { 
  Container, 
  LogoHeader,
  LoginButton,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuArrow,
  SwitchRoot,
  SwitchThumb

} from './styles'

function Header() {
  const { signInWithGoogle, user, logout } = useContext(AuthContext)

  return (
    <Container>
      <LogoHeader>
        <img 
          src={logoLight} 
          alt="Logotype being a open book on the left with the text Bokeed on the right" 
        />

        {
          user
            ? (
              <DropdownMenuRoot>
                <DropdownMenuTrigger isMobile>
                  <UserBox user={user} />
                </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem disabled>
                  <label htmlFor="theme-switch">
                    Dark mode
                  </label>
                  <SwitchRoot onChange={() => {}}>
                    <SwitchThumb id='theme-switch' />
                  </SwitchRoot>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <span className='btn-logout'>Logout</span>
                </DropdownMenuItem>
                <DropdownMenuArrow height={0} />
              </DropdownMenuContent>
            </DropdownMenuRoot>
            )
            : (
              <LoginButton onClick={signInWithGoogle} className="mobile">
                Sign in with Google
              </LoginButton>
            )
        }
      </LogoHeader>
      
      <SearchInput />

      {
        user
          ? (
            <DropdownMenuRoot>
              <DropdownMenuTrigger>
                <UserBox user={user} />
              </DropdownMenuTrigger>

            <DropdownMenuContent>
            <DropdownMenuArrow />
              <DropdownMenuGroup>
                <DropdownMenuItem disabled>
                  <label htmlFor="theme-switch">
                    Dark mode
                  </label>
                  <SwitchRoot onChange={() => {}}>
                    <SwitchThumb id='theme-switch' />
                  </SwitchRoot>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                <span className='btn-logout'>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuRoot>
          )
          : (
            <LoginButton onClick={signInWithGoogle} className="web">
              Sign in with Google
            </LoginButton>
          )
      }

    </Container>
  )
}

export default Header
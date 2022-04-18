import * as Label from '@radix-ui/react-label'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Switch from '@radix-ui/react-switch'

import logoLight from '../../assets/images/logo-light.png'
import logoDark from '../../assets/images/logo-dark.png'
import searchIcon from '../../assets/images/search.svg'

import { 
  Container, 
  LogoHeader, 
  SearchInputContainer,
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
      </LogoHeader>
      
      <SearchInputContainer>
        <Label.Root htmlFor='main-search'>Search</Label.Root>
        <input 
          type="text" 
          name="main-search" 
          id="main-search" 
          className='form-input'
          placeholder='Search by author, book name...'
        />
        <div className='icon-search'>
          <img src={searchIcon} alt="Search icon" />
        </div>
      </SearchInputContainer>

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
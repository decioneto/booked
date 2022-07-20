import { UserData } from '../../context/AuthContext'
import { Container } from'./styles'

interface UserBoxProps{
  user : UserData
}

export function UserBox({ user }: UserBoxProps) {

  return (
    <Container>
      <img src={user?.avatar} alt="Avatar" referrerPolicy="no-referrer"/>
      <p>{user?.name}</p>
    </Container>
  )
}
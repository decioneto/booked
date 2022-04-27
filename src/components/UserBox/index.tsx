import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import { Container } from'./styles'

function UserBox() {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <img src={String(user?.avatar)} alt="Avatar image" />
      <p>{user?.name}</p>
    </Container>
  )
}

export default UserBox
import { useState } from 'react'
import Card from '../components/Card'
import Container from '../components/Container'
import Title from '../components/Title'
import Input from '../components/Input'
import MainButton from '../components/Button'
import TopbarLogin from '../components/TopbarLogin'
import { withRouter, useHistory } from "react-router"

const Login = props => {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    const { user, password } = e.target.elements;

    localStorage.setItem("user", user.value)
    localStorage.setItem("password", password.value)

    console.log(localStorage.getItem('user'))

    history.push('/rh/users')
  }

  return (
    <div>
      <TopbarLogin />
      <Container center={true}>
        <Card>
          <Title>Iniciar sesión</Title>
          <form onSubmit={handleSubmit}>
            <Input 
              label='Usuario' 
              placeholder='Usuario' 
              name='user' 
              type='text'
              required
              onChange={ e => setUser(e.target.value) }
              value={ user }
            />
            <br />
            <Input
              label='Contraseña' 
              placeholder='Contraseña' 
              name='password' 
              type='password'
              required
              onChange={e => setPassword(e.target.value)}
              value={ password }
            />
            <br /><br />
            <MainButton fullWidth>Ingresar</MainButton>
          </form>
        </Card>
      </Container>
    </div>
  )
} 

export default withRouter(Login)

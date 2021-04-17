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

    console.log(localStorage.getItem('user'))
    // console.log(password)

    history.push('/rh/users')
  }

  return (
    <div>
      <TopbarLogin />
      <Container center={true}>
        <Card>
          <br />
          <br />
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
              placeholder='********' 
              name='password' 
              type='password'
              required
              onChange={e => setPassword(e.target.value)}
              value={ password }
            />
            <br /><br />
            <MainButton full={true}>Ingresar</MainButton>
            <br /><br /><br />
          </form>
        </Card>
      </Container>
    </div>
  )
} 

export default withRouter(Login)

import { useState, useLayoutEffect } from 'react'
import Card from '../components/Card'
import Container from '../components/Container'
import Title from '../components/Title'
import Input from '../components/Input'
import MainButton from '../components/Button'
import TopbarLogin from '../components/TopbarLogin'
import { withRouter, useHistory } from "react-router"
import axios from 'axios'
import { useAlert } from 'react-alert'

const Login = props => {
  const history = useHistory()
  const alert = useAlert()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [buttonState, setButtonState] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { user, password } = e.target.elements
    setButtonState(true)

    let mounted = false;

    await axios.get(
      'http://localhost:8080/serviciosweb/rh-app/login.php',
      {
        params: {
          user: user.value,
          pass: password.value
        }
      })
      .then(response => { 
        const obj = response.data
        if (obj.Status === 'Succes') {
          localStorage.setItem("user", user.value)
          mounted = true
        }
        else {
          let msj = "Error "+ obj.Code + ": " + obj.Message
          alert.error(<div style={{ textTransform: 'initial' }}>{msj}</div>)
          setPassword('')
        }
      })
      .catch(error => {
          console.log(error)
      })

    if (mounted) {
      setButtonState(false)
      history.push('/rh/users')
    }
  }

  useLayoutEffect(() => {
    document.title = "RH Login"
  }, [])

  return (
    <div>
      <TopbarLogin />
      <Container center={true}>
        <Card>
          <br /><br />
          <Title>Iniciar sesión</Title>
          <br />
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
            <MainButton full={true} disabled={buttonState}>Ingresar</MainButton>
            <br /><br /><br />
          </form>
        </Card>
      </Container>
    </div>
  )
} 

export default withRouter(Login)

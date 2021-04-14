import Input from './Input'
import MainButton from './Button'
import { useState } from 'react'

const LoginForm = props => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    const { user, password } = e.target.elements;

    localStorage.setItem("user", user.value)
    localStorage.setItem("pass", password.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label='Usuario' 
        placeholder='Usuario' 
        name='user' 
        type='text' 
        onChange={ e => setUser(e.target.value) }
        value={ user }
      />
      <Input
        label='Contraseña' 
        placeholder='Contraseña' 
        name='password' 
        type='password' 
        onChange={e => setPassword(e.target.value)}
        value={ password }
      />
      <MainButton fullWidth>Ingresar</MainButton>
    </form>
  )
} 

export default LoginForm
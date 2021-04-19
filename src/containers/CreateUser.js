import { useState, useLayoutEffect } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import Input from '../components/Input'
import MainButton from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'
import { 
  Grid, Container, Dialog, DialogContent,
  DialogTitle, Typography, DialogActions, CircularProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter, useHistory } from "react-router"
import axios from 'axios'
import { useAlert } from 'react-alert'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: '#0ba360',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  dialogTitle: {
    textTransform: 'none',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '18px',
    fontWeight: 800,
  },
  text: {
    textTransform: 'none',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    textAlign: 'center'
  }
}));

const style = {
  text: {
    color: '#777',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '16px',
    fontWeight: 800,
  },
  message: {
    color: '#EA1601',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
  }
}

const CreateUser = () => {
  const history = useHistory()
  const classes = useStyles()
  const alert = useAlert()

  const [password, setPassword] = useState('')
  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    document.title = "Create user"
  })

  const handleOk = async () => {
    setOpen(false)
    setLoading(true)

    let formData = new FormData()
    formData.append("user", localStorage.getItem('user'))
    formData.append("pass", password)
    formData.append("newUser", newUser)
    formData.append("newPass", newPassword)

    const url = 'http://localhost:8080/serviciosweb/rh-app/createUser.php'

    await axios.post(url, formData)
      .then(response => {
        console.log(response)
        let msj = response.data.Code + ': ' + response.data.Message;
        if (response.data.Status === 'Successfully') {
          alert.success(
            <div style={{ textTransform: 'initial' }}>
              {msj}
            </div>
          )
          history.goBack()
        }
        else {
          alert.error(
            <div style={{ textTransform: 'initial' }}>
              {msj}
            </div>
          )
        }
      })
      .catch(error => {
          console.log(error)
      })
    
    setLoading(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const fieldsFilled = () => {
    return (password === '' || newUser === '' || newPassword === '' ) ? true : false
  }

  const handleSubmit = () => {
    if (fieldsFilled()) {
      setMessage('Ingrese todos los datos solicitados.')
      return
    }
    const alphanumeric = /[a-zA-Z0-9]/;
    if (!alphanumeric.test(newUser)) {
      setMessage('Nuevo usuario: solo alfanuméricos.')
      return
    }
    if (/\s/.test(newUser)) {
      setMessage('Nuevo usuario: no use espacios.')
      return
    }
    if (newPassword.length < 8) {
      setMessage('Nueva contraseña: mínimo 8 caracteres.')
      return
    }
    if (!/[0-9]{1}/.test(newPassword)) {
      setMessage('Nueva contraseña: mínimo 1 número.')
      return
    }
    setMessage('')
    setOpen(true)
  }

  const handleCancelar = () => {
    history.goBack()
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Card >
              <Title>Nuevo usuario</Title>
                <p style={style.text}>Credenciales (usuario actual)</p>
                <Input 
                  label='Contraseña' 
                  placeholder='********'
                  name='password' 
                  type='password'
                  onChange={e => setPassword(e.target.value)}
                  value={ password }
                />
                <br />
                <p style={style.text}>Nuevo usuario</p>
                <Input
                  label='Usuario' 
                  placeholder='p.ej. pruebas1' 
                  name='newUser' 
                  type='text'
                  onChange={ e => setNewUser(e.target.value) }
                  value={ newUser }
                />
                <Input
                  label='Contraseña' 
                  placeholder='********' 
                  name='newPassword' 
                  type='password'
                  onChange={e => setNewPassword(e.target.value)}
                  value={ newPassword }
                />
                <div className='info'>
                  <small style={style.message}>{message}</small>
                </div>
                <br />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between' 
                }}>
                  <div className={classes.wrapper}>
                    <MainButton 
                      full={false}
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      Guardar
                    </MainButton>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </div>
                  <div className={classes.wrapper}>
                    <SecondaryButton 
                      full={false}
                      onClick={handleCancelar}
                      disabled={loading}
                    >
                      Cancelar
                    </SecondaryButton>
                  </div>
                </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      { open &&
        <Dialog
          disableBackdropClick disableEscapeKeyDown
          maxWidth="xs" aria-labelledby="confirmation-dialog-title"
          open={open}
        >
          <DialogTitle id="confirmation-dialog-title">
            <Typography className={classes.dialogTitle}>
              Confirmación
            </Typography>
          </DialogTitle>
          <DialogContent dividers>
            <Typography className={classes.text} justify="center">
              ¿Está seguro de que desea guardar la información?
            </Typography>
          </DialogContent>
          <DialogActions>
            <MainButton
              full={false}
              onClick={handleOk}
            >
              Aceptar
            </MainButton>
            <SecondaryButton
              full={false}
              onClick={handleCancel}
            >
              Cancelar
            </SecondaryButton>
          </DialogActions>
        </Dialog>
      }
    </div>
  )
}

export default withRouter(CreateUser)
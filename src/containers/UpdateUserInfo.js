import { useState, useLayoutEffect } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import Input from '../components/Input'
import ComboBox from '../components/ComboBox'
import MainButton from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'
import { 
  Grid, Container, Dialog, DialogContent,
  DialogTitle, Typography, DialogActions,
  Stepper, StepLabel, Step
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter, useHistory } from "react-router"
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { useAlert } from 'react-alert'

const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(2),
  },
  title: {
    textTransform: 'none',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '16px',
    fontWeight: 800,
  },
  stepper: {
    padding: theme.spacing(0, 0, 1),
  },
}));

const style = {
  text: {
    color: '#777',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '18px',
    fontWeight: 800,
    padding: '5px 0px 10px 0px'
  },
  message: {
    color: '#EA1601',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
  }
}

const UpdateUserInfo = props => {
  const { user, email, name, role, telephone } = useParams()
  
  const history = useHistory()
  const classes = useStyles()
  // const alert = useAlert()

  // const [usuario] = useState(user)
  const [password, setPassword] = useState('')
  const [correo, setCorreo] = useState(email)
  const [nombre, setNombre] = useState(name)
  const [rol, setRol] = useState(role)
  const [telefono, setTelefono] = useState(telephone)

  const [messageA, setMessageA] = useState('')
  const [messageB, setMessageB] = useState('')
  const [open, setOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useLayoutEffect(() => {
    document.title = "RH Update user"
  })

  const handleNext = () => {
    console.log(user)
    if (password === '') {
      setMessageA('Ingrese todos los datos solicitados.')
      return
    }
    setMessageA('')
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleOk = async () => {
    let formData = new FormData()
    formData.append("user", localStorage.getItem('user'))
    formData.append("pass", password)
    formData.append("searchedUser", user)
    formData.append("correo", correo)
    formData.append("nombre", nombre)
    formData.append("rol", rol)
    formData.append("telefono", telefono)

    const url = 'http://localhost:8080/serviciosweb/rh-app/updateUserInfo.php'

    await axios.post(url, formData)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
          console.log(error)
      })
    
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const fieldsFilled = () => {
    return (telefono === '' || correo === '' || nombre === '' ) ? true : false
  }

  const handleSubmit = () => {
    if (fieldsFilled()) {
      setMessageB('Ingrese todos los datos solicitados.')
      return
    }
    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reEmail.test(correo)) {
      setMessageB('Revise el campo "Correo".')
      return
    }
    const reTelphone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    if (!reTelphone.test(telefono)) {
      setMessageB('Revise el campo "Telefóno".')
      return
    }
    setMessageB('')
    setOpen(true)
  }

  const handleCancelar = () => {
    history.goBack()
  }

  const steps = ['Credenciales', 'Usuario']

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
              <Title>Actualizar usuario</Title>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                      <StepLabel className={classes.title}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              { activeStep === 0 &&
                <div>
                  <br />
                  <div style={style.text}>Credenciales (usuario actual)</div>
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
                  <div className='info'>
                    <small style={style.message}>{messageA}</small>
                  </div>
                  <br /><br />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between' 
                  }}>
                    <MainButton 
                      full={false}
                      onClick={handleNext}
                    >
                      Continuar
                    </MainButton>
                    <SecondaryButton 
                      full={false}
                      onClick={handleCancelar}
                    >
                      Cancelar
                    </SecondaryButton>
                  </div>
                </div>
              }
              { activeStep === 1 &&
                <div>
                  <div style={style.text}>Usuario</div>
                  <ComboBox 
                    label='Rol'
                    onChange={ e => setRol(e.target.value) }
                    value={ rol }
                  />
                  <Input
                    label='Correo' 
                    placeholder='p.ej. correo@ejemplo.com' 
                    name='correo'
                    type='email'
                    required
                    onChange={ e => setCorreo(e.target.value) }
                    value={ correo }
                  />
                  <Input
                    label='Nombre' 
                    placeholder='p.ej. Federico Smit' 
                    name='nombre' 
                    type='text'
                    required
                    onChange={e => setNombre(e.target.value)}
                    value={ nombre }
                  />
                  <Input
                    label='Telefono' 
                    placeholder='p.ej. 222-333-4455' 
                    name='telefono'
                    type='text'
                    required
                    onChange={e => setTelefono(e.target.value)}
                    value={ telefono }
                  />
                  <div className='info'>
                    <small style={style.message}>{messageB}</small>
                  </div>
                  <br />
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minWidth: '275px',
                  }}>
                    <MainButton 
                      full={false}
                      onClick={handleSubmit}
                    >
                      Guardar
                    </MainButton>
                    <SecondaryButton 
                      full={false}
                      onClick={handleBack}
                    >
                      Volver
                    </SecondaryButton>
                  </div>
                </div>
              }
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

export default withRouter(UpdateUserInfo)
import { useState } from 'react'
import { withRouter, useHistory } from "react-router"
import Title from '../components/Title'
import MainButton from '../components/Button'
import SearchInput from '../components/SearchInput'
import CardUser from '../components/CardUser'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(0),
  },
}));

function createData(usuario, correo, nombre, rol, telefono) {
  return { usuario, correo, nombre, rol, telefono }
}

const rows = [
  createData('pruebas1', 'correo@ejemplo.com', 'Luis D', 'ventas', '222-110-20-30'),
  createData('pruebas2', 'correo@ejemplo.com', 'Luis H', 'ventas', '222-110-20-11'),
  createData('pruebas3', 'correo@ejemplo.com', 'Luis R', 'ventas', '333-110-20-30'),
  createData('pruebas4', 'correo@ejemplo.com', 'Luis W', 'ventas', '333-110-20-22'),
  createData('pruebas5', 'correo@ejemplo.com', 'Luis', 'ventas', '22-21-10-20-30'),
  createData('pruebas6', 'correo@ejemplo.com', 'Luis', 'ventas', '22-21-10-20-30'),
  createData('pruebas7', 'correo@ejemplo.com', 'Luis', 'ventas', '22-21-10-20-30'),
];

function Users() {
  const history = useHistory()
  const classes = useStyles()

  const [busqueda, setBusqueda] = useState('')

  const handleBusqueda = (event) => {
    let resultado = event.target.value
    setBusqueda(resultado)
  }

  const handleCrear = e => {
    history.push('/rh/users/new')
  }

  const resultados = !busqueda
      ? rows
      : rows.filter(row =>
          row.usuario.toLowerCase().includes(busqueda.toLowerCase())
      )

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} />
          <Grid item xs={12} sm={12}>
            <Title>Usuarios del sistema</Title>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SearchInput 
              placeholder='Buscar usuario'
              value={busqueda}
              onChange={handleBusqueda}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <MainButton full={true} onClick={handleCrear}>Crear user</MainButton>
          </Grid>
          <Grid item xs={12} sm={12} />
          <Grid container
            spacing={2}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {
              resultados.map((row) => (
                <Grid item xs={12} sm={4} key={row.usuario}>
                  <CardUser user={row.usuario} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(Users)

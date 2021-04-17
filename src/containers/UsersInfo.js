import { useState } from 'react'
import Title from '../components/Title'
import MainButton from '../components/Button'
import SearchInput from '../components/SearchInput'
import TableUsers from '../components/TableUsers'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter, useHistory } from "react-router"

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
  createData('pruebas2', 'correo@ejemplo.com', 'Luis H', 'almacen', '222-110-20-11'),
  createData('pruebas3', 'correo@ejemplo.com', 'Luis R', 'ventas', '333-110-20-30'),
  createData('pruebas4', 'correo@ejemplo.com', 'Luis W', 'ventas', '333-110-20-22'),
  // createData('pruebas5', 'correo@ejemplo.com', 'Luis', 'ventas', '22-21-10-20-30'),
  // createData('pruebas6', 'correo@ejemplo.com', 'Luis', 'ventas', '22-21-10-20-30'),
  // createData('pruebas7', 'correo@ejemplo.com', 'Luis', 'ventas', '22-21-10-20-30'),
];

const UsersInfo = () => {
  const classes = useStyles()
  const history = useHistory()

  const [busqueda, setBusqueda] = useState('')

  const handleBusqueda = (event) => {
    let resultado = event.target.value
    setBusqueda(resultado)
  }

  const handleCrear = () => {
    history.push('/rh/usersInfo/new')
  }

  const resultados = !busqueda
      ? rows
      : rows.filter(row =>
          row.nombre.toLowerCase().includes(busqueda.toLowerCase())
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
            <Title>Información de los Usuarios</Title>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SearchInput 
              placeholder='Buscar usuario por nombre...'
              value={busqueda}
              onChange={handleBusqueda}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <MainButton 
              full={true}
              onClick={handleCrear}
            >
              Crear user info
            </MainButton>
          </Grid>
          <Grid item xs={12} sm={12} />
          <Grid item xs={12} sm={12}>
            <TableUsers rows={ resultados }/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(UsersInfo)
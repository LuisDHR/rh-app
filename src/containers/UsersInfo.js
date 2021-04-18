import { useState, useEffect } from 'react'
import Title from '../components/Title'
import MainButton from '../components/Button'
import SearchInput from '../components/SearchInput'
import TableUsers from '../components/TableUsers'
import axios from 'axios'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter, useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(0),
  },
}));

const UsersInfo = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const [busqueda, setBusqueda] = useState('')
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    document.title = "RH Users info"
    axios.get('http://localhost/serviciosweb/rh-app/usersInfo.php')
      .then(response => {
        console.log(Object.keys(response.data.Data))
        const info = Object.keys(response.data.Data)
        const arr = Object.values(response.data.Data)
        const final = []

        var index = 0
        arr.forEach(item => {
          const Nombre = item.Nombre
          const Correo = item.Correo
          const Rol = item.Rol
          const Telefono = item.Telefono

          const data = {
            Nombre, Correo, Rol, Telefono
          }

          final.push({
            ...data,
            user: info[index]
          })

          index ++
        })

        console.log('Final: ', final)
        setUsuarios(final)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleBusqueda = (event) => {
    let resultado = event.target.value
    setBusqueda(resultado)
  }

  const handleCrear = () => {
    history.push('/rh/usersInfo/new')
  }

  const resultados = !busqueda
      ? usuarios
      : usuarios.filter(row =>
          row.Nombre.toLowerCase().includes(busqueda.toLowerCase())
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
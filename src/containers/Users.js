import { useState, useEffect } from 'react'
import { withRouter, useHistory } from "react-router"
import Title from '../components/Title'
import MainButton from '../components/Button'
import SearchInput from '../components/SearchInput'
import CardUser from '../components/CardUser'
import axios from 'axios'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(0),
  },
}));

function Users() {
  const history = useHistory()
  const classes = useStyles()

  const [busqueda, setBusqueda] = useState('')
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/serviciosweb/rh-app/users.php')
    .then(response => {
      const arr = Object.values(response.data.Data)
      const info = []
      const currentUser = localStorage.getItem('user')

      arr.forEach(item => {
        const user = item

        if (user !== currentUser)
          info.push({ user })
      })

      setUsuarios(info)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const handleBusqueda = (event) => {
    let resultado = event.target.value
    setBusqueda(resultado)
  }

  const handleCrear = e => {
    history.push('/rh/users/new')
  }

  const resultados = !busqueda
      ? usuarios
      : usuarios.filter(row =>
          row.user.toLowerCase().includes(busqueda.toLowerCase())
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
            justify="flex-start"
            alignItems="center"
          >
            {
              resultados.map((row) => (
                <Grid item xs={12} sm={4} key={row.user}>
                  <CardUser user={row.user} />
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

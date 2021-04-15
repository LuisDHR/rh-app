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

function Users() {
  const classes = useStyles();

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
          <Grid item xs={12} sm={12}>
            <Title>Usuarios del sistema</Title>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SearchInput placeholder='Buscar usuario' />
          </Grid>
          <Grid item xs={12} sm={3}>
            <MainButton full={true}>Nuevo usuario</MainButton>
          </Grid>
          <Grid item xs={12} sm={12} />
          <Grid item xs={12} sm={4}>
            <CardUser user="pruebas1" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardUser user="pruebas1" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardUser user="pruebas1" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardUser user="pruebas1" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Users

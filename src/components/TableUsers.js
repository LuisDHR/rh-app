import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Table , TableBody, TableCell, TableContainer,
         TableHead, TableRow, Paper, IconButton
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#292943',
    color: '#ffffff',
    fontFamily: 'Mulish, sans-serif',
    fontSize: 16,
    fontWeight: 800,
    border: 'none'
  },
  body: {
    fontSize: 16,
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    color: '#333333',
    fontVariantNumeric: 'tabular-nums',
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#f9f9f9',
    '&:nth-of-type(odd)': {
      backgroundColor: '#FFFFFF',
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  container: {
    maxHeight: 440,
  },
  icon: {
    color: '#505050'
  }
});

const TableUsers = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const { rows } = props

  const handleUpdate = (user, email, name, role, telephone) => {
    history.push('/rh/usersInfo/' + user + '/' + email + '/' + name + '/' + role + '/' + telephone)
  }

  return (
    <TableContainer component={Paper}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Usuario</StyledTableCell>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Rol</StyledTableCell>
              <StyledTableCell align="left">Telefóno</StyledTableCell>
              <StyledTableCell align="center">Editar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.user}>
                <StyledTableCell align="left">
                  <span>{row.user}</span> <br />
                  <span style={{ fontSize: 14, color: '#999' }}>{row.Correo}</span>
                </StyledTableCell>
                <StyledTableCell align="left">{row.Nombre}</StyledTableCell>
                <StyledTableCell align="left">{row.Rol}</StyledTableCell>
                <StyledTableCell align="left">{row.Telefono}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    color="inherit"
                    className={classes.icon}
                    onClick={() => handleUpdate(row.user, row.Correo, row.Nombre, row.Rol, row.Telefono)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </IconButton></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainer>
  );
}

export default TableUsers
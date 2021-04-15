import { makeStyles } from '@material-ui/core/styles';
import { Paper, Input } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  input: {
      fontFamily: 'Mulish, sans-serif',
      fontSize: '14px',
      flexGrow: 1,
      letterSpacing: '-0.05px',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
  },
  paper: {
      borderRadius: '8px',
      alignItems: 'center',
      padding: theme.spacing(1),
      display: 'flex',
      flexBasis: 420,
      borderColor: '#192D3E'
  },
}));

const SearchInput = (props) => {
  const {...rest} = props
  const classes = useStyles()

  return (
    <Paper
      variant="outlined"
      className={classes.paper}
    >
      <FontAwesomeIcon icon={faSearch} />
      <Input
        {...rest}
        fullWidth
        className={classes.input}
        disableUnderline
        type="search"
      />
    </Paper>
  )
}

export default SearchInput
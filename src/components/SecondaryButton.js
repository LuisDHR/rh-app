import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#FFF',
    color: '#333',
    textTransform: 'none',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '14px',
    fontWeight: 800,
    height: '45px',
    borderRadius: '8px',
    border: '1px solid #D0DFD9',
    boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.25)',
    minWidth: '130px',
    '&:hover': {
        backgroundColor: '#F2FFFB',
    }
  }

}));

const SecondaryButton = (props) => {
    const classes = useStyles();
    const { full = false, ...rest } = props;

    return (
      // <button {...rest} style={style(block)} />
      <Button
        {...rest}
        className={classes.button}
        color="primary"
        variant="contained"
        type="button"
        fullWidth={ full }
      />
    )
}

 export default SecondaryButton
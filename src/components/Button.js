import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
    textTransform: 'none',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '16px',
    fontWeight: 800,
    height: '45px',
    borderRadius: '8px',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.25)',
    minWidth: '200px',
    '&:hover': {
			backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 50%)',
		}
  }

}));

// const style = (block) => ({
//     // backgroundColor: '#00D1B2',
//     backgroundImage: 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
//     border: '0px',
//     borderRadius: '6px',
//     color: '#fff',
//     fontFamily: 'Mulish, sans-serif',
//     fontSize: '16px',
//     fontWeight: 800,
//     marginBottom: '10px',
//     padding: '12px 15px',
//     width: block ? '100%' : '200px',
// })

const MainButton = (props) => {
    const classes = useStyles();
    const { full = false, ...rest } = props;

    return (
      // <button {...rest} style={style(block)} />
      <Button
        {...rest}
        className={classes.button}
        color="primary"
        variant="contained"
        type="submit"
        fullWidth={ full }
      />
    )
}

 export default MainButton
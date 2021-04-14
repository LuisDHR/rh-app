import clsx from 'clsx'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Drawer } from '@material-ui/core'
import Sidebar from './Sidebar'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const useStyles = makeStyles(() => ({
  drawer: {
    width: 250,
    [theme.breakpoints.up('lg')]: {
      marginTop: 0,
      height: '100%'
    }
  },
  root: {
    background: '#1D1D39',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  nav: {
    marginBottom: '5px'
  }
}));

const SidebarRh = props => {
  const { open, variant, onClose, className, staticContext, ...rest } = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={ onClose }
      open={ open }
      variant={ variant }
    >
      <div
        { ...rest }
        className={ clsx(classes.root, className) }
      >
        <Sidebar
          className={ classes.nav }
        />
      </div>
    </Drawer>
  );
};

SidebarRh.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default withRouter(SidebarRh);
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router"
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/Logo.png'

const useStyles = makeStyles(theme => ({
    root: {
      background: '#FFF',
      color: '#000',
    },
    title: {
      flexGrow: 1,
    },
    flexGrow: {
      flexGrow: 1
    },
    signOutButton: {
      marginLeft: '5px'
    },
    colorA: {
      color: '#FFF',
      backgroundColor: '#111',
    },
}));

const Topbar = props => {
    const history = useHistory();
    const { className, onSidebarOpen, nombre, ...rest } = props;
    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem('user')
        window.location.reload()
        history.push('/login')
    };

    return (
        <AppBar
            { ...rest }
            className = { clsx(classes.root, className) }
            position="relative"
        >
            <Toolbar>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={ onSidebarOpen }
                    >
                      <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <div className={classes.flexGrow} />
                </Hidden>
                <img
                    alt="Logo"
                    src={ Logo }
                    height={ 35 }
                />
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <Typography variant="h6" noWrap className={ classes.title }>
                        &nbsp;
                    </Typography>
                </Hidden>
                <IconButton onClick={ handleLogout }>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func
};

export default Topbar;
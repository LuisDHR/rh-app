import { forwardRef } from 'react';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 0,
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  top: {
    fontSize: '18px',
    fontWeight: 800,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
  active: {
    background: "#292943",
    color: '#FFFFFF',
    fontWeight: '800',
    borderLeft: '5px solid #6414DB',
  },
  button: {
    color: '#FFFFFF',
    padding: '15px 0px 15px 30px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '18px',
    fontWeight: 800,
    letterSpacing: 0,
    width: '100%',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: 'rgba(0, 92, 146, 0.5)',
    }
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ ref }
    style={{ flexGrow: 1 }}
  >
    <RouterLink { ...props } />
  </div>
));

const Sidebar = props => {
  const { className, staticContext, ...rest } = props;
  const classes = useStyles();

  const pages = [
    {
      title: 'Users',
      href: '/rh/users',
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      title: 'Users info',
      href: '/rh/usersInfo',
      icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
  ];

  return (
    <List
      { ...rest }
      className={ clsx(classes.root, className) }
    >
      <ListItem
        className={ classes.top }
        disableGutters
        key={ "Title" }
      >
        <FontAwesomeIcon icon={faEllipsisH} />
      </ListItem>
      { pages.map(page => (
        <ListItem
          className={ classes.item }
          disableGutters
          key={ page.title }
        >
          <Button
            activeClassName={ classes.active }
            className={ classes.button }
            component={ CustomRouterLink }
            to={ page.href }
            fullWidth
          >
            { page.icon }&nbsp;{ page.title }
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default withRouter(Sidebar);
import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Topbar from './Topbar'
import SidebarRh from './SidebarRh'

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
  root: {
    paddingTop: 0,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    }
  },
  shiftContent: {
    paddingTop: 0,
    paddingLeft: 250
  },
  content: {
    height: '100%'
  }
}));
  
const MainRh = props => {
  const { children } = props;

  const classes = useStyles();
  const isDesktop = useMediaQuery( theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar 
        onSidebarOpen={ handleSidebarOpen }
      />
      <SidebarRh
        onClose={ handleSidebarClose }
        open={ shouldOpenSidebar }
        variant={ isDesktop ? 'persistent' : 'temporary' }
      />
      <Container>
        { children }
      </Container>
    </div>
  );
};
  
  MainRh.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export default MainRh;
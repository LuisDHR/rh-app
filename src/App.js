import './App.css'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Route } from 'react-router'
import GuardRoute from './route/guardRoute'
import Login from './containers/Login'
import MainRh from './layout/mainRh'
import Users from './containers/Users'
import UsersInfo from './containers/UsersInfo'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GuardRoute 
          path="/rh/users"
          component={ Users }
          exact
          layout={ MainRh }
        />
        <GuardRoute 
          path="/rh/usersInfo"
          component={ UsersInfo }
          exact
          layout={ MainRh }
        />
        <Route exact path="/login" component={ Login } />
        <Redirect from="/" to ="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

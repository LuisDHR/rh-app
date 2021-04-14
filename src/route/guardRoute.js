import { Route, Redirect } from "react-router-dom";

const GuardRoute = ({ component: RouteComponent, layout: Layout, ...rest }) => {

  return (
    <Route
      {...rest}
      render={routeProps =>
        !localStorage.getItem("user") ? (
          <Redirect to={ "/login" } />
        ) : (
          <Layout>
            <RouteComponent { ...routeProps } />
          </Layout>
        )
      }
    />
  );

};

export default GuardRoute;
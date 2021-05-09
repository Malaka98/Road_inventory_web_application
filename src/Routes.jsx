import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Dashboard/Form/CreateNewForm";
import FullDetail from "./Components/Dashboard/ViewData/FullDetail";
import View from "./Components/SearchData/View";
import Index from "./Components/FrontPage/index";
import ViewFulldetail from "./Components/SearchData/Fulldetail";
// import FrontPage from "./Components/FrontPage/index";
export default function AppRoutes() {
  const routes = [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/createnewdocument",
      component: Form,
    },
    {
      path: "/fulldetails",
      component: FullDetail,
    },
    {
      path: "/viewfulldetail",
      component: ViewFulldetail,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/frontpage",
      component: Index,
    },
    {
      path: "/",
      component: View,
    },
  ];

  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          return <RoutWithSubRoutes key={i} {...route} />;
        })}
      </Switch>
    </Router>
  );
}

export function RoutWithSubRoutes(route) {
  return (
    <div>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route} />}
      />
    </div>
  );
}

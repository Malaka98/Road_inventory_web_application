import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Dashboard/Form/CreateNewForm'
import FullDetail from "./Components/Dashboard/ViewData/FullDetail";


export default function AppRoutes() {

    const routes = [
        {
            path: '/dashboard',
            component: Dashboard,
        },
        {
            path: '/createnewdocument',
            component: Form,
        },
        {
            path: '/fulldetails',
            component: FullDetail,
        },
        {
            path: '/',
            component: Login,
        }
    
    ]

    return (
        <Router>
        <Switch>
          {
            routes.map((route, i) => {
              return <RoutWithSubRoutes key={i} {...route} />
            })
          }
        </Switch>
      </Router>
    )
}


export function RoutWithSubRoutes(route) {
    return (
        <div>
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route} />
                )}
            />
        </div>
    )
}


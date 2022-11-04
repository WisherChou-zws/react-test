import React from "react"
import { Route } from "react-router"

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ "./App"))
const About = React.lazy(() => import(/* webpackChunkName: "About" */ "./pages/About"))
const User = React.lazy(() => import(/* webpackChunkName: "User" */ "./pages/User"))

const routesConfig = [
  {
    path: '/',
    title: '首页',
    exact: true,
    noAuth: false,
    component: Home
  },
  {
    path: '/About',
    title: '关于',
    exact: true,
    noAuth: false,
    component: About
  },
  {
    path: '/User',
    title: '个人中心',
    exact: true,
    noAuth: false,
    component: User
  }
]
const RoutesComponent = () => {
  return routesConfig.map(d => {
    return <Route
        key={d.path}
        path={d.path}
        exact={d.exact}
        element={d.component}
      >
        {
          d.children && d.children.map(child => {
            return <Route
              key={child.path}
              path={child.path}
              exact={child.exact}
              element={child.component}
            />
          })
        }
      </Route>
  })
}
export default RoutesComponent

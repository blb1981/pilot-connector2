import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import Register from './Register'
import NotFound from './NotFound'
import AuthLayout from './AuthLayout'
import PublicRoute from './PublicRoute'
import ForgotPassword from './ForgotPassword'
import Dashboard from './Dashboard'
import DashboardLayout from './DashboardLayout'
import JobFeed from './JobFeed'

function App() {
  return (
    //prettier-ignore
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><Redirect to="/jobs" /></Route>
          <PublicRoute path="/jobs" component={JobFeed} layout={DashboardLayout} />
          <PublicRoute path="/login" component={Login} layout={AuthLayout} />
          <PublicRoute path="/register" component={Register} layout={AuthLayout} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} layout={AuthLayout} />
          <ProtectedRoute path="/dashboard" component={Dashboard} layout={DashboardLayout} />
          <Route> <NotFound /> </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

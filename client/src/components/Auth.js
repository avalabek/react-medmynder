import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Profile from "../pages/Profile";


//this is a dummy object; will use our real authorization here
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
////end dummy auth

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button 
          onClick={this.login}
          className="waves-effect waves-light btn-large"
        
        name="action"
        style={{ fontFamily: "IBM Plex Sans" }}
          >Log in</button>
      </div>
    )
  }
}
// Private Route It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! 
      <button 
      className="waves-effect waves-light btn-large"
        
        name="action"
        style={{ fontFamily: "IBM Plex Sans" }}
      onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))
// Routes below:  anyone who tries to access /protected, 
// who isn’t authenticated, will get redirected to /login
export default function AuthExample () {
  return (
    <Router>
      <div>
        <AuthButton/>
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/protected' component={Profile} />
      </div>
    </Router>
  )
}
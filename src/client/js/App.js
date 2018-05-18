import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import Demos from './Demos';
import Ventas from './components/Ventas';
import RegistroCliente from './components/RegistroCliente';
import RegistroProducto from './components/RegistroProducto';
import Reporte from './components/Reporte';
import Inicio from './components/Inicio';
import Home from './components/Home';
import Menu from './components/Menu';



const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true,
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false,
    setTimeout(cb, 100)
  }
}






const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }} />
  )} />
)

















class App extends Component {

    state = {
    redirectToReferrer: false
  }

  handleLogin = () => {
    AuthService.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  handleOut = () => {
    AuthService.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: false
      }))
    })
  }




  render (){
    return <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/menu' component={Menu} />
        <PrivateRoute exact path='/ventas' component={Ventas}/>
		    <PrivateRoute exact path='/productos' component={RegistroProducto}/> 
        <PrivateRoute exact path='/clientes' component={RegistroCliente}/> 
        <PrivateRoute exact path='/reportes' component={Reporte}/>  
        <Route exact path='/login' render={(props) => ( <Inicio {...props} fn={this.handleLogin} state={this.state}  from={this.props.location}/> )}  />        
      </Switch>
    </div>
  }
}

ReactDOM.render(<Router>
  <App/>
</Router>, document.getElementById('app-container'));

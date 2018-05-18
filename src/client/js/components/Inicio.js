import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import request from 'superagent'
const API_URL = 'http://localhost:3000'
class Inicio extends Component {



iniciar = (e) => {
    e.preventDefault()

    const sendRegistro = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    

     request
      .post(`${API_URL}/auth/login`)
      .send(sendRegistro)
      .then(response => {
        // alert(`Welcome`)
        this.props.fn()
        console.log(response.body)
        // this.props.fnActualizarStatePorUserLogin()
      })
      .catch(function(e) {
        console.log(e)
        alert("Hola, por favor intenta de nuevo. Si eres usuario nuevo, registrate.");
      })
  }


  // registro = (e) => {
  //   e.preventDefault()

  //   const sendRegistro = {
  //     email: e.target.email.value,
  //     password: e.target.password.value
  //   }
    
  //    request
  //     .post(`${API_URL}/auth/register`)
  //     .send(sendRegistro)
  //     .then(response => {
  //       console.log(`Welcome registrar`)
  //       // this.props.fnActualizarStatePorUserLogin()
  //     })
  //     .catch(function(e) {
  //       console.log(e)
  //       alert("Hola, por favor intenta de nuevo. Si eres usuario nuevo, registrate.");
  //     })
  // }




  render() {
    const { redirectToReferrer } = this.props.state
    console.log(redirectToReferrer)
      const { from } = this.props.from || { from: { pathname: '/' } }
      console.log(from)
 
     if ( redirectToReferrer === true) {
      return <Redirect to={from} />
     }

  	return (
      <div className='contenedor__card'>
        <div className='form__separador'>
          <h1 className='form__titulo tr'>iniciar Sesión</h1>
        </div>
       <form name='inicio' onSubmit={ (e) => { this.iniciar(e)} } >
          <div className='form__separador'>
            <label className='form__label'>Email</label>
          </div>
          <div>
            <input className='form__input' type="text" name="email" />
          </div>
          <div className='form__separador'>
            <label className='form__label'>Password</label>
          </div>
          <div>
            <input className='form__input' type="password" name="password" />
          </div>
          <div className='form__separador'>
             <input className='form__boton br' type="submit" value="Submit" />
          </div>  
        </form>

      </div>
  	);
  }
}

export default Inicio;

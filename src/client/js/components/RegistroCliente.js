import React, { Component } from 'react'
import Menu from './Menu'
import request from 'superagent'

const API_URL = 'http://localhost:3000'
const usuario = 'damian'
class RegistroCliente extends Component {

   
   nuevoCliente = (e) => {
    e.preventDefault()

    const registroVenta = {
      nombre: e.target.nombre.value,
      responsable: e.target.responsable.value,
      telefono: e.target.telefono.value,
      direccion: e.target.direccion.value
    }

    console.log(registroVenta)

    request
      .post(`${API_URL}/api/clientes`)
      .send(registroVenta)
      .then(() => {

        request
          .get(`${API_URL}/api/clientes`)
          .then((data) => {
            this.setState({
              clientes: data.body
            })
          })
          .catch(function(e) {
            console.log(e)
          })
          alert('Registro hecho')
      })
      .catch(function(e) {
        console.log(e)
      })

      e.target.nombre.value = ''
      e.target.responsable.value = ''
      e.target.telefono.value = ''
      e.target.direccion.value = ''
      

  }

  render() {

  	return (
      <div>
        <div className='head__container'>
          <h1 className='titulo__componente'>Sistema de Gestión - Ventas</h1>
          <Menu />
        </div>
      
        <div className='contenedor__card'>
          <div className='form__separador'>
            <h1 className='form__titulo tv'>Registrar Clientes</h1>
          </div>
          <form name='formClientes' onSubmit={ (e) => { this.nuevoCliente(e)} }>

          <div className='form__separador'>
            <div>
              <label className='form__label'>Nombre</label>
            </div>
            <div>
              <input className='form__input' type="text" name="nombre" />
            </div>
          </div>

            <div className='form__separador'>
              <label className='form__label'>Responsable</label>
            </div>
            <div>
              <input className='form__input'  type="text" name="responsable" />
            </div>

            <div className='form__separador'>
              <label className='form__label'>Telefono</label>
            </div>
            <div>
              <input className='form__input'  type="number" name="telefono" />
            </div>

            <div className='form__separador'>
              <label className='form__label' >Dirección</label>
            </div>
            <div>
              <input className='form__input'  type="text" name="direccion" />
            </div>


            <div className='form__separador'>
               <input className='form__boton bv'  type="submit" value="Registrar" />
            </div>  
          </form>
        </div>
      </div>  
  	);
  }
}

export default RegistroCliente;

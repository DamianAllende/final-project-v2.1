import React, { Component } from 'react'
import Menu from './Menu'
import request from 'superagent'

const API_URL = 'http://localhost:3000'
const usuario = 'damian'
class RegistroProducto extends Component {


   
   nuevoProducto = (e) => {
    e.preventDefault()

    const registroProducto = {
      nombre: e.target.nombre.value,
      precio: e.target.precio.value,
      
    }

    console.log(registroProducto)

    request
      .post(`${API_URL}/api/productos`)
      .send(registroProducto)
      .then(() => {

        request
          .get(`${API_URL}/api/productos`)
          .then((data) => {
            this.setState({
              productos: data.body
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
      e.target.precio.value = ''

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
            <h1 className='form__titulo tr'>Registrar Productos</h1>
          </div>
          <form name='formClientes' onSubmit={ (e) => { this.nuevoProducto(e)} }>

          <div className='form__separador'>
            <div>
              <label className='form__label'>Nombre</label>
            </div>
            <div>
              <input className='form__input' type="text" name="nombre" />
            </div>
          </div>

            

            <div className='form__separador'>
              <label className='form__label'>Precio</label>
            </div>
            <div>
              <input className='form__input'  type="number" name="precio" />
            </div>

            


            <div className='form__separador'>
               <input className='form__boton br'  type="submit" value="Registrar" />
            </div>  
          </form>
        </div>
      </div>  
  	);
  }
}

export default RegistroProducto;

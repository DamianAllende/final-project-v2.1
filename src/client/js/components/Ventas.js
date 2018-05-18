import React, { Component } from 'react'
import request from 'superagent'

import ListaProductos from './ListaProductos'
import Menu from './Menu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


const API_URL = 'http://localhost:3000'
let nweLists = ''
//let listaParaVisualizar = []
let usuario = 'damian'
let dt = new Date();

// Display the month, day, and year. getMonth() returns a 0-based number.
let month = dt.getMonth()+1;
let day = dt.getDate();
let year = dt.getFullYear();
let mifecha = `${year}-${month}-${day}`
let idCompra = `${year}${month}${day}${1}`


class Ventas extends Component {
  

  constructor(){
      super()
      this.state = {
        ventas: [],
        clientes: [],
        productos: [],
        //listaRegistrada: []
      }
    }



componentDidMount() {
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
   }

  listaDeClientes = () => {
    return this.state.clientes.map((items) =>{
        return <option value={items.nombre} key={items.id}  >{items.nombre}</option>
        })
  }

  listaDeProdcutos = () => {
    return this.state.productos.map((items) =>{
        return <option value={items.nombre} data-nombre={items.nombre} key={items.id} >{items.nombre}</option>
        })
  }



  nuevaVenta = (e) => {
    e.preventDefault()

    const registroVenta = {
      cliente: e.target.cliente.value,
      producto: e.target.producto.value,
      cantidad: e.target.cantidad.value,
      tipo_pago: e.target.tipo_pago.value,
      id_compra: idCompra,
      usuario: usuario
      // fecha: e.target.fecha.value
    }
    console.log(registroVenta)
    // console.log(regis)
    request
      .post(`${API_URL}/api/ventas`)
      .send(registroVenta)
      .then(() => {

        request
          .get(`${API_URL}/api/ventas`)
          .then((data) => {
            this.setState({
              ventas: data.body
            })
          })
          .catch(function(e) {
            console.log(e)
          })
      })
      .catch(function(e) {
        console.log(e)
      })

      // this.setState({
      //         listaRegistrada: registroVenta
      //       })
      e.target.cantidad.value = ''

  }


  eliminarNewList = (e) => {
    e.preventDefault()
    console.log('lista eliminado')
    
    this.setState({
      ventas: []
    })

  }



  eliminarVenta = (elementId) => {
    console.log('Elemento eliminado')
    request
      .delete(`${API_URL}/api/ventas/${elementId}`)
      .then(() => {
        console.log('registro eliminado')
        request
          .get(`${API_URL}/api/ventas`)
          .then((data) => {
              this.setState({
                ventas: data.body 
              })
          })
      })

      .catch(function(e){
        console.log(e)
      })
  }



  // limpiarLista = (e) => {
  //    e.preventDefault()
  //   console.log('Limpiar lista')
  //   request
  //     .delete(`${API_URL}/api/ventas/${elementId}`)
  //     .then(() => {
  //       console.log('registro eliminado')
  //       request
  //         .get(`${API_URL}/api/ventas`)
  //         .then((data) => {
  //             this.setState({
  //               ventas: data.body 
  //             })
  //         })
  //     })

  //     .catch(function(e){
  //       console.log(e)
  //     })
  // }











  render() {
    // listaParaVisualizar.push(this.state.listaRegistrada)
    // console.log(listaParaVisualizar)
    nweLists = this.state.ventas.filter(items => items.cliente === formularioVenta.cliente.value && items.id_compra === idCompra)
    return (
      <div>

        <div className='head__container'>
          <h1 className='titulo__componente'>Sistema de Gestión - Ventas</h1>
          <Menu />
        </div>
        <div className='ventas'>
          
          <form name='formularioVenta' onSubmit={ (e) => { this.nuevaVenta(e)} } >
            <div className='ventas__separador'>
              <div>
                <h1  className='ventas__label'>Cliente</h1>
              </div>
                
              <div>
                <select  name='cliente' className='ventas__select ventas__clientes'>
                  {this.listaDeClientes()}
                </select>
              </div>
            </div>
            <div className='ventas__separador'>
              <div>
                <h1 className='ventas__label ' >Tipo de Pago</h1>
                <label className='titulo__radio' >Efectivo</label>
                <input className='ventas__radio' type="radio" value="efectivo" name='tipo_pago' />
                <label className='titulo__radio'>Crédito</label>
                <input type="radio" value="credito" name='tipo_pago' />
              </div>
            </div>
            <div className='ventas__separador'>
              <section className='ventas__productos__cantidad'>
                <div className='ventas__flex__uno'>
                  <h1 className='ventas__label'>Producto</h1>
                  <select  name= 'producto' className=' ventas__productos'>
                   {this.listaDeProdcutos()}
                   </select>
                </div>
                <div className='ventas__flex__dos'>
                  <h1 className='ventas__label ' >Cantidad</h1>
                  <input className='ventas__cantidad' type="number" name='cantidad'  />
                </div> 
              </section>
            </div>  
              
            <div className='ventas__separador'>  
              <div>
                 <input className='venta__boton' type="submit" value="Registrar" />
              </div>
            </div>    
          </form>
        </div>

         <div className='container__tabla'>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
            <tbody> 
              
              { nweLists.slice(0).reverse().map((items, i) =>{
              return<ListaProductos key={items.id} id={items.id} producto={items.producto} cantidad={items.cantidad} cliente={items.cliente} fn={ this.eliminarVenta }/>
              // return <ListaProductos cliente={items} fn={this.borrarItem} posicion={idArray} />
              })
            }
            </tbody> 
            </table>
          </div>
          <div className='limpiar'>
            <button className='limpiar__boton'  onClick={ (e) => { this.eliminarNewList(e)} } >Limpiar lista</button>
          </div>
    </div>    
    );
  }
}



export default Ventas;

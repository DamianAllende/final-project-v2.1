import React, { Component } from 'react'
import request from 'superagent'

import ListaActualizar from './ListaActualizar'


const API_URL = 'http://localhost:3000'

class ActualizarPagos extends Component {

constructor(){
      super()
      this.state = {
        ventas: []
      }
    }

componentDidMount() {
 
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

}

actualizarVenta = (elementId) => {
      request
        .put(`${API_URL}/api/ventas/${elementId}`)
        .send({
          tipo_pago: "efectivo"
        })
        .then((datas) => {
          
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
        .catch(function(e){
          console.log(e)
        })
  }


  
  render() {
    console.log('aqui Atualiza resultado')
    console.log(this.state.ventas)
    
    let listaPagos = this.state.ventas.filter(item => item.tipo_pago === "credito")
    
  	return (
        <div>
          
          <div className='container__tabla'>
            <table className="blueTable">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Crédito</th>
                </tr>
              </thead>
            <tbody> 

              { listaPagos.slice(0).reverse().map((items, i) =>{
              return<ListaActualizar key={items.id} id={items.id} producto={items.producto} cantidad={items.cantidad} fn={ this.actualizarVenta } />
              // return <ListaProductos cliente={items} fn={this.borrarItem} posicion={idArray} />
              })
            }
            </tbody> 
            </table>
          </div>

        </div>
            
  	);
  }
}

export default ActualizarPagos;
